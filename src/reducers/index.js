import { ACTIVE_STEP, ADD_COMPETENCES, ADD_COORDONNEES, ADD_EXPERIENCES, ADD_FORMATIONS } from "../actions/actions-types";

function rootReducer(state, action)
{  
    if(action.type===ADD_COORDONNEES)
    {
        console.log(action.coordonnees);
            state.coordonnees=action.coordonnees;
            return{...state}
    }
    if(action.type===ADD_FORMATIONS)
    {
        state.formations=action.formations;
        return{...state}
    }
    if(action.type===ADD_EXPERIENCES)
    {
        state.experiences=action.experiences;
        return{...state}
    }
    if(action.type===ADD_COMPETENCES)
    {
        state.competences=action.competences;
        return{...state}
    }
    if(action.type===ACTIVE_STEP)
    {        
            state.activeStep=action.activeStep;
            return{...state}
    }
    return state;
}
export default rootReducer;