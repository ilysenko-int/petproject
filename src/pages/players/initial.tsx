import {
  PlayersState,
} from "./types";

const initial: PlayersState = {
  fetching: false,
  data: [],
  player: {
    id: '',
    anthropometry: {
        height: 0,
        weight: 0,
    },
    bio: {
        about: '',
        experience: '',
        photo: '',
    },
    firstName: '',
    lastName: '',
    positions: {
        offense: [],
        defense: [],
        special: [],
    },
    socialmedia: {
        instagram: '',
        facebook: '',
    }
  },
  not_existed_player: false,
};

export default initial
