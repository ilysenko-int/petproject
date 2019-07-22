import { FETCH_PLAYERS, FETCH_PLAYERS_SUCCESS, FETCH_PLAYERS_FAILURE, Player, ReceiveData, RequestData, FailureData } from '../types';
import fireStore from '../../../config/firebase';

export function requestData(): RequestData {
    return {
        type: FETCH_PLAYERS,
    }
};

export function receiveData(payload: Player[]): ReceiveData {
    return {
        type: FETCH_PLAYERS_SUCCESS,
        payload,
    }
};

export function failureData(): FailureData {
    return {
        type: FETCH_PLAYERS_FAILURE,
    }
}

export function fetchNews() {
    return (dispatch: { (arg0: RequestData): void; (arg0: ReceiveData): void; (arg0: FailureData): void; }) => {
        dispatch(requestData());
        fireStore.collection('players').limit(10).get().then(function (querySnapshot) {
            let arr: any = [];
            querySnapshot.forEach(function (doc) {
                arr.push({...doc.data(), id: doc.id })
            });
            return dispatch(receiveData(arr))
        }).catch(error => dispatch(failureData()))
    }
}
