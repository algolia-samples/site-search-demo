import qs from 'qs';
import { SearchState } from 'react-instantsearch-core';

const indices: { [key: string]: string } = {
  PROD_algolia_com_site: 'website',
  'PROD_algolia_com_site_resources-ubf': 'resources',
  PROD_algolia_blog: 'blog',
  PROD_algolia_com_doc: 'doc',
  'PROD_algolia_com-inspiration-library': 'inspiration',
};
const indicesReverse = Object.fromEntries(
  Object.entries(indices).map(([key, val]) => [val, key])
);

function searchStateToRouteState(state: SearchState) {
  if (!state.indices) return state;
  return {
    ...state,
    indices: Object.fromEntries(
      Object.entries(state.indices).map(([index, { configure, ...value }]) => [
        indices[index],
        value,
      ])
    ),
  };
}

function routeStateToSearchState(state: SearchState) {
  if (!state.indices) return state;
  return {
    ...state,
    indices: Object.fromEntries(
      Object.entries(state.indices).map(([index, value]) => [
        indicesReverse[index],
        value,
      ])
    ),
  };
}

export const createURL = (state: SearchState) =>
  qs.stringify(searchStateToRouteState(state), { addQueryPrefix: true });

export const getUrlParameter = (query: string, param: string) =>
  qs.parse(query.substring(1))[param];

export const isBrowser = typeof window !== 'undefined';

export const searchStateToUrl = (
  location: Location,
  searchState: SearchState
) => (searchState ? `${location.pathname}${createURL(searchState)}` : '');

export const urlToSearchState = ({ search }: Location) =>
  routeStateToSearchState(qs.parse(search, { ignoreQueryPrefix: true }));

export const capitalize = (string: string) =>
  string
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

export const isSpeechSupported = () => {
  if (isBrowser) {
    const SpeechRecognitionAPI =
      (window as any).webkitSpeechRecognition ||
      (window as any).SpeechRecognition;
    return Boolean(SpeechRecognitionAPI);
  }
  return false;
};

export const mediaQuery = (query: number | string) => {
  if (isBrowser) {
    return window.matchMedia(`(min-width: ${query})`).matches;
  }
  return false;
};

export const setSessionStorageItem = (name: string, value: string) =>
  isBrowser &&
  window.localStorage &&
  window.sessionStorage.setItem(name, value);

export const getSessionStorageItem = (name: string) =>
  isBrowser && window.sessionStorage && window.sessionStorage.getItem(name);
