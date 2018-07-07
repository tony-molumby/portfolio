import { 
    TOGGLE_FILTER, 
    SET_ACRONYM_FILTER,   
    SELECT_DISTANCE
} from '../actions/types'

import updateItemInArray from '../utils/reducerUtilities'

const initialState = {
    acronyms: [],
    days: [
        { name: 'Monday', value: true },
        { name: 'Tuesday', value: true },
        { name: 'Wednesday', value: true },
        { name: 'Thursday', value: true },
        { name: 'Friday', value: true },
        { name: 'Saturday', value: true },
        { name: 'Sunday', value: true}
    ],
    distance: [
        {key: '1-miles', text: '1 mile' , value: 1 },
        {key: '5-miles', text: '5 miles' , value: 5 },
        {key: '10-miles', text: '10 miles', value: 10},
        {key: '20-miles', text: '20 miles', value: 20},
        {key: '50-miles', text: '50 miles', value: 50}
    ],
    selectedDistance: 5
};

export default function(state = initialState, action) {
   
    switch(action.type) {
        case TOGGLE_FILTER:
            const { idx, group } = action.payload
            const newArray = updateItemInArray(state[group], idx)
            return {
                ...state,
                [group]: newArray
            }
        case SET_ACRONYM_FILTER:
            return { ...state, acronyms: [...action.payload] }
        case SELECT_DISTANCE:
            return {...state, selectedDistance: action.payload}
        default:
            return state;
     
    }
}