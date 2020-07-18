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
    clearUsers: () =>  { throw new Error('GithubContext not avaliable') },
    getuser: () =>  { throw new Error('GithubContext not avaliable') },
    getuserrepos: () =>  { throw new Error('GithubContext not avaliable') },
    searchusers: () =>  { throw new Error('GithubContext not avaliable') }
}
const GithubContext = createContext<IGithubContext>(istate)

export default GithubContext