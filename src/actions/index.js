import { SUCCESS } from '../constants';

export function loadArticles() {
  return {
    type: SUCCESS,
    callAPI: '/wp-json/wp/v2/posts/',
  };
}
