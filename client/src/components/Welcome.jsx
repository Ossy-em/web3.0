import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader"

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const companyCommonStyles = "min-h-[60px] sm:min-h-[70px] px-2 sm:px-0 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-600 text-xs sm:text-sm font-light text-white backdrop-blur-sm hover:border-[#0ea5e9] smooth-transition hover:bg-white/5";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-1.5 sm:my-2 w-full rounded-lg p-2 sm:p-3 outline-none bg-transparent text-white border-none text-sm white-glassmorphism placeholder:text-gray-400 focus:ring-2 focus:ring-[#0ea5e9] smooth-transition"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center overflow-x-hidden">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-6 sm:py-12 px-4 w-full max-w-screen-xl">
   <div className="flex flex-1 justify-start items-start sm:items-start items-center flex-col mf:mr-10 w-full">
  <h1 className="text-2xl sm:text-3xl md:text-5xl text-white py-1 font-bold leading-tight text-center sm:text-left">
    <span className="text-gradient">Transfer Digital Assets</span>
    <br />
    <span className="text-white">Globally</span>
  </h1>
  <p className="text-center sm:text-left mt-3 sm:mt-5 text-gray-300 font-light w-full md:w-9/12 text-sm sm:text-base leading-relaxed">
    Experience seamless blockchain transactions. Transfer cryptocurrency globally with complete transparency and enterprise-grade security.
  </p>
  {!currentAccount && (
    <button
      type="button"
      onClick={connectWallet}
      className="flex flex-row justify-center items-center my-4 sm:my-5 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] p-2 px-4 sm:p-3 sm:px-6 rounded-full cursor-pointer hover:from-[#0284c7] hover:to-[#0891b2] smooth-transition hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
    >
      <AiFillPlayCircle className="text-white mr-2" fontSize={18} />
      <p className="text-white text-sm sm:text-base font-semibold">
        Connect Wallet
      </p>
    </button>
  )}

  <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-6 sm:mt-10 gap-[1px] bg-gray-600 rounded-2xl overflow-hidden">            <div className={`rounded-tl-2xl bg-[#0a0e27] ${companyCommonStyles}`}>
              Reliable
            </div>
            <div className={`bg-[#0a0e27] ${companyCommonStyles}`}>Secure</div>
            <div className={`sm:rounded-tr-2xl bg-[#0a0e27] ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl bg-[#0a0e27] ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={`bg-[#0a0e27] ${companyCommonStyles}`}>Low Fees</div>
            <div className={`rounded-br-2xl bg-[#0a0e27] ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-6 sm:mt-10">
          <div className="p-4 sm:p-5 flex justify-end items-start flex-col rounded-xl h-36 sm:h-40 w-full sm:w-72 my-3 sm:my-5 eth-card shadow-2xl hover:shadow-cyan-500/30 smooth-transition">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white flex justify-center items-center backdrop-blur-sm bg-white/10">
                  <SiEthereum fontSize={18} color="#fff" className="sm:text-[21px]" />
                </div>
                <BsInfoCircle fontSize={16} color="#fff" className="sm:text-[17px] opacity-80 hover:opacity-100 smooth-transition cursor-pointer" />
              </div>
              <div>
                <p className="text-white/80 font-light text-xs sm:text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-base sm:text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-5 w-full sm:w-96 flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Recipient Address*" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)*" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="GIF Keyword*" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Message*" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 p-2.5 sm:p-3 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] hover:from-[#0284c7] hover:to-[#0891b2] rounded-full cursor-pointer smooth-transition font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-[1.02] text-sm sm:text-base"
                >
                  Send Transaction
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;