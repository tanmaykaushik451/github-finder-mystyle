import { IInitState } from "./alert/IInitState";

export const initialState : IInitState= {
    users:[],
    user:{},
    loading : false,
    userloading:false,
    alert : null,
    repos:[]
}