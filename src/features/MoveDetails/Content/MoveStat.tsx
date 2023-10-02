import { StatBar } from "../../../components/StatBar/StatBar"

export const MoveStat: React.FC<{name : string, value: number, maxValue: number}> = ({name, value , maxValue}) => {
    const percentageValue = Math.min(Math.round((value / maxValue) * 100), 100)
    return <StatBar name={name} value={value} percentageValue={percentageValue} />;
}