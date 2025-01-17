import styles from "./App.module.scss"

import { BASENAME } from "./Constants"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useAppSelector } from "./appStore"
import { LoadingSpinner } from "./components/LoadingSpinner"
import { Header } from "./features/Headers/MainHeader"
import { Pokedex } from "./features/Pokedex"
import { PokemonDetail } from "./features/Pokemon/PokemonDetail"
import { MoveDetail } from "./features/MoveDetails/MoveDetails"
import { AbilityDetail } from "./features/AbilityDetails/AbilityDetails"

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Pokedex />,
        },
        {
            path: 'pokemon/:pokemonName',
            element: <PokemonDetail />,
        },
        {
            path: 'move/:moveName',
            element: <MoveDetail />,
        },
        {
            path: 'ability/:abilityName',
            element: <AbilityDetail />
        },
    ],
    {
        basename: BASENAME,
    }
)

export const App: React.FC = () => {
    const queryPending = useAppSelector((state) => Object.values(state.api.queries).some((query) => query?.status === 'pending'))

    return (
        <>
            <div className={styles.app}>
                <Header />
                <RouterProvider router={router} />
            </div>
            <LoadingSpinner show={queryPending} />
        </>
    )
}