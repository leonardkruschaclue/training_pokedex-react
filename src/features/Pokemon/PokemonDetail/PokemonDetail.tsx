import { useParams } from 'react-router-dom'
import { usePokemonQuery } from '../../../api/pokemonApi'
import { LinkButton } from '../../../components/LinkButton'
import { PokemonHeader } from '../PokemonHeader/PokemonHeader'
import { Content } from './Content/Content'
import styles from './PokemonDetail.module.scss'

export const PokemonDetail: React.FC = () => {
    const { pokemonName } = useParams()
    const { data: pokemon } = usePokemonQuery(pokemonName!)

    return (
        <>
            {pokemon && (
                <div style={{ textAlign: 'left' }}>
                    <PokemonHeader {...pokemon} />
                    <Content {...pokemon} />
                    <div className={styles.actions}>
                        <LinkButton to={`../${pokemon.id - 1}`} disabled={pokemon.id === 1}>
                            &laquo; Previous
                        </LinkButton>
                        <LinkButton to="..">Overview</LinkButton>
                        <LinkButton to={`../${pokemon.id + 1}`}>Next &raquo;</LinkButton>
                    </div>
                </div>
            )}
        </>
    )
}
