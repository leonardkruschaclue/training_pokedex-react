import styles from './Ability.module.scss'

import { PokemonDetails } from '../../../../../api/types/pokemon'
import { useAbilityInformationQuery } from '../../../../../api/pokemonApi'
import { LinkButton } from '../../../../../components/LinkButton'
import { toQuery } from '../../../../../Utility/Converters'

export const Ability: React.FC<PokemonDetails['abilities'][0]> = (ability) => {
    const {data: abilityDetails} = useAbilityInformationQuery(toQuery(ability.name))
    return (
        <>
        {abilityDetails && (
            <div className={styles.wrapper}>
                <div className={styles.name}>
                    <p>
                        {ability.name}
                    </p> 
                    <p>
                        {abilityDetails.flavor}
                        <LinkButton to={`/ability/${toQuery(ability.name)}`}> More Information</LinkButton>
                    </p>
                </div>
            </div>
        )}
        </>
    )
}