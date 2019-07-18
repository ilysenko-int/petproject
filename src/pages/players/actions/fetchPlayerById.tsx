import { FETCH_PLAYERS, FETCH_PLAYERS_FAILURE, Player, FETCH_PLAYER_SUCCESS, RequestData, FailureData, ReceivePlayerById } from '../types';
import fireStore from '../../../config/firebase';

export function requestData(): RequestData {
    return {
        type: FETCH_PLAYERS,
    }
};

export function receivePlayerById(payload: Player[]): ReceivePlayerById {
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
        fireStore
            .collection('players')
            .where('id', '==', +data.id)
            .limit(1)
            .get().then(function (querySnapshot) {
                let player: any = {}
                querySnapshot.forEach(function (doc) {
                    player = doc.data();
                });
                console.log(player)
                if (player.firstName == undefined) { dispatch(failureData()) } else { return dispatch(receivePlayerById(player)) }
            }).catch(error => dispatch(failureData()))
    }
}
