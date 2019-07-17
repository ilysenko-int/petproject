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

export function fetchArticleById(data: any) {
    return (dispatch: { (arg0: RequestData): void; (arg0: ReceiveData): void; (arg0: FailureData): void; }) => {
        dispatch(requestData());

        fireStore
            .collection('articles')
            .where('title', '==', data.id)
            .limit(1)
            .get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.data())
                });
                // return dispatch(receiveData(arr))
            }).catch(error => dispatch(failureData()))
    }
}
