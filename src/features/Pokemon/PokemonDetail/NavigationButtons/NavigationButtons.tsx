import { PokemonDetails } from "../../../../types/pokemon";
import { LinkButton } from "../../../../components/LinkButton";

import styles from "./NavigationButtons.module.scss"


export const NavigationButtons : React.FC<PokemonDetails> = (pokemon) => {
    return (
        <>
            <div className={styles.actions}>
                <LinkButton to={`../${pokemon.id - 1}`} disabled={pokemon.id === 1}>
                    &laquo; Previous
                </LinkButton>
                <LinkButton to="..">Overview</LinkButton>
                <LinkButton to={`../${pokemon.id + 1}`}>Next &raquo;</LinkButton>
            </div>
        </>
    );
}