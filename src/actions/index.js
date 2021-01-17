import { ADD_COORDONNEES,ADD_FORMATIONS, ACTIVE_STEP, ADD_EXPERIENCES } from "./actions-types"

export function addCoordonnees(coordonnees)
{
    return{type:ADD_COORDONNEES,coordonnees:coordonnees}
}

export function addFormations(formations)
{
    return{type:ADD_FORMATIONS,formations:formations}
}
export function addExperiences(experiences)
{
    return{type:ADD_EXPERIENCES,experiences:experiences}
}
export function addCompetences(competences)
{
    return{type:ADD_COMPETENCES,competences:competences}
}
export function getActiveStep(activeStep)
{
    return{type:ACTIVE_STEP,activeStep:activeStep}
}