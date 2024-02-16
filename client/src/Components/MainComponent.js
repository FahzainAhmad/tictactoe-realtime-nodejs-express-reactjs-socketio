import React from "react";
import Gameboard from "../Components/Gameboard";
import Scoreboard from "../Components/Scoreboard";

function MainComponent(props) {
    return (
        <div className="App">
            <Gameboard
                sendThisKey={props.sendThisKey}
                movesarray={props.movesarray}
                winner={props.winner}
                you={props.you}
                player1score={props.player1score}
                player2score={props.player2score}
                hardreset={props.hardreset}
                reset={props.reset}
                setPlayer1Score={props.setPlayer1Score}
                setPlayer2Score={props.setPlayer2Score}
            />
            <Scoreboard
                isFirstPlayer={props.isFirstPlayer}
                hardreset={props.hardreset}
                player1score={props.player1score}
                player2score={props.player2score}
            />
        </div>
    );
}

export default MainComponent;
