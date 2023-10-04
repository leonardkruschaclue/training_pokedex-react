import { PokemonStats } from '../../../../api/types/pokemon'
import { StatBar } from '../../../../components/StatBar/StatBar'

export const PokemonStat: React.FC<PokemonStats['stats'][0]> = (stat) => {
    const maxValue = stat.name === 'hp' ? 250 : 150
    return <StatBar {...stat} maxValue={maxValue} defaultValue={0}/>;
}