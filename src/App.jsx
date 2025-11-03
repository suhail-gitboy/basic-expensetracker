import { useEffect, useState } from 'react'


import './App.css'
import Modaldata from './assets/Modal'


function App() {

  const [transactions,Setransaction] = useState([
   
  ]);

const [modal,Setmodal]=useState(false)
  const [input,Setinput]=useState({

title:"",
amount:0,


  })

  


const Total=transactions.reduce((prev,curr)=>prev+Number(curr.amount),0)



const Setdlete=(idx)=>{
  Setransaction(transactions.filter((_,id)=>id!==idx))
}

  return (
    <>
{modal&&<Modaldata Setmodal={Setmodal} input={input} Setinput={Setinput} transactions={transactions} Setransaction={Setransaction}/>}

    <div className="min-h-screen flex items-center justify-center bg-[#020617] p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left column - Summary + Add panel */}
        <div className="lg:col-span-1 col-span-1 space-y-6">
          <div className="rounded-2xl border border-[#0ea5ff33] p-6 bg-linear-to-br from-[#001021] to-transparent shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-lg font-semibold tracking-wide">Finance Tracker</h2>
              
              </div>
              <div className="p-2 rounded-lg bg-linear-to-br from-[#003a5c] to-[#00263a] border border-[#0ea5ff66]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#bff1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                </svg>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-[#bdefff]">Current Balance</p>
              <div className="mt-2 flex items-end gap-2">
                <h3 className="text-3xl font-bold text-white"></h3>
                <span className="text-xs text-[#88e6ff]">USD</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-[#0ea5ff33]">
                  <p className="text-xs text-[#bdefff]">Income</p>
                  <p className="mt-1 font-semibold text-white">$1200</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-[#0ea5ff33]">
                  <p className="text-xs text-[#ffd6d6]"> Total Expenses</p>
                  <p className="mt-1 font-semibold text-white">${Total
                    }</p>
                </div>
              </div>

              <button className="mt-6 w-full py-2 rounded-lg bg-linear-to-r from-[#0077cc] to-[#00b1ff] text-white font-medium shadow-neon hover:scale-[1.01] transition-transform" onClick={()=>Setmodal(true)}>
                + Add Transaction
              </button>
            </div>
          </div>

          {/* Quick Stats Card */}
     
        </div>

        {/* Middle column - Transactions */}
        <div className="lg:col-span-2 col-span-1 space-y-6">
          <div className="rounded-2xl p-6 bg-linear-to-br from-[#00121a] to-transparent border border-[#0ea5ff33] shadow-lg">
        

            <div className="mt-4 divide-y divide-[#0ea5ff20]">
             {
              transactions.length==0?(
                <div  className="py-3 flex items-center justify-between hover:bg-white/2 px-2 rounded-md transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center  'bg-gradient-to-br from-[#2b0b13] to-[#5a0b1a]' } border border-[#0ea5ff44]`}>
                      
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#bff1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m0 0l-3-3m3 3l3-3" />
                        </svg>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffd6d6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16V8m0 0l-3 3m3-3l3 3" />
                        </svg>
                    
                    </div>

                    <div>
                      <div className="text-white font-medium">your expense</div>
                     
                    </div>
                  </div>

                  <div className="text-right flex space-x-3 justify-center items-center">
                   <div>
                     <div className={` font-semibold`}>0000</div>
       
                   </div>
                   <div>
                    <button className='bg-blue-950 text-white text-xs  px-4 py-2 rounded-md border border-white/10' >clear</button>
                   </div>
                  </div>
                </div>
              ):(
                 transactions.map((t,id) => (
                <div  className="py-3 flex items-center justify-between hover:bg-white/2 px-2 rounded-md transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${t.type === 'income' ? 'bg-linear-to-br from-[#003a5c] to-[#006b9a]' : 'bg-gradient-to-br from-[#2b0b13] to-[#5a0b1a]' } border border-[#0ea5ff44]`}>
                      {t.type === 'income' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#bff1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m0 0l-3-3m3 3l3-3" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ffd6d6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16V8m0 0l-3 3m3-3l3 3" />
                        </svg>
                      )}
                    </div>

                    <div>
                      <div className="text-white font-medium">{t.title}</div>
                     
                    </div>
                  </div>

                  <div className="text-right flex space-x-3 justify-center items-center">
                   <div>
                     <div className={`${t.amount >= 0 ? 'text-[#9ff7ff]' : 'text-[#ffb3b3]'} font-semibold`}>{t.amount}</div>
       
                   </div>
                   <div>
                    <button className='bg-blue-950 text-white text-xs  px-4 py-2 rounded-md border border-white/10' onClick={()=>Setdlete(id)}>clear</button>
                   </div>
                  </div>
                </div>
              ))
              )
             }
            </div>

         
          </div>

        
        
        </div>

      </div>

 
    
    </div>
  


    </>
  )
}

export default App
