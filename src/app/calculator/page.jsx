const Calculator=() =>{
    return<>
    <div className="bg-white h-115 " >
      <div className="bg-black w-55 flex flex-col items-center ml-90 mt-10 rounded-3xl gap-1">
        <h1 className="border-2 border-black h-25 w-55 rounded-3xl"></h1>


  
      <div className="flex gap-2" >
        
        <button className="bg-gray-400 rounded-full  w-12 h-12 content-center text-white">⌫</button>
        <button className="bg-gray-400 rounded-full  w-12 h-12 content-center text-white">Ac</button>
         <button className="bg-gray-400 rounded-full  w-12 h-12 content-center text-white">%</button>
        <button className="bg-orange-400 rounded-full  w-12 h-12 content-center text-white">÷</button>
      </div>
       <div className="flex gap-2" >
        <button className="bg-gray-800 rounded-full p- w-12 h-12 content-center text-white">7</button>
        <button className="bg-gray-800 rounded-full p- w-12 h-12 content-center text-white">8</button>
        <button className="bg-gray-800 rounded-full p- w-12 h-12 content-center text-white">9</button>
        <button className="bg-orange-400 rounded-full  w-12 h-12 content-center text-white">X</button>
       </div>

       
        <div className="flex gap-2" >
        <button className="bg-gray-800 rounded-full w-12 h-12 content-center text-white">4</button>
        <button className="bg-gray-800 rounded-full w-12 h-12 content-center text-white">5</button>
        <button className="bg-gray-800 rounded-full w-12 h-12 content-center text-white">6</button>
        <button className="bg-orange-400 rounded-full  w-12 h-12 content-center text-white">-</button>
        </div>


        <div className="flex gap-2" >
        <button className="bg-gray-800 rounded-full w-12 h-12 content-center text-white">1</button>
        <button className="bg-gray-800 rounded-full w-12 h-12 content-center text-white">2</button>
        <button className="bg-gray-800 rounded-full w-12 h-12 content-center text-white">3</button>
        <button className="bg-orange-400 rounded-full  w-12 h-12 content-center text-white">+</button>
        </div>
   <div className="flex gap-2" > 
        <button className="bg-gray-800 rounded-full  w-12 h-12 content-center text-white">0</button>
        <button className="bg-gray-800 rounded-full  w-12 h-12 content-center text-white">+/-</button>
        <button className="bg-gray-800 rounded-full  w-12 h-12 content-center text-white">.</button>
        <button className="bg-orange-400 rounded-full  w-12 h-12 content-center text-white">=</button>
   </div>
      </div>
      
    </div>
    </>

} 
export default Calculator