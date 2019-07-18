import {
  PlayersState,
  Player
} from "./types";

const initial: PlayersState = {
  fetching: false,
  data: [],
  article: {
    id: '',
    title: '',
    description: '',
    created_at: {
        seconds: '',
        nanoseconds: '',
    },
    pre_description: '',
    cover: '',
    images: []
  },
  not_existed_player: false,
};

export default initial
