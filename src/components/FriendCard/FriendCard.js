import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="charCard" value={props.id} onClick={() => props.charClick(props.id)}>
        <div className="charImg">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)

export default FriendCard;