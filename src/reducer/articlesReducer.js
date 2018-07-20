import { SUCCESS } from '../constants';

export default function articlesReducer(articlesState = {}, action) {
  const { type, response } = action;

  switch (type) {
    case SUCCESS:
      return articlesState = response;
    default:
      return articlesState;
  }
}
