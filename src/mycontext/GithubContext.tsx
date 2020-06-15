import { createContext } from "react"
import { initialState } from "./Initstate"
import { IInitState } from "./alert/IInitState"

export interface IGithubContext {
    State: IInitState,
    searchusers: (login: string) => void,
    clearUsers: () => void,
    getuser: (login: string) => void,
    getuserrepos: (login: string) => void
}

const istate: IGithubContext = {
    State: initialState,
    clearUsers: () => null,
    getuser: () => null,
    getuserrepos: () => null,
    searchusers: () => null
}
const GithubContext = createContext<IGithubContext>(istate)

export default GithubContext