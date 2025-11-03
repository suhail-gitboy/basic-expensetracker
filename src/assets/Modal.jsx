import React from 'react'

const Modaldata = ({Setmodal,input,Setinput,transactions,Setransaction}) => {

    const Handletransacton=()=>{

        Setransaction([
            ...transactions,input
        ])
       Setmodal(false)
    }
 return (
    <div className="min-h-screen flex items-center justify-center fixed inset-0 bg-transparent p-6 z-30">
      <div className="w-full max-w-lg    border border-[#0ea5ff33] rounded-2xl p-8 shadow-lg">
        <h2 className="text-white text-3xl font-semibold text-center mb-8 tracking-wide">fill your expense</h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-[#bdefff] text-sm mb-2">name of expense</label>
            <input
              type="text"
              name='title'
              onChange={(e)=>Setinput({...input,title:e.target.value})}
              placeholder="Enter name of expense"
              className="w-full px-4 py-2 bg-transparent border border-[#0ea5ff55] rounded-lg text-white placeholder-[#88e6ff] focus:outline-none focus:ring-2 focus:ring-[#00b1ff] focus:border-[#00b1ff] transition-all"
            />
          </div>
           <div>
            <label className="block text-[#bdefff] text-sm mb-2">cost </label>
            <input
              type="text"
              name='amount'
              onChange={(e)=>Setinput({...input,amount:e.target.value})}
              placeholder="Enter cost"
              className="w-full px-4 py-2 bg-transparent border border-[#0ea5ff55] rounded-lg text-white placeholder-[#88e6ff] focus:outline-none focus:ring-2 focus:ring-[#00b1ff] focus:border-[#00b1ff] transition-all"
            />
          </div>

   
   

          <button
            type="submit"
            onClick={Handletransacton}
            className="w-full py-3 bg-linear-to-r from-[#0077cc] to-[#00b1ff] text-white font-semibold rounded-lg shadow-neon hover:scale-[1.02] transition-transform tracking-wide"
          >
            Save Details
          </button>
        </form>

       
      </div>
    </div>
  );
}

export default Modaldata
