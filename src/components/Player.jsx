import { useState } from "react"


export default function Player({ initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        //setIsEditing(!isEditing);
        setIsEditing(editing => !editing);
    }

    function handleChange($event) {
        setPlayerName($event.target.value)
    }

    function handleInputClick() {
        setPlayerName('');
    }

    return <li className={isActive ? 'active' : ''}>
        <span className="player">
            {!isEditing && <span className="player-name">{playerName}</span>}
            {isEditing && <input type="text" 
            required value={playerName} 
            onChange={handleChange} 
            onClick={handleInputClick}/>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
}