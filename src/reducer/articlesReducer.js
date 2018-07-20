import { SUCCESS } from '../constants';

const initialState = {
  articles: {
    1: 'article 1',
    2: 'article 2',
    3: 'article 3',
  },
};

export default function articlesReducer(articlesState = initialState, action) {
  const { type, response } = action;

  switch (type) {
    case SUCCESS:
      return (articlesState = response);
    default:
      return articlesState;
  }
}
