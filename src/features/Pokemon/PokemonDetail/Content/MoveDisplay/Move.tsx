import styles from './Move.module.scss'

import { PokemonDetails } from '../../../../../api/types/pokemon'
import { Link } from 'react-router-dom'
import { useMoveInformationQuery } from '../../../../../api/pokemonApi'
import { LinkButton } from '../../../../../components/LinkButton'

export const Move: React.FC<PokemonDetails['moves'][0]> = (move) => {
    //const {data: moveDetails} = useMoveInformationQuery(move.name)
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.name}> 
                        {move.name}
                </div>
                <div>
                    <LinkButton to={`../move/${move.name.replace(' ','-')}`} className={styles.detailsButton}>
                        Details
                    </LinkButton>
                </div>
            </div>
        </>
    )
}