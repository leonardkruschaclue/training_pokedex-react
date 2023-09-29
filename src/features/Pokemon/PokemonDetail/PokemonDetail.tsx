import { useParams } from 'react-router-dom'
import { usePokemonQuery } from '../../../api/pokemonApi'
import { Content } from './Content/Content'
import { NavigationButtons } from './NavigationButtons/NavigationButtons'
import styles from './PokemonDetail.module.scss'

export const PokemonDetail: React.FC = () => {
    const { pokemonName } = useParams()
    const { data: pokemon } = usePokemonQuery(pokemonName!)

    return (
        <>
            {pokemon && (
                <div className={styles.mainbox}>
                    <Content {...pokemon} />
                    <NavigationButtons {...pokemon} />
                </div>
            )}
        </>
    )
}
