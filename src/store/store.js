import {legacy_createStore} from 'redux'
import { reducer } from './reducer'


const ini_State={
    count:10
};
export const store = legacy_createStore(reducer,ini_State)