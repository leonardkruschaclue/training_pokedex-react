import { Link } from "react-router-dom"
import { BasePokemon } from "../../api/types/pokemon"
import styles from "./PokemonItem.module.scss"

export const PokemonItem: React.FC<BasePokemon> = ({id, imageSrc, name, types}) => {
    return (
        <Link to={`pokemon/${name}`} className={styles.card}>
            <div className={styles.item}>
                <div className={styles.id}>#{id}</div>
                <div className="image"><img src={imageSrc} alt={`Image of ${name}`} /></div>
                <div className={styles.name}>{name}</div>
                <div className={styles.types}>{types.join(', ')}</div>
            </div>
        </Link>
    )
}
