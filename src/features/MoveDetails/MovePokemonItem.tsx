import styles from "../../Style/Display.module.scss"

import { toQuery } from "../../Utility/Converters";
import { usePokemonQuery } from "../../api/pokemonApi";
import { LinkButton } from "../../components/LinkButton";
import { Type } from "../Headers/DetailHeader/Type";

export const MovePokemonItem : React.FC<{name : string}> = ({name}) => {
    const {data: pokemon} = usePokemonQuery(toQuery(name));
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.name}>
                    <div>
                        {name} 
                    </div>
                    {pokemon?.types.map((x) => (<Type key={x} type={x} />))}
                </div>
                <div>
                    <LinkButton to={`/pokemon/${toQuery(name)}`}>Details</LinkButton>
                </div>
            </div>
        </>
    )
}