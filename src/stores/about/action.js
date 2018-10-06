
import technologyTypes from '~/json/technology-types.json';

export const about = {
    INIT_DATA: 'INIT_DATA',
    TOGGLE_NAV: 'TOGGLE_NAV',
    CURR_DATA: 'CURR_DATA'
};

export const initData=()=> {
    return dispatch=> {
        technologyTypes.map(item => {
            item.list.map(v=> {
                v.selectStatus = false;
                // item.selectNum = 0;
            });
          });
        return dispatch({
            type: about.INIT_DATA,
            technologyTypes
        });
    }
}

export const queryCurrData=(data, path)=> {
    return dispatch=> {
        let currData = {};
        data.map(d=> {
            for(let key in d) {
                if(d['path'] === path) {
                    currData = d;
                }
            }
        });

        dispatch({
            type: about.CURR_DATA,
            currData
        });
    }
    
    
}

export const toggle=(index)=> {
    return dispatch=> {
        dispatch({
            type: about.TOGGLE_NAV,
            index
        });
    }

}