export interface Player {
    anthropometry?: {
        height: string,
        weight: string,
    },
    bio: {
        about: string,
        experience: number,
        photo: string,
    },
    firstName: string,
    lastName: string,
    jersey_number: number,
    positions: {
        offense?: [],
        defense?: [],
        special?: [],
    },
    socialmedia?: {
        instagram?: string,
        facebook?: string,
    }
}

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

export interface AdminState {
    fetching: boolean;
    form: {}
}

export const SEND = 'SEND';
export const SEND_SUCCESS = 'SEND_SUCCESS';
export const SEND_FAILURE = 'SEND_FAILURE';

export interface Send {
    type: typeof SEND;
    payload?: {},
};
export interface Response {
    type: typeof SEND_SUCCESS;
    payload: Player | News,
};
export interface Failure {
    type: typeof SEND_FAILURE,
    payload?: {},
};

export type ActionTypes = Send | Response | Failure;
