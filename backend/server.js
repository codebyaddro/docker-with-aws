import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO } from "y-socket.io/dist/server";

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const ySocketIO = new YSocketIO(io);
ySocketIO.initialize()

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello World"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "OK"
    });
});

server.listen(5000, () => {
    console.log("server listening on *:5000");
});