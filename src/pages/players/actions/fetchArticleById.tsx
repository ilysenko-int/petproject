import { FETCH_NEWS, FETCH_ARTICLE_SUCCESS, FETCH_NEWS_FAILURE, News, ReceiveArticleById, RequestData, FailureData } from '../types';
import fireStore from '../../../config/firebase';

export function requestData(): RequestData {
    return {
        type: FETCH_NEWS,
    }
};

export function receiveArticleById(payload: News[]): ReceiveArticleById {
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
            .collection('articles')
            .where('title', '==', data.id)
            .limit(1)
            .get().then(function (querySnapshot) {
                let article: any = {}
                querySnapshot.forEach(function (doc) {
                    article = doc.data();
                });
                if(article.title == undefined) { dispatch(failureData()) } else { return dispatch(receiveArticleById(article)) }
                
            }).catch(error => dispatch(failureData()))
    }
}
