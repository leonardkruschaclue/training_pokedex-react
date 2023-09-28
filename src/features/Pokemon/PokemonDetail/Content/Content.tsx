import { useState } from "react";
import { Button } from "../../../../components/Button";
import { PokemonDetails } from "../../../../types/pokemon";
import { PokemonStatDisplay } from "./StatDisplay/PokemonStatDisplay";
import { PokemonAbilityDisplay } from "./AbilityDisplay/PokemonAbilityDisplay";
import { PokemonMoveDisplay } from "./MoveDisplay/PokemonMoveDisplay";
import { PokemonHeader } from "./PokemonHeader/PokemonHeader";
import styles from "./Content.module.scss"

export function Content (pokemon : PokemonDetails) {
    const [page , setPage] = useState<number>(0)
    return (
        <>
            <div className={styles.contentbox}>
                <div>
                    <PokemonHeader {...pokemon} />
                    <img src={pokemon.imageSrc} />
                </div>
                <div className={styles.content}>
                    <div className={styles.topbar}>
                        <Button onClick={() => setPage(0)} disabled={(page===0)}>
                            Stats
                        </Button>
                        <Button onClick={() => setPage(1)} disabled={(page===1)}>
                            Abilities
                        </Button>
                        <Button onClick={() => setPage(2)} disabled={(page===2)}>
                            Moves
                        </Button>
                    </div>
                    {(page===0) && <PokemonStatDisplay {...pokemon}/>}
                    {(page===1) && <PokemonAbilityDisplay {...pokemon} />}
                    {(page===2) && <PokemonMoveDisplay {...pokemon} />}
                </div>
            </div>
        </>
    );
}