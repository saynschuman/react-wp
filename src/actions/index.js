import { SUCCESS } from '../constants';

export function loadArticles() {
  return {
    type: SUCCESS,
    callAPI: '/api/article',
  };
}
