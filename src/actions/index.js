export function handleIncAction(count,num){
    return {
        type:'INC_COUNT', value:count, id:num
    }
}

export function handleDecAction(count){
    return {
        type:'DEC_COUNT', value:count
    }
}