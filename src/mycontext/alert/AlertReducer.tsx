import React from "react"
import { SHOW_ALERT,REMOVE_ALERT } from "../Types"
import { IAlertState } from "../IAlertState"

export interface IActionTypes{
    type : any,
    payload : any
}

export default (state : IAlertState ,action : IActionTypes) =>{
    switch(action.type)
    {
        case SHOW_ALERT:
        return{
            ...state,
            alert:{
                variant : action.payload["variant"],
                text:action.payload["text"]
            }
        }
        case REMOVE_ALERT:
            return{
                ...state,
                alert:{
                    variant: '',
                    text:''
                }
            }
    default : return state
    }
    
}