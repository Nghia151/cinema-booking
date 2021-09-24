import {datVeApi} from "apis/datVeApi";
import {
    FETCH_ALL_SEAT_PLAN_REQUETS,
    FETCH_ALL_SEAT_PLAN_SUCCESS,
    FETCH_ALL_SEAT_PLAN_FAILD,
    DAT_GHE
} from './types'


export const actDatghe = (ghe)=>({
    type: DAT_GHE,
    payload:ghe
})

export const actFetchAllSeatPlanApi = showTimeId => {
    return dispatch => {
        dispatch({ type: FETCH_ALL_SEAT_PLAN_REQUETS });
        datVeApi
            .fecthAllSeatPlanApi(showTimeId)
            .then(res => {
                dispatch({
                    type: FETCH_ALL_SEAT_PLAN_SUCCESS,
                    payload: res.data.content,
                });
            })
            .catch(err => {
                dispatch({
                    type: FETCH_ALL_SEAT_PLAN_FAILD,
                    payload: err,
                });
            });
    };
};