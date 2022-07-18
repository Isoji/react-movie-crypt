import React from "react";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import toast from "react-hot-toast";

const metaMaskNotInstalled = () =>
  toast(
    "The MetaMask browser extension must be installed in order to connect."
  );

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
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum == "undefined") {
      return metaMaskNotInstalled();
    }
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user?.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
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
