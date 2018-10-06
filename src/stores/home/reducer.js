const homeData = {
    projectData: [],
    technologyTypes: [],
    utils: []
};
export default (state=homeData, action)=> {
    switch(action.type) {
        case 'INITDATA':
            return {...state, ...action};
        case 'ADD_UTILS':
            state.utils.push(action.value);
            return {...state, ...{
                utils: [...state.utils]
            }}
        default:
            return state;
    }
}