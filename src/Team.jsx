import { useState } from "react"

export default function Team() {
    const TeamStyle = {
        backgroundColor: "lightblue",
        padding: '20px',
        backgroundColor: 'blueviolet',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px',
        color: 'white'
    }

    const ButtonStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
    }
    const [Player, SetPlayer] = useState(11);
    const AddHandler = () => {
        const NewPlayer = Player + 1;
        SetPlayer(NewPlayer)
    }

    const RemoveHandler = () => {
        const NewPlayer = Player - 1;
        SetPlayer(NewPlayer)
    }


    return (
        <div style={TeamStyle}>
            <h3>Player : {Player}</h3>
            <div style={ButtonStyle} >
                <button onClick={AddHandler}>Add Player</button>
                <button onClick={RemoveHandler}>Remove Player</button>
            </div>

        </div>
    )
}