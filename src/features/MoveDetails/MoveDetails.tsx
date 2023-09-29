import { useParams } from "react-router"
import { useMoveInformationQuery } from "../../api/pokemonApi"
import { MoveItem } from "./MoveItem"

import styles from "./MoveDetails.module.scss"


export const MoveDetail: React.FC = () => {
    const { moveName } = useParams()
    const { data: move } = useMoveInformationQuery(moveName!)

    return (
        <>
            {move && (
                <div className={styles.mainbox}>
                    <MoveItem name="Accuracy" value={move.accuracy} maxValue={100} />
                    <MoveItem name="Power" value={move.power} maxValue={300} />
                    <MoveItem name="PP" value={move.pp} maxValue={200} />
                </div>
            )}
        </>
    )
}