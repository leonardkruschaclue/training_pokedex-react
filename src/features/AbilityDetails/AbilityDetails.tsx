import { useParams } from "react-router"
import { useAbilityInformationQuery } from "../../api/pokemonApi"
import { NavigationButtons } from "../../components/NavigationButtons/NavigationButtons"
import { AbilityContent } from "./AbilityContent"

import styles from "../../Style/DetailPage.module.scss"

export const AbilityDetail: React.FC = () => {
    const { abilityName } = useParams()
    const { data: ability } = useAbilityInformationQuery(abilityName)

    return (
        <>
            {ability && (
                <div className={styles.mainbox}>
                    <AbilityContent {...ability} />
                    <NavigationButtons id={ability.id} baseurl=".." suburl="ability" />
                </div>
            )}
        </>
    )
}