import qs from 'qs';

export const createURL = (state) => `?${qs.stringify(state)}`;

export const getUrlParameter = (query, param) =>
  qs.parse(query.substring(1))[param];

export const isBrowser = typeof window !== 'undefined';

export const searchStateToUrl = (location, searchState) =>
  searchState ? `${location.pathname}${createURL(searchState)}` : '';

export const urlToSearchState = ({ search }) => qs.parse(search.slice(1));

export const capitalize = (string) =>
  string
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');


export const isSpeechSupported = () => {
  if (isBrowser) {
    const SpeechRecognitionAPI =
      window.webkitSpeechRecognition || window.SpeechRecognition;
    return Boolean(SpeechRecognitionAPI);
  }
  return false;
};

export const mediaQuery = (query) => {
  if (isBrowser) {
    return window.matchMedia(`(min-width: ${query})`).matches;
  }
  return false;
};


export const setSessionStorageItem = (name, value) =>
  isBrowser &&
  window.localStorage &&
  window.sessionStorage.setItem(name, value);

export const getSessionStorageItem = (name) =>
  isBrowser && window.sessionStorage && window.sessionStorage.getItem(name);
