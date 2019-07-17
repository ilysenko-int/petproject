// Describing the shape of the chat's slice of state
export interface News {
    id: string;
    title: string;
    description: string;
    created_at: {
        seconds: string,
        nanoseconds: string
    },
    pre_description: string;
    cover: string,
    images: string[]
}

export interface NewsState {
    fetching: boolean;
    data: News[];
    article: News | any,
    not_existed_article: boolean,
}

export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';


export interface RequestData {
    type: typeof FETCH_NEWS;
    payload?: {},
};
export interface ReceiveData {
    type: typeof FETCH_NEWS_SUCCESS;
    payload: News[],
};
export interface FailureData {
    type: typeof FETCH_NEWS_FAILURE,
    payload?: {},
};
export interface ReceiveArticleById {
    type: typeof FETCH_ARTICLE_SUCCESS;
    payload: News[],
};

export type ActionTypes = RequestData | ReceiveData | FailureData | ReceiveArticleById;
