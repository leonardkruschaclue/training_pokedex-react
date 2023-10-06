import styles from "../../../Style/Display.module.scss"

import { PokemonDetails } from "../../../api/types/pokemon"
import { useAbilityInformationQuery } from "../../../api/pokemonApi"
import { LinkButton } from "../../../components/LinkButton"
import { toQuery } from "../../../Utility/Converters"

export const Ability: React.FC<PokemonDetails['abilities'][0]> = (ability) => {
    const {data: abilityDetails} = useAbilityInformationQuery(toQuery(ability.name))
    return (
        <>
        {abilityDetails && (
            <div className={styles.wrapper}>
                <div className={styles.name}>
                    {ability.name} 
                    <p>
                        {abilityDetails.texts.flavor}
                    </p>
                </div>
                <div>
                    <LinkButton to={`/ability/${toQuery(ability.name)}`}>Details</LinkButton>
                </div>
            </div>
        )}
        </>
    )
}