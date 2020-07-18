import React, { useContext } from 'react'
import {Alert} from "react-bootstrap"
import AlertContext from '../mycontext/alert/AlertContext'

const MyAlert : React.FC= () => {

    const alertcontext = useContext<any>(AlertContext)
    const{alert} = alertcontext
    return (
        <div>
            <Alert variant={alert.variant}>
                {alert.text}
            </Alert>
        </div>
    )
}

export default MyAlert
