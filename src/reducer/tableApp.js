import {
  DATA_TABLE,
  DELETE_ROW_ELEM,
} from '../constants/constants';



export default (state = [], action) => {
  switch (action.type){
    case DATA_TABLE:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];
    case DELETE_ROW_ELEM:
      return state.filter((data, i) => i !== action.index);
    default:
          return state;
  }
};


