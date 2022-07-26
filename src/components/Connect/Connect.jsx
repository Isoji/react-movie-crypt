import React from "react";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Connect = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Authenticated.");
      console.log("logged in user:", user);
      console.log(user?.get("ethAddress"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

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
        authenticate({ signingMessage: "Log in using Moralis" });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const logOut = async () => {
    try {
      await logout();
      toast.success("Disconnected");
    } catch (error) {
      alert(error);
    }
    console.log("Logged out");
  };

  return (
    <>
      <button onClick={isAuthenticated ? logOut : login}>
        {isAuthenticated ? "Disconnect" : "Connect Wallet"}
      </button>
    </>
  );
};

export default Connect;
