import { FETCH_NEWS, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, News, ReceiveData, RequestData, FailureData } from '../types';
import fireStore from '../../../config/firebase';

export function requestData(): RequestData {
    return {
        type: FETCH_NEWS,
    }
};

export function receiveData(payload: News[]): ReceiveData {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload,
    }
};

export function failureData(): FailureData {
    return {
        type: FETCH_NEWS_FAILURE,
    }
}

export function fetchNews() {
    return (dispatch: { (arg0: RequestData): void; (arg0: ReceiveData): void; (arg0: FailureData): void; }) => {
        dispatch(requestData());
        fireStore.collection('articles').limit(10).get().then(function (querySnapshot) {
            let arr: any = [];
            querySnapshot.forEach(function (doc) {
                console.warn(doc.data())
                arr.push(doc.data())
            });
            return dispatch(receiveData(arr))
        }).catch(error => dispatch(failureData()))
    }
}
