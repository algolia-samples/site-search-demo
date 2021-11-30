import { css } from "@emotion/react";

import * as breakpoints from "../constants/breakpoints";
import * as colors from "../constants/colors";
import * as fonts from "../constants/fonts";

export default {
  root: css`
    @font-face {
      font-family: "JetBrains Mono";
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url("/fonts/jetbrains-bold.woff") format("woff");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url("/fonts/poppins-regular.woff2") format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url("/fonts/poppins-semi-bold.woff2") format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }
    * {
      box-sizing: border-box;
    }

    input,
    progress {
      accent-color: ${colors.NEBULA_500};
    }

    html {
      font-size: unset;
    }
    body {
      margin: 0;
      font-family: ${fonts.POPPINS};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }
    ::selection {
      background: ${colors.NEBULA_500};
      color: #fff;
    }
    .no-outlines {
      *:focus {
        outline: 0;
      }
    }

    /*
      Tooltip
    */

    .rc-tooltip {
      position: absolute;
      z-index: 100;

      a {
        color: ${colors.WHITE};
      }
    }
    .rc-tooltip-hidden {
      display: none;
    }
    .rc-tooltip-content {
      position: relative;
    }
    .rc-tooltip-arrow {
      width: 0;
      height: 0;
      position: absolute;
    }
    .rc-tooltip-inner {
      padding: 8px;
      font-size: 14px;
      background-color: ${colors.GREY_700};
      color: white;
      max-width: 300px;
      border-radius: 4px;
    }
    .rc-tooltip-placement-right {
      padding-left: 8px;
    }
    .rc-tooltip-placement-top {
      padding-left: 8px;
      padding-bottom: 12px;
    }
    .rc-tooltip-placement-bottom {
      padding-left: 8px;
      padding-top: 8px;
    }
    .rc-tooltip-placement-right .rc-tooltip-arrow,
    .rc-tooltip-placement-left .rc-tooltip-arrow {
      top: 50%;
      transform: translateY(-50%);
    }
    .rc-tooltip-placement-top .rc-tooltip-arrow,
    .rc-tooltip-placement-bottom .rc-tooltip-arrow {
      left: 50%;
      transform: translateX(-50%);
    }
    .rc-tooltip-placement-right .rc-tooltip-arrow {
      right: 100%;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid ${colors.GREY_700};
    }
    .rc-tooltip-placement-left .rc-tooltip-arrow {
      left: 100%;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 8px solid ${colors.GREY_700};
    }
    .rc-tooltip-placement-top .rc-tooltip-arrow {
      top: 100%;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid ${colors.GREY_700};
    }
    .rc-tooltip-placement-bottom .rc-tooltip-arrow {
      bottom: 100%;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid ${colors.GREY_700};
    }

    /* Helper styles */

    .help-gradient {
      background-image: linear-gradient(#fff, ${colors.GREY_100});
    }
    .help-dotStyle {
      background-size: 132px;
      background-repeat: no-repeat;
    }
    .help-numberTab {
      font-feature-settings: "tnum";
      font-variant-numeric: tabular-nums;
    }

    /* Specific styles */

    .press-heroButtonStyle {
      min-width: auto !important;
      @media (min-width: ${breakpoints.MD}) {
        min-width: 200px !important;
      }
    }
    .carousel-buttonIconRight {
      left: 1px;
    }
    .infra-heroImage {
      background-position: calc(100% - 20px) 80%;
      @media (min-width: ${breakpoints.LG}) {
        width: 280px;
      }
    }
    .perso-heroImage {
      left: 45%;
      @media (min-width: ${breakpoints.LG}) {
        left: 40%;
      }
    }
    .nlu-heroImage {
      left: 45% !important;
      @media (min-width: ${breakpoints.LG}) {
        left: 45% !important;
      }
    }
    .zendesk-darkCard:before {
      content: "";
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid ${colors.GREY_900};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -10px;
      display: none;
      @media (min-width: ${breakpoints.MD}) {
        display: block;
      }
    }
    .carousel-buttonIconLeft {
      left: -1px;
    }
    .carousel-buttonIconRight {
      left: 1px;
    }
    .whatsnew-mobile {
      @media (min-width: ${breakpoints.MD}) {
        width: 300px !important;
      }
      @media (min-width: ${breakpoints.LG}) {
        width: 480px !important;
      }
    }
  `
};
