import React from "react";
import toast from "react-hot-toast";
import { useMoralis } from "react-moralis";
import "./Buy.scss";

const Buy = () => {
  const {
    Moralis,
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const options = {
    type: "native",
    amount: Moralis.Units.ETH("0.01"),
    receiver: "0x8DF10E0Ba841d451F9DB55cAe472747e6475aeE2", // MetaMask dev account
  };

  const handleTransaction = async () => {
    if (isAuthenticated) {
      const transaction = await Moralis.transfer(options);
      const result = await transaction.wait();
      //
      //if (result === 1) {
      console.log(result);
      // }
    } else {
      await login();
      const transaction = await Moralis.transfer(options);
    }
  };

  const login = async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum == "undefined") {
      return toast.error(
        "The MetaMask browser extension must be installed and enabled in order to connect."
      );
    }
    if (!isAuthenticated) {
      console.log("Not authenticated.");
      try {
        await authenticate({ signingMessage: "Log in using Moralis" });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <button className="buy-button" onClick={handleTransaction}>
      Buy Movie
    </button>
  );
};

export default Buy;
