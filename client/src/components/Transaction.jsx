import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="white-glassmorphism m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-5 rounded-xl hover:shadow-2xl smooth-transition transform hover:-translate-y-2"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="flex flex-col justify-start w-full mb-6 p-2 space-y-2">
          <a href={`https://holesky.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer" className="hover:text-cyan-400 smooth-transition">
            <p className="text-white text-base">From: <span className="text-cyan-300">{shortenAddress(addressFrom)}</span></p>
          </a>
          <a href={`https://holesky.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer" className="hover:text-cyan-400 smooth-transition">
            <p className="text-white text-base">To: <span className="text-cyan-300">{shortenAddress(addressTo)}</span></p>
          </a>
          <p className="text-white text-base font-semibold">Amount: <span className="text-gradient">{amount} ETH</span></p>
          {message && (
            <>
              <br />
              <p className="text-gray-300 text-sm italic">"{message}"</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="transaction"
          className="w-full h-64 2xl:h-96 rounded-xl shadow-lg object-cover"
        />
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 px-5 w-max rounded-full -mt-5 shadow-2xl">
          <p className="text-white font-bold text-sm">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4 w-full max-w-7xl">
        {currentAccount ? (
          <h3 className="text-white text-3xl sm:text-5xl text-center my-2 font-bold">
            Latest <span className="text-gradient">Transactions</span>
          </h3>
        ) : (
          <h3 className="text-white text-3xl sm:text-4xl text-center my-2 font-bold">
            <span className="text-gradient">Connect</span> your wallet to see transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;