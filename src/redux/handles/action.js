import { DISABLE_PLAY } from "./actiontype"

export const disablePlay = ()=>{
    return dispatch=>{
        dispatch({
            type : DISABLE_PLAY
        })
    }
} 