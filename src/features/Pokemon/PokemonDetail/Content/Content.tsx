import { Button } from "../../../../components/Button";
import { PokemonStats } from "../../../../types/pokemon";
import { PokemonStatDisplay } from "../Stats/PokemonStats";
import { useState } from "react";
import styles from "./Content.module.scss"
import { PokemonSkillDisplay } from "../Skills/PokemonSkillDisplay";

export function Content (pokemon : PokemonStats) {
    const [page , setPage] = useState<number>(0)
    return (
        <>
            <div className={styles.content}>
                        <img src={pokemon.imageSrc} />
                        {(page===0) && <PokemonStatDisplay {...pokemon}/>}
                        {(page===1) && <PokemonSkillDisplay />}
                <div className={styles.sidebar}>
                    <Button onClick={() => setPage(0)} disabled={(page===0)}>
                        Stats
                    </Button>
                    <Button onClick={() => setPage(1)} disabled={(page===1)}>
                        Abilities
                    </Button>
                </div>
            </div>
        </>
    );
}