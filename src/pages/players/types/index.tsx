// Describing the shape of the chat's slice of state
export interface Player {
    id: number,
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

export interface PlayersState {
    fetching: boolean;
    data: Player[];
    player: Player | any,
    not_existed: boolean,
}

export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_FAILURE = 'FETCH_PLAYERS_FAILURE';

export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS';


export interface RequestData {
    type: typeof FETCH_PLAYERS;
    payload?: {},
};
export interface ReceiveData {
    type: typeof FETCH_PLAYERS_SUCCESS;
    payload: Player[],
};
export interface FailureData {
    type: typeof FETCH_PLAYERS_FAILURE,
    payload?: {},
};
export interface ReceivePlayerById {
    type: typeof FETCH_PLAYER_SUCCESS;
    payload: Player[],
};

export type ActionTypes = RequestData | ReceiveData | FailureData | ReceivePlayerById;
