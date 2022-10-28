import { io } from "socket.io-client";

const userSocket = io("ws://192.168.0.106:3636/user");
const tradeSocket = io("ws://192.168.0.106:3636/trade");
const socket = io("ws://192.168.0.106:3636");

function getTradeSocket(dispatch) {
  tradeSocket.on("trade", (arg) => {
    // console.log("@@@@@@@@@@");
  });
  return tradeSocket;
}

function getUserSocket(dispatch) {
  userSocket.on("transfer", (arg) => {
    // console.log("@@@@@@@@@@");
    dispatch({ type: "ADD_TRANSACTION", payload: arg });
  });
  return userSocket;
}

export { getUserSocket, getTradeSocket };
