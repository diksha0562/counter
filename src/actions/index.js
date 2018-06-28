export function handleIncAction(count){
    return {
        type:'INC_COUNT', value:count
    }
}

export function handleDecAction(count){
    return {
        type:'DEC_COUNT', value:count
    }
}