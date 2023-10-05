import { PokemonDetails } from "../../api/types/pokemon";
import { LinkButton } from "../LinkButton";

import styles from "./NavigationButtons.module.scss"


export const PokemonNavigationButtons : React.FC<PokemonDetails> = (pokemon) => {
    return (
        <>
            <div className={styles.actions}>
                <LinkButton to={`../pokemon/${pokemon.id - 1}`} disabled={pokemon.id === 1}>
                    &laquo; Previous
                </LinkButton>
                <LinkButton to="..">Overview</LinkButton>
                <LinkButton to={`../pokemon/${pokemon.id + 1}`}>Next &raquo;</LinkButton>
            </div>
        </>
    );
}