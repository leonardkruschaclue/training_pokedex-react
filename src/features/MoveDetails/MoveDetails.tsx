import { useParams } from "react-router"
import { useMoveInformationQuery } from "../../api/pokemonApi"
import { MoveContent } from "./MoveContent"

import styles from "../../Style/DetailPage.module.scss"
import { NavigationButtons } from "../../components/NavigationButtons/NavigationButtons"

export const MoveDetail: React.FC = () => {
    const { moveName } = useParams()
    const { data: move } = useMoveInformationQuery(moveName)

    return (
        <>
            {move && (
                <div className={styles.mainbox}>
                    <MoveContent {...move} />
                    <NavigationButtons id={move.id} baseurl=".." suburl="move" />
                </div>
            )}
        </>
    )
}