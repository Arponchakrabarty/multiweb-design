"use client"
import { useState } from "react"

const BaapErBank = ()=>{
  const [deposit, setDeposit]=useState(0)
  const [withdraw, setWithdraw]=useState(0)
  const [inputText, setInputText]= useState("")
  const [input2, setInput2]=useState()

  const DepositCall= ()=>{
    setDeposit(deposit+ Number(inputText))
    setInputText("")
    
  }

  const withdrawCall= ()=>{
    setWithdraw(withdraw+ Number(input2))
    setInput2("")
  }

  const balance= deposit-withdraw
    return<>
    <div className="bg-white h-300">
   <div className="bg-blue-100 h-200">
         <h1 className="text-blue-300 text-7xl ml-125 mb-25 pt-10">Let&rsquo;s get some <span className="text-blue-600">Mooooney</span>!!!</h1>

        <div className="grid grid-cols-3 ml-50 ">
            <div className="bg-cyan-400 h-30 w-80 p-5 rounded-md">
            <h1 className="text-4xl">Deposit</h1>
           <p>$$ <span>{deposit}</span></p>
        </div>
        <div className="bg-emerald-600  h-30 w-80 p-5 rounded-md">
            <h1 className="text-4xl" >Withdraw</h1>
           <p>$$ <span>{withdraw}</span></p>
        </div>
        <div className="bg-pink-300  h-30 w-80 p-5 rounded-md" >
            <h1 className="text-4xl">Balance</h1>
           <p>$$ <span>{balance}</span></p>
        </div>
        </div>
<div className="grid grid-cols-2 mt-30">
    
      <div className="grid grid-cols-2  ml-60 ">
          <div className="bg-green-400 h-60 w-120 pt-10 pl-2 rounded-md">
            <h1 className="text-4xl mb-5 font-bold">Please deposit</h1>
          <div className="flex flex-col" >
              <input onChange={(e)=>{setInputText(e.target.value)}} className="border-2 rounded-sm w-80 bg-white text-black" type="number" />
            <button onClick={()=>{DepositCall()}} className="bg-blue-800 w-50 h-10 rounded-md mt-2">Deposit</button>
          </div>
        </div>
       
        
      </div>
      <div className="grid grid-cols-2 ml-40 ">
          <div className="bg-purple-400 h-60 w-120 pt-10 pl-2 rounded-md">
            <h1 className="text-4xl mb-5 font-bold">Please withdraw</h1>
          <div className="flex flex-col" >
              <input onChange={(f)=>{setInput2(f.target.value)}} className="border-2 rounded-sm w-80 bg-white text-black" type="number" />
            <button onClick={()=>{withdrawCall()}} className="bg-sky-800 w-50 h-10 rounded-md mt-2">Withdraw</button>
          </div>
        </div>
       
        
      </div>
</div>
   </div>
    </div>
    </>

}
export default BaapErBank 