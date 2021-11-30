import { css } from '@emotion/react';

import * as colors from '../../constants/colors';
import * as breakpoints from '../../constants/breakpoints';

const styles = {
  root: css`
    & .ais-Highlight-highlighted,
    & .ais-Snippet-highlighted {
      color: ${colors.NEBULA_500};
      font-style: normal;
    }
    & .ais-VoiceSearch {
      display: flex;
    }
    & .ais-VoiceSearch-button {
      background: none;
      appearance: none;
      color: ${colors.NEBULA_500};
      border: none;
      cursor: pointer;
    }
    & .ais-VoiceSearch-button > svg {
      width: 20px;
      height: 20px;
      @media (min-width: ${breakpoints.LG}) {
        width: 24px;
        height: 24px;
      }
    }
  `,
  button: css`
    background-image: linear-gradient(#fff, #f9fafb);
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  `,
  buttonLeft: css`
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  `,
  buttonRight: css`
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    left: -1px;
  `,
  buttonIcon: css`
    width: 14px;
    height: 14px;
  `,
  closeButtonContainer: css`
    background-image: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 65%,
      rgb(255, 255, 255) 100%
    );
  `,
  querySuggestions: css`
    transition: background-color 0.2s ease-out;
  `,
  searchBox: css`
    outline: none;
    &::placeholder {
      color: ${colors.GREY_400};
    }
  `,
  topMinOne: css`
    top: -1px;
  `,
  imgHeight: css`
    height: 150px;
  `,
};

export default styles;
