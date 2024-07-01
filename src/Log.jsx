export default function Log({turns}) {
    

    
    return <ol id="log">
        {
            turns.map(turn => {
                <li key={`${turn.square.row}${turn.square.col}`}> <span>{turn.player}</span>:
                 <span>Case {turn.square.col}:{turn.square.row}</span></li>
            })
        }
    </ol>
}