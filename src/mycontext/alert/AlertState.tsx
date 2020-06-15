import React, { useReducer } from "react"
import AlertContext from "./AlertContext"
import { SHOW_ALERT,REMOVE_ALERT } from "../Types"
import AlertReducer from "./AlertReducer"
import { IAlertState } from "../IAlertState"


export interface typealert{
    variant : string,
    text: string,
}
const AlertState = (props : any) =>{

    const initialState :IAlertState = {
        alert:{
            variant :'',
            text :''
        }
    }

    const [state,dispatch] = useReducer(AlertReducer,initialState)

    const showAlert =(variant : string,text : string) =>{
        dispatch({type:SHOW_ALERT,payload:{variant,text}})
        setTimeout(()=>{
            setAlert({variant:'',text:''})
        },2000)
    }

    const setAlert =(alert : typealert) => dispatch({type :REMOVE_ALERT,payload:null})

    return(
        <AlertContext.Provider value={{
            alert:state.alert,
            showAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )

}

export default AlertState
