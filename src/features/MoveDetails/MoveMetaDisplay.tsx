import { MoveDetailResult } from "../../api/types/pokemon";
import { StatBar } from "../../components/StatBar/StatBar";


export const MoveMetaDisplay : React.FC<MoveDetailResult> = (move) => {
    return (
        <>
            <div>
                <StatBar name="Crit Rate" value={move.critrate} maxValue={1} defaultValue={0} />
                <StatBar name="Drain" value={move.drain} maxValue={250} defaultValue={0} />
                <StatBar name="Healing" value={move.healing} maxValue={250} defaultValue={0} /> 
            </div>
        </>
    )
}

MoveMetaDisplay.displayName = "Meta";