import { SUCCESS } from '../constants';
import { arrToMap } from '../helpers/index';
import { OrderedMap, Record } from 'immutable';

const ArticleRecord = Record({
  text: undefined,
  title: '',
  id: undefined,
  date: undefined,
  comments: undefined,
  loading: false,
});

const ReducerState = new Record({
  loading: false,
  loaded: false,
  articles: new OrderedMap({}),
});

const defaultState = new ReducerState();

export default function articlesReducer(articlesState = defaultState, action) {
  const { type, response } = action;

  switch (type) {
    case SUCCESS:
      return articlesState
        .set('articles', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true);
    default:
      return articlesState;
  }
}
