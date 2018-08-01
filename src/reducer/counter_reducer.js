export default function counter_reducer(state={counter_value:0}, action){
    switch (action.type) {
        case 'INC_COUNT':
            if(action.value<6){
            let newState= Object.assign({}, state, {counter_value:action.value+1, id:action.id})
            return newState;}
            else return Object.assign({}, state, {counter_value:action.value, id:action.id})
            break;
        case 'DEC_COUNT':
            if(action.value>0)
            return Object.assign({}, state, {counter_value:action.value-1})
            else return Object.assign({}, state, {counter_value:action.value})
            break;
        default: 
            return state;
    }
}