
import {about} from './action';
const defaultState = {
    // about: []
};

export default (state=defaultState, action)=> {
    switch(action.type) {
        case about.INIT_DATA:
            // state.data = action.technologyTypes;
            return {...state, data: action.technologyTypes};
        case about.CURR_DATA:
            // state.data = action.technologyTypes;
            return {...state, currData: action.currData};
        case about.TOGGLE_NAV:
            state.currData.list[action.index]['selectStatus'] =!state.currData.list[action.index]['selectStatus'];
            return {...state, currData: {...state.currData}};
        default: 
            return state;
    }

}