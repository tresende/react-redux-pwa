import { count, remove } from "../actions/actionCreator"

export default class CountApi {

    static add(size) {
        return dispatch => {
            dispatch(count(size));
        }
    }

    static remove(size) {
        return dispatch => {
            dispatch(remove(size));
        }
    }
}