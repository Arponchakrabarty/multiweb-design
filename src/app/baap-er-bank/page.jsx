"use client";
import { useRef, useState } from "react";

const BaapErBank = () => {
  const withdrawRef = useRef();
  const depositRef = useRef();
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [inputText, setInputText] = useState("");
  const [input2, setInput2] = useState();

  const DepositCall = (e) => {
    e.preventDefault();
    setDeposit(deposit + Number(inputText));
    setInputText("");
    depositRef.current.reset();
  };

  const withdrawCall = (e) => {
    e.preventDefault();
    setWithdraw(withdraw + Number(input2));
    setInput2("");
    withdrawRef.current.reset();
  };

  const balance = deposit - withdraw;
  return (
    <>
      <div className="bg-blue-100 py-20">
        {/* <h1 className="text-blue-300 lg:text-7xl ml-125 mb-25 pt-10">
            Let&rsquo;s get some <span className="text-blue-600">Mooooney</span>
            !!!
          </h1> */}

        <div className="grid lg:grid-cols-3  lg:px-40 px-10 gap-5 ">
          <div className="bg-cyan-400 h-30  p-5 rounded-md">
            <h1 className="text-4xl">Deposit</h1>
            <p>
              $$ <span>{deposit}</span>
            </p>
          </div>
          <div className="bg-emerald-600  h-30  p-5 rounded-md">
            <h1 className="text-4xl">Withdraw</h1>
            <p>
              $$ <span>{withdraw}</span>
            </p>
          </div>
          <div className="bg-pink-300  h-30  p-5 rounded-md">
            <h1 className="text-4xl">Balance</h1>
            <p>
              $$ <span>{balance}</span>
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 mt-30 lg:px-40 px-10 gap-10">
          <div className="bg-green-400 h-60  pt-10 pl-2 rounded-md">
            <h1 className="text-4xl mb-5 font-bold">Please deposit</h1>
            <form ref={depositRef} className="flex flex-col">
              <input
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
                className="border-2 rounded-sm w-80 bg-white text-black"
                type="number"
              />
              <button
                type="submit"
                onClick={(e) => {
                  DepositCall(e);
                }}
                className="bg-blue-800 w-50 h-10 rounded-md mt-2"
              >
                Deposit
              </button>
            </form>
          </div>
          <div className="bg-purple-400 h-60 pt-10 pl-2 rounded-md">
            <h1 className="text-4xl mb-5 font-bold">Please withdraw</h1>
            <form ref={withdrawRef} className="flex flex-col">
              <input
                onChange={(f) => {
                  setInput2(f.target.value);
                }}
                className="border-2 rounded-sm w-80 bg-white text-black"
                type="number"
              />
              <button
                type="submit"
                onClick={(e) => {
                  withdrawCall(e);
                }}
                className="bg-sky-800 w-50 h-10 rounded-md mt-2"
              >
                Withdraw
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default BaapErBank;
