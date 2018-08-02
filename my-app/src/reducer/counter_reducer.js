export default function counter_reducer(state={counter_value:0}, action){
    switch (action.type) {
        case 'INC_COUNT':
            if(action.value<6){
            let newState= Object.assign({}, state, {counter_value:action.value+1})
            return newState;}
            else return Object.assign({}, state, {counter_value:action.value})

       
        default: 
            return state;
    }
}