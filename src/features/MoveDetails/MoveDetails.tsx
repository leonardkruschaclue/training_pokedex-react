import { useParams } from "react-router"
import { useMoveInformationQuery } from "../../api/pokemonApi"
import { DetailHeader } from "../Headers/DetailHeader/DetailHeader"
import { MoveContent } from "./Content/MoveContent"

import styles from "../../Style/DetailPage.module.scss"


export const MoveDetail: React.FC = () => {
    const { moveName } = useParams()
    const { data: move } = useMoveInformationQuery(moveName)

    return (
        <>
            {move && (
                <div className={styles.mainbox}>
                    <MoveContent {...move} />
                </div>
            )}
        </>
    )
}