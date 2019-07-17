import {
  NewsState,
  News
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
  }
}

export default initial