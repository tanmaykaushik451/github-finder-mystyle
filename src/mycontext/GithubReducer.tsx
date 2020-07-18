import React from 'react'
import {SET_LOADING,CLEAR_USERS,GET_REPOS, GET_USER,SEARCH_USERS,SHOW_ALERT, USER_LOADING} from "./Types"
import { IInitState } from './alert/IInitState'
export interface Action{
    type : string,
    payload? : any
}
export default (state :IInitState,action:Action) : IInitState=>{
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                 loading : true,
            }
        case SEARCH_USERS:
            return{
                ...state,
                users : action.payload,
                loading:false
            }
        case CLEAR_USERS:
            return{
                ...state,
                users : [],
                loading:false
            }
        case USER_LOADING:
            return{
                ...state,
                userloading:true
            }
        case GET_USER:
            return{
                ...state,
                user: action.payload,
                userloading:false
            }
        case GET_REPOS:
            return{
                ...state,
                repos:action.payload
            }
        default:
            return state
    }
}