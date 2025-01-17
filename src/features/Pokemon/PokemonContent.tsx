import styles from "../../Style/Content.module.scss"

import { PokemonDetails } from "../../api/types/pokemon";
import { PokemonStatDisplay } from "./StatDisplay/PokemonStatDisplay";
import { PokemonAbilityDisplay } from "./AbilityDisplay/PokemonAbilityDisplay";
import { PokemonMoveDisplay } from "./MoveDisplay/PokemonMoveDisplay";
import { DetailHeader } from "../Headers/DetailHeader/DetailHeader";
import { MultiPageContent } from "../../components/MultiPageContent/MultiPageContent";

export function PokemonContent (pokemon : PokemonDetails) {
    //Pages
    const pages = new Array();
    pages[0] = PokemonStatDisplay;
    pages[1] = PokemonAbilityDisplay;
    pages[2] = PokemonMoveDisplay;

    return (
        <>
            <div className={styles.contentbox}>
                <div>
                    <DetailHeader {...pokemon} />
                    <img src={pokemon.imageSrc} alt={`Displays a picture of ${pokemon.name}`} />
                </div>
                <div className={styles.colum}>
                    {MultiPageContent<PokemonDetails>(pages, pokemon)}
                </div>
            </div>
        </>
    );
}