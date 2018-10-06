
import technologyTypes from '~/json/technology-types.json';
const INITDATA = 'INITDATA';
const ADD_UTILS ='ADD_UTILS';
export const initData=()=> {
    return dispatch => {
        return dispatch({
            type: INITDATA,
            projectData: [
                {
                    name: 'xxx',
                    desc:'cxxx',
                    util: 'webpack'
                },
                {
                    name: 'xxx',
                    desc:'cxxx',
                    util: 'webpack'
                }
            ],
            technologyTypes: technologyTypes
        });
    }
};

export const addUtils=(value)=> {
  return (dispatch)=> {
      return dispatch({
          type: ADD_UTILS,
          value
      });
      
  }  
};