import { SEND, SEND_SUCCESS, SEND_FAILURE, ActionTypes, AdminState, Send, Response, Failure, Player, News } from '../types'
import fireStore from '../../../config/firebase';

export function send(): Send {
    return {
        type: SEND,
    }
};

export function response(payload: Player | News): Response {
    return {
        type: SEND_SUCCESS,
        payload,
    }
};

export function failure(): Failure {
    return {
        type: SEND_FAILURE,
    }
}

export function create(obj: any) {
    return (dispatch: { (arg0: Send): void; (arg0: Response): void; (arg0: Failure): void; }) => {
        console.warn(obj)
        dispatch(send());
        fireStore.collection("players").doc("one").set(obj).then(function() {
            dispatch(response(obj))
        }).catch(error => dispatch(failure()));
    }
}

export default create
