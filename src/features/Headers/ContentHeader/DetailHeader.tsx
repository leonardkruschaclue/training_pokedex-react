
import {  MoveDetailResult, PokemonDetails } from "../../../api/types/pokemon"
import { Type } from "./Type"
import styles from './DetailHeader.module.scss'

export const DetailHeader : React.FC<{name :string, types: string[]}> = ({name, types}) => {
    return (
        <>
            <h1 className={styles.header}>{name}</h1>
            <div>
                {types.map((type) => (
                    <Type key={type} type={type} />
                ))}
            </div>
        </>
    )
}