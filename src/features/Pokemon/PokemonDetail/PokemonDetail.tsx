import { useParams } from 'react-router-dom'
import { usePokemonQuery } from '../../../api/pokemonApi'
import { PokemonContent } from './PokemonContent'
import { NavigationButtons } from '../NavigationButtons/NavigationButtons'

import styles from '../../../Style/DetailPage.module.scss'

export const PokemonDetail: React.FC = () => {
    const { pokemonName } = useParams()
    const { data: pokemon } = usePokemonQuery(pokemonName!)

    return (
        <>
            {pokemon && (
                <div className={styles.mainbox}>
                    <PokemonContent {...pokemon} />
                    <NavigationButtons {...pokemon} />
                </div>
            )}
        </>
    )
}
