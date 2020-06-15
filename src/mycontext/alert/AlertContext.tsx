import React, { createContext } from "react"

export interface IAlertContext{
    alert: { variant: any; text: any; }
    showAlert: (variant: string, text: string) => void
}

const AlertContext  = createContext<IAlertContext | null>(null)

export default AlertContext