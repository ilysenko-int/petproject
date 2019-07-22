import { FETCH_PLAYERS, FETCH_PLAYERS_FAILURE, Player, FETCH_PLAYER_SUCCESS, RequestData, FailureData, ReceivePlayerById } from '../types';
import fireStore from '../../../config/firebase';

export function requestData(): RequestData {
    return {
        type: FETCH_PLAYERS,
    }
};

export function receivePlayerById(payload: Player[] | any): ReceivePlayerById {
    return {
        type: FETCH_PLAYER_SUCCESS,
        payload,
    }
};

export function failureData(): FailureData {
    return {
        type: FETCH_PLAYERS_FAILURE,
    }
}

export function fetchPlayerById(data: any) {
    return (dispatch: { (arg0: RequestData): void; (arg0: ReceivePlayerById): void; (arg0: FailureData): void; }) => {
        dispatch(requestData());
        fireStore.collection('players').doc(data.id).get().then(function (doc) {
            if (doc.exists) {
                dispatch(receivePlayerById(doc.data()))
            } else {
                dispatch(failureData())
            }
        }).catch(() => dispatch(failureData()))
    }
}
