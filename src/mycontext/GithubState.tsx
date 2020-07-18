import React, { useReducer } from "react"
import GithubReducer, { Action } from "./GithubReducer"
import GithubContext from "./GithubContext"
import { SET_LOADING, CLEAR_USERS, USER_LOADING, GET_USER, SEARCH_USERS, GET_REPOS } from "./Types"
import { IInitState } from "./alert/IInitState"
import { initialState } from "./Initstate"

const GithubState = (props: any) => {


    const [state, dispatch] = useReducer<React.Reducer<IInitState, Action>>(GithubReducer, initialState)

    const searchusers = async (search: string) => {
        setloading()
        const data = await fetch(`https://api.github.com/search/users?q=${search}`)
        const items = await data.json()
        dispatch({ type: SEARCH_USERS, payload: items.items })
    }

    const getuser = async (login: string) => {
        userloading()
        const data = await fetch(`https://api.github.com/users/${login}`)
        const items = await data.json()
        dispatch({ type: GET_USER, payload: items })
    }

    const getuserrepos = async (login: string) => {
        const data = await fetch(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`)
        const items = await data.json()
        dispatch({ type: GET_REPOS, payload: items })
    }

    const clearUsers = () => dispatch({ type: CLEAR_USERS })
    const setloading = () => dispatch({ type: SET_LOADING })
    const userloading = () => dispatch({ type: USER_LOADING })

    return (
        <GithubContext.Provider value={{
            State: {
                users: state.users,
                user: state.user,
                loading: state.loading,
                userloading: state.userloading,
                repos: state.repos,
                alert: state.alert,
            },
            searchusers,
            clearUsers,
            getuser,
            getuserrepos
        }}>
            {props.children}
        </GithubContext.Provider>
    )

}

export default GithubState