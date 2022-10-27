import { io } from "socket.io-client";

const userSocket = io("ws://192.168.0.104:3636/user");
const tradeSocket = io("ws://192.168.0.104:3636/trade");
const socket = io("ws://192.168.0.104:3636");

function getTradeSocket(dispatch) {
  tradeSocket.on("trade", (arg) => {
    console.log(dispatch);
  });
  return userSocket;
}

function getUserSocket(dispatch) {
  userSocket.on("transfer", (arg) => {
    dispatch({ type: "ADD_TRANSACTION", payload: arg });
  });
  return userSocket;
}

export { getUserSocket, getTradeSocket };
