import {
  NewsState,
} from "./types";

const initial: NewsState = {
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
  not_existed: false,
}

export default initial