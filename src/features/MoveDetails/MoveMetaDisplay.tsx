import { MoveDetailResult, MoveDetailResultMeta } from "../../api/types/pokemon";
import { StatBar } from "../../components/StatBar/StatBar";


export const MoveMetaDisplay : React.FC<{meta : MoveDetailResultMeta}> = ({meta}) => {
    return (
        <>
            <div>
                <p style={{textTransform: "capitalize"}}>{meta.generation}</p>
                <StatBar name="Crit Rate" value={meta.critrate} maxValue={1} defaultValue={0} />
                <StatBar name="Drain" value={meta.drain} maxValue={250} defaultValue={0} />
                <StatBar name="Healing" value={meta.healing} maxValue={250} defaultValue={0} /> 
            </div>
        </>
    )
}

MoveMetaDisplay.displayName = "Meta";