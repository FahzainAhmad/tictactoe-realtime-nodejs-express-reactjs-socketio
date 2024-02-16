import React from "react";
import Lose from "../Images/lose.png";
import Won from "../Images/trophy.png";

const WinLost = (props) => {
    return (
        <div className="winlost">
            {props.status === "win" ? (
                <div>
                    <img src={Won} alt="Won" className="statusimg" />
                    <p className="statustext">You Won!</p>
                </div>
            ) : (
                <div>
                    <img src={Lose} alt="Lose" className="statusimg" />
                    <p className="statustext">You Lost!</p>
                </div>
            )}
            <div>
                <button className="playagain" onClick={props.reset}>
                    Play Again
                </button>
                <button className="reset" onClick={props.hardreset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default WinLost;
