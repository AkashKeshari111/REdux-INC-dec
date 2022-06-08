import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./action.type";


export const add=()=>({type: COUNTER_INCREMENT});
export const substract=()=>({type: COUNTER_DECREMENT})