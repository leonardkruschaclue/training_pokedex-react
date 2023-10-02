import { PokemonStats } from '../../../../../api/types/pokemon'
import { StatBar } from '../../../../../components/StatBar/StatBar'

export const PokemonStat: React.FC<PokemonStats['stats'][0]> = (stat) => {
    const maxValue = stat.name === 'hp' ? 250 : 150
    const percentageValue = Math.min(Math.round((stat.value / maxValue) * 100), 100)

    return <StatBar {...stat} percentageValue={percentageValue} />;
}