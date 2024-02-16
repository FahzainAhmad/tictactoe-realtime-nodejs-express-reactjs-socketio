import React from "react";

const Scoreboard = (props) => {
    return (
        <div className="scoreboard">
            <div className="scores">
                <p className="score-title">Scores</p>
                <div className="vs-scores">
                    <div className="you">
                        <p>You</p>
                        <span>
                            {props.isFirstPlayer
                                ? props.player1score
                                : props.player2score}
                        </span>
                    </div>
                    <div className="you">
                        <p>Opponent</p>
                        <span>
                            {props.isFirstPlayer
                                ? props.player2score
                                : props.player1score}
                        </span>
                    </div>
                </div>
            </div>
            <button className="restart" onClick={props.hardreset}>
                Restart?
            </button>
        </div>
    );
};

export default Scoreboard;
