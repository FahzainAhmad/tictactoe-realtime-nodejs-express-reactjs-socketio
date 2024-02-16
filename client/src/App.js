import { React, useEffect, useState } from "react";
import MainComponent from "../src/Components/MainComponent";
import "./App.css";
import io from "socket.io-client";

const socket = io("http://192.168.89.187:3001", { transports: ["websocket"] });

function App() {
    const [movesarray, setMovesArray] = useState([]);
    const [winnerid, setWinnerid] = useState("");
    const [you, setYou] = useState("");

    const [player1score, setPlayer1Score] = useState(0);
    const [player2score, setPlayer2Score] = useState(0);
    const [isFirstPlayer, setIsFirstPlayer] = useState(false);

    console.log("u : " + you);
    const sendThisKey = (key) => {
        socket.emit("clicked", key);
    };

    const hardreset = () => {
        setPlayer1Score(0);
        setPlayer2Score(0);
        socket.emit("hardreset");
        socket.on("resetmoves", (moves) => {
            setMovesArray(moves);
            setWinnerid("");
        });
    };

    socket.on("score", (scores) => {
        const [p1score, p2score] = scores;
        setPlayer1Score(p1score);
        setPlayer2Score(p2score);
    });

    const reset = () => {
        socket.emit("reset");
        socket.on("resetmoves", (moves) => {
            setMovesArray(moves);
            setWinnerid("");
        });
    };

    socket.on("reset", () => {
        setWinnerid("");
        setMovesArray([]);
    });

    useEffect(() => {
        socket.on("connected", (message) => {
            console.log(message);
            setYou(socket.id);
        });

        socket.on("winnerid", (winnerid) => {
            setWinnerid(winnerid);
        });

        socket.on("playerpos", (playerpos) => {
            if (playerpos === socket.id) {
                setIsFirstPlayer(true);
            }
        });

        socket.on("signdata", (moves) => {
            console.log(moves);
            setMovesArray(moves);
        });

        return () => {
            if (socket.readyState === 1) {
                socket.close();
            }
        };
    }, []);

    return (
        <MainComponent
            sendThisKey={sendThisKey}
            movesarray={movesarray}
            winner={winnerid}
            you={you}
            player1score={player1score}
            player2score={player2score}
            setPlayer1Score={setPlayer1Score}
            setPlayer2Score={setPlayer2Score}
            hardreset={hardreset}
            reset={reset}
            isFirstPlayer={isFirstPlayer}
        />
    );
}

export default App;
