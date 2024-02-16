const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 3001;

let moves = ["", "", "", "", "", "", "", "", ""];
let firstClient = true;
let firstClientId;

let p1score = 0;
let p2score = 0;

io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);
    io.emit("connected", socket.id);

    io.emit("playerpos", firstClientId);

    if (firstClient) {
        firstClientId = socket.id;
        firstClient = false;
    }

    io.emit("playerpos", firstClientId);

    socket.on("clicked", (key) => {
        if (moves[key] == "") {
            if (firstClientId == socket.id) {
                moves[key] = "Round";
            } else {
                moves[key] = "Cross";
            }
            io.emit("signdata", moves);

            for (let i = 0; i < 9; i += 3) {
                if (
                    moves[i] == "Round" &&
                    moves[i + 1] == "Round" &&
                    moves[i + 2] == "Round"
                ) {
                    io.emit("winnerid", socket.id);
                    p1score = p1score + 1;
                    io.emit("score", [p1score, p2score]);
                } else if (
                    moves[i] == "Cross" &&
                    moves[i + 1] == "Cross" &&
                    moves[i + 2] == "Cross"
                ) {
                    io.emit("winnerid", socket.id);
                    p2score = p2score + 1;
                    io.emit("score", [p1score, p2score]);
                }
            }

            for (let i = 0; i < 3; i++) {
                if (
                    moves[i] == "Round" &&
                    moves[i + 3] == "Round" &&
                    moves[i + 6] == "Round"
                ) {
                    io.emit("winnerid", socket.id);
                    p1score = p1score + 1;
                    io.emit("score", [p1score, p2score]);
                } else if (
                    moves[i] == "Cross" &&
                    moves[i + 3] == "Cross" &&
                    moves[i + 6] == "Cross"
                ) {
                    io.emit("winnerid", socket.id);
                    p2score = p2score + 1;
                    io.emit("score", [p1score, p2score]);
                }
            }

            if (
                moves[0] == "Round" &&
                moves[4] == "Round" &&
                moves[8] == "Round"
            ) {
                io.emit("winnerid", socket.id);
                p1score = p1score + 1;
                io.emit("score", [p1score, p2score]);
            } else if (
                moves[0] == "Cross" &&
                moves[4] == "Cross" &&
                moves[8] == "Cross"
            ) {
                io.emit("winnerid", socket.id);
                p2score = p2score + 1;
                io.emit("score", [p1score, p2score]);
            }

            if (
                moves[2] == "Round" &&
                moves[4] == "Round" &&
                moves[6] == "Round"
            ) {
                io.emit("winnerid", socket.id);
                p1score = p1score + 1;
                io.emit("score", [p1score, p2score]);
            } else if (
                moves[2] == "Cross" &&
                moves[4] == "Cross" &&
                moves[6] == "Cross"
            ) {
                io.emit("winnerid", socket.id);
                p2score = p2score + 1;
                io.emit("score", [p1score, p2score]);
            }
        }
        socket.on("hardreset", () => {
            moves = ["", "", "", "", "", "", "", "", ""];
            p1score = 0;
            p2score = 0;
            io.emit("score", [p1score, p2score]);
            io.emit("resetmoves", moves);
            firstClient = true;
        });

        socket.on("reset", () => {
            moves = ["", "", "", "", "", "", "", "", ""];
            io.emit("score", [p1score, p2score]);
            io.emit("resetmoves", moves);
            firstClient = true;
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
