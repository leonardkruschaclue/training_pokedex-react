import { PokemonStats } from '../../../../../api/types/pokemon'
import { Stat } from '../../../../../components/Stat/Stat'

export const PokemonStat: React.FC<PokemonStats['stats'][0]> = (stat) => {
    const maxValue = stat.name === 'hp' ? 250 : 150
    const percentageValue = Math.min(Math.round((stat.value / maxValue) * 100), 100)

    return (
        <Stat {...stat} percentageValue={percentageValue} />
    )
}