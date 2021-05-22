import { DISABLE_PLAY } from "./actiontype";

const init = {
    disable_play : false
};

const hangeleReducer = (state = init , action)=>{
    switch (action.type) {
        case DISABLE_PLAY:
            return { ...state , disable_play : !state.disable_play}
            break;
    
        default:
            return {...state}
            break;
    }
}

