import { FETCH_NEWS, FETCH_ARTICLE_SUCCESS, FETCH_NEWS_FAILURE, News, ReceiveArticleById, RequestData, FailureData } from '../types';
import fireStore from '../../../config/firebase';

export function requestData(): RequestData {
    return {
        type: FETCH_NEWS,
    }
};

export function receiveArticleById(payload: News[] | any): ReceiveArticleById {
    return {
        type: FETCH_ARTICLE_SUCCESS,
        payload,
    }
};

export function failureData(): FailureData {
    return {
        type: FETCH_NEWS_FAILURE,
    }
}

export function fetchArticleById(data: any) {
    return (dispatch: { (arg0: RequestData): void; (arg0: ReceiveArticleById): void; (arg0: FailureData): void; }) => {
        dispatch(requestData());
        fireStore
            .collection('articles').doc(data.id).get().then(function (doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    dispatch(receiveArticleById(doc.data()))
                } else {
                    console.log("No such document!");
                    dispatch(failureData())
                }
            }).catch(() => dispatch(failureData()))
    }
}
