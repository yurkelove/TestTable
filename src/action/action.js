import { 
   DATA_TABLE,
   DELETE_ROW_ELEM,
} from '../constants/constants';


export function DATA_TABLE_ARRAY(data){
    return {type: DATA_TABLE, payload: data}
}

export function DELETE_ROW(index){
    return {type : DELETE_ROW_ELEM , index: index }
}


