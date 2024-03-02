import io from "socket.io-client";
const socket = io(process.env.BASE_URL ?? window.location.origin);
export default socket;
