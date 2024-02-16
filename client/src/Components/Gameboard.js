import React from "react";
import Cross from "../Images/cross.png";
import Round from "../Images/round.png";
import WinLost from "./WinLost";

const Gameboard = (props) => {
    const movesarray = props.movesarray;

    return (
        <>
            {props.winner !== "" ? (
                props.winner === props.you ? (
                    <WinLost
                        status="win"
                        player1score={props.player1score}
                        player2score={props.player2score}
                        hardreset={props.hardreset}
                        reset={props.reset}
                    />
                ) : (
                    <WinLost
                        status="lost"
                        player1score={props.player1score}
                        player2score={props.player2score}
                        hardreset={props.hardreset}
                        reset={props.reset}
                    />
                )
            ) : (
                <div className="gameboard">
                    <button
                        className="tabs"
                        onClick={() => props.sendThisKey(0)}
                    >
                        {movesarray[0] === "Round" && (
                            <img src={Round} alt="Round" className="signs" />
                        )}
                        {movesarray[0] === "Cross" && (
                            <img src={Cross} alt="Cross" className="signs" />
                        )}
                    </button>
                    <button
                        className="tabs"
                        onClick={() => props.sendThisKey(1)}
                    >
                        {movesarray[1] === "Round" && (
                            <img src={Round} alt="Round" className="signs" />
                        )}
                        {movesarray[1] === "Cross" && (
                            <img src={Cross} alt="Cross" className="signs" />
                        )}
                    </button>
                    <button
                        className="tabs"
                        onClick={() => props.sendThisKey(2)}
                    >
                        {movesarray[2] === "Round" && (
                            <img src={Round} alt="Round" className="signs" />
                        )}
                        {movesarray[2] === "Cross" && (
                            <img src={Cross} alt="Cross" className="signs" />
                        )}
                    </button>
                    <button
                        className="tabs"
                        onClick={() => props.sendThisKey(3)}
                    >
                        {movesarray[3] === "Round" && (
                            <img src={Round} alt="Round" className="signs" />
                        )}
                        {movesarray[3] === "Cross" && (
                            <img src={Cross} alt="Cross" className="signs" />
                        )}
                    </button>
                    <button
                        className="tabs"
                        onClick={() => props.sendThisKey(4)}
                    >
                        {movesarray[4] === "Round" && (
                            <img src={Round} alt="Round" className="signs" />
                        )}
                        {movesarray[4] === "Cross" && (
                            <img src={Cross} alt="Cross" className="signs" />
                        )}
                    </button>
                    <button
                        className="tabs"
                        onClick={() => props.sendThisKey(5)}
                    >
                        {movesarray[5] === "Round" && (
                            <img src={Round} alt="Round" className="signs" />
                        )}
                        {movesarray[5] === "Cross" && (
                            <img src={Cross} alt="Cross" className="signs" />
                        )}
                    </button>
                    <button
                        className="tabs"
                        onClick={() => props.sendThisKey(6)}
                    >
                        {movesarray[6] === "Round" && (
                            <img src={Round} alt="Round" className="signs" />
                        )}
                        {movesarray[6] === "Cross" && (
                            <img src={Cross} alt="Cross" className="signs" />
                        )}
                    </button>
                    <button
                        className="tabs"
                        onClick={() => props.sendThisKey(7)}
                    >
                        {movesarray[7] === "Round" && (
                            <img src={Round} alt="Round" className="signs" />
                        )}
                        {movesarray[7] === "Cross" && (
                            <img src={Cross} alt="Cross" className="signs" />
                        )}
                    </button>
                    <button
                        className="tabs"
                        onClick={() => props.sendThisKey(8)}
                    >
                        {movesarray[8] === "Round" && (
                            <img src={Round} alt="Round" className="signs" />
                        )}
                        {movesarray[8] === "Cross" && (
                            <img src={Cross} alt="Cross" className="signs" />
                        )}
                    </button>
                </div>
            )}
        </>
    );
};

export default Gameboard;
