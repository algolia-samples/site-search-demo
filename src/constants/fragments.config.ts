const config = {
  // General settings for the compiled code
  options: {
    namespace: '',
    important: false,
    separator: '\\:',
  },
  // Define your breakpoints
  breakpoints: {
    xs: '500px',
    sm: '768px',
    md: '960px',
    lg: '1200px',
    xl: '1440px',
    xxl: '1920px',
  },
  // Define your brand colors and any others you might want to reuse across your project
  colors: {
    white: '#fff',
    black: '#000',

    'grey-900': '#23263B',
    'grey-800': '#36395A',
    'grey-700': '#484C7A',
    'grey-600': '#5A5E9A',
    'grey-500': '#777AAF',
    'grey-400': '#9698C3',
    'grey-300': '#B6B7D5',
    'grey-200': '#D6D6E7',
    'grey-100': '#F5F5FA',
    'grey-050': '#FCFCFD',
    'grey-000': '#FFFFFF',

    'pink-900': '#59063D',
    'pink-800': '#88085C',
    'pink-700': '#B80979',
    'pink-600': '#E90A96',
    'pink-500': '#F82CAA',
    'pink-400': '#FB5ABC',
    'pink-300': '#FD89CE',
    'pink-200': '#FEB9E2',
    'pink-100': '#FFEAF6',

    'nebula-900': '#141D61',
    'nebula-800': '#1E2B8F',
    'nebula-700': '#2B3CBB',
    'nebula-600': '#3C4FE0',
    'nebula-500': '#5468FF',
    'nebula-400': '#7C8AFF',
    'nebula-300': '#A3ACFF',
    'nebula-200': '#CACFFF',
    'nebula-100': '#F2F3FF',

    'cyan-900': '#00526C',
    'cyan-800': '#00769B',
    'cyan-700': '#009BCB',
    'cyan-600': '#0DB7EB',
    'cyan-500': '#2CC8F7',
    'cyan-400': '#5ADAFF',
    'cyan-300': '#89E5FF',
    'cyan-200': '#B9EFFF',
    'cyan-100': '#E8FAFF',

    'green-900': '#005E36',
    'green-800': '#028950',
    'green-700': '#06B66C',
    'green-600': '#0DE589',
    'green-500': '#5FEB9E',
    'green-400': '#88F0B3',
    'green-300': '#AAF4C8',
    'green-200': '#C9F8DE',
    'green-100': '#E6FCF3',

    'orange-900': '#963209',
    'orange-800': '#BF470A',
    'orange-700': '#E8600A',
    'orange-600': '#F78125',
    'orange-500': '#FAA04B',
    'orange-400': '#FCBC73',
    'orange-300': '#FED59A',
    'orange-200': '#FFE9C3',
    'orange-100': '#FFF9EC',

    'red-900': '#83111E',
    'red-800': '#AB1325',
    'red-700': '#D4142A',
    'red-600': '#EE243C',
    'red-500': '#F4495D',
    'red-400': '#F86E7E',
    'red-300': '#FC95A1',
    'red-200': '#FEBDC5',
    'red-100': '#FFE6E9',

    // Recommend launch Products colors
    search: '#5468FF',
    answers: '#952AFF',
    recommend: '#FF2A6A',
  },
  // Spacing is used mainly for paddings and margins
  spacing: {
    0: 0,
    2: '2px',
    4: '4px',
    8: '8px',
    12: '12px',
    16: '16px',
    20: '20px',
    24: '24px',
    32: '32px',
    40: '40px',
    48: '48px',
    60: '60px',
    80: '80px',
    120: '120px',
    200: '200px',
  },
  // Sizes are for widths and heights mostly
  sizes: {
    0: 0,
    10: '10px',
    15: '15px',
    20: '20px',
    25: '25px',
    30: '30px',
    32: '32px',
    40: '40px',
    50: '50px',
    60: '60px',
    70: '70px',
    75: '75px',
    80: '80px',
    90: '90px',
    100: '100px',
    150: '150px',
    200: '200px',
    250: '250px',
    300: '300px',
    400: '400px',
    500: '500px',
    600: '600px',
    700: '700px',
    1000: '1000px',
    1200: '1200px',
    '10p': '10%',
    '15p': '15%',
    '20p': '20%',
    '25p': '25%',
    '30p': '30%',
    '33p': '33.333333%',
    '40p': '40%',
    '50p': '50%',
    '60p': '60%',
    '66p': '66.666666%',
    '70p': '70%',
    '75p': '75%',
    '80p': '80%',
    '90p': '90%',
    '100p': '100%',
  },
};

const modules = {
  // ROOT
  root: {
    cssVariables: {
      classes: config.colors,
    },
  },
  // BACKGROUNDS
  backgrounds: {
    background: {
      responsive: true,
    },
    backgroundAttachment: {
      responsive: true,
    },
    backgroundColor: {
      responsive: true,
      hover: true,
      classes: config.colors,
    },
    backgroundImage: {
      responsive: true,
    },
    backgroundPosition: {
      responsive: true,
    },
    backgroundRepeat: {
      responsive: true,
    },
    backgroundSize: {
      responsive: true,
    },
  },
  // BORDERS
  borders: {
    border: {
      responsive: true,
    },
    borderColor: {
      responsive: true,
      hover: true,
      classes: config.colors,
    },
    borderRadius: {
      responsive: true,
      classes: {
        0: 0,
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        20: '20px',
        '100p': '100%',
        max: '9999px',
      },
    },
    borderStyle: {
      responsive: true,
    },
    borderWidth: {
      responsive: true,
      classes: {
        0: 0,
        1: '1px',
        2: '2px',
        3: '3px',
      },
    },
  },
  // BOX-SIZING
  box: {
    boxSizing: {
      responsive: true,
    },
    display: {
      responsive: true,
    },
    margin: {
      responsive: true,
      classes: config.spacing,
    },
    overflow: {
      responsive: true,
    },
    padding: {
      responsive: true,
      classes: config.spacing,
    },
    visibility: {
      responsive: true,
    },
  },
  // COLORS
  colors: {
    color: {
      hover: true,
      classes: config.colors,
    },
    fill: {
      hover: true,
      classes: config.colors,
    },
    stroke: {
      hover: true,
      classes: config.colors,
    },
  },
  // +FLEXBOX
  flexbox: {
    alignContent: {
      responsive: true,
    },
    alignItems: {
      responsive: true,
    },
    alignSelf: {
      responsive: true,
    },
    flexDirection: {
      responsive: true,
    },
    flexGrow: {
      responsive: true,
      classes: {
        0: 0,
        1: 1,
      },
    },
    flexShrink: {
      responsive: true,
      classes: {
        0: 0,
        1: 1,
      },
    },
    flexWrap: {
      responsive: true,
    },
    flex: {
      responsive: true,
      classes: {
        1: '0 1 8.333333%',
        2: '0 1 16.666667%',
        3: '0 1 25%',
        4: '0 1 33.333333%',
        5: '0 1 41.666667%',
        6: '0 1 50%',
        7: '0 1 58.333333%',
        8: '0 1 66.666667%',
        9: '0 1 75%',
        10: '0 1 83.333333%',
        11: '0 1 91.666667%',
        12: '0 1 100%',
      },
    },
    justifyContent: {
      responsive: true,
    },
  },
  // GRIDS
  grids: {
    gridColumn: {
      responsive: true,
      classes: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        auto: 'auto',
      },
    },
    gridRow: {
      responsive: true,
      classes: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        auto: 'auto',
      },
    },
    grid: {
      responsive: true,
      classes: {
        2: 'repeat(2, 1fr)',
        3: 'repeat(3, 1fr)',
        4: 'repeat(4, 1fr)',
        5: 'repeat(5, 1fr)',
        6: 'repeat(6, 1fr)',
        12: 'repeat(12, 1fr)',
        '1-11': '1fr 11fr',
        '1-5': '2fr 10fr',
        '1-3': '3fr 9fr',
        '1-2': '4fr 8fr',
        '2-1': '8fr 4fr',
        '3-1': '9fr 3fr',
        '5-7': '5fr 7fr',
        '5-1': '10fr 2fr',
        '7-5': '7fr 5fr',
        '11-1': '11fr 1fr',
      },
    },
    gridGap: {
      responsive: true,
      classes: config.spacing,
    },
  },
  // IMAGES
  images: {
    objectFit: {
      responsive: true,
    },
    objectPosition: {
      responsive: true,
    },
  },
  // LAYOUT
  layout: {
    bottom: {
      responsive: true,
      classes: config.spacing,
    },
    clear: {
      responsive: true,
    },
    float: {
      responsive: true,
    },
    left: {
      responsive: true,
      classes: config.spacing,
    },
    position: {
      responsive: true,
    },
    right: {
      responsive: true,
      classes: config.spacing,
    },
    top: {
      responsive: true,
      classes: config.spacing,
    },
    verticalAlign: {
      responsive: true,
    },
    zIndex: {
      responsive: true,
      classes: {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        max: 100,
      },
    },
  },
  // MISC
  misc: {
    appearance: {
      responsive: true,
    },
    boxShadow: {
      responsive: true,
      hover: true,
      classes: {
        default:
          '0px 2px 4px rgba(45, 35, 66, 0.35), 0px 7px 13px -3px rgba(45, 35, 66, 0.25)',
        large: '0px 8px 32px rgba(0, 0, 0, 0.27)',
      },
    },
    cursor: {
      responsive: true,
    },
    opacity: {
      responsive: true,
      hover: true,
      classes: {
        0: 0,
        '25p': 0.25,
        '50p': 0.5,
        '75p': 0.75,
        '100p': 1,
      },
    },
    pointerEvents: {
      responsive: true,
    },
    resize: {
      responsive: true,
    },
    strokeWidth: {
      responsive: true,
      classes: {
        1: 1,
        2: 2,
        3: 3,
      },
    },
    transition: {
      responsive: true,
      classes: {
        0: '0s',
        2: '2s',
        4: '4s',
      },
    },
    userSelect: {
      responsive: true,
    },
  },
  // SIZES
  sizes: {
    height: {
      responsive: true,
      classes: config.sizes,
    },
    maxHeight: {
      responsive: true,
      classes: {
        0: 0,
        '100p': '100%',
        '100vh': '100vh',
      },
    },
    maxWidth: {
      responsive: true,
      classes: {
        '35ch': '35ch',
        '45ch': '45ch',
        '60ch': '60ch',
        '70ch': '70ch',
        '100p': '100%',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1440: '1440px',
      },
    },
    minHeight: {
      responsive: true,
      classes: {
        0: 0,
        30: '30px',
        50: '50px',
        200: '200px',
        300: '300px',
        '100p': '100%',
        '100vh': '100vh',
      },
    },
    minWidth: {
      responsive: true,
      classes: {
        0: 0,
        '100p': '100%',
        '100vw': '100vw',
      },
    },
    width: {
      responsive: true,
      classes: config.sizes,
    },
  },
  // TYPOGRAPHY
  typography: {
    fontFamily: {
      responsive: true,
      classes: {
        jetbrains: '"JetBrains Mono", Arial, monospace',
        poppins: '"Poppins", Arial, sans-serif',
        'sans-serif':
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        serif:
          'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',
        mono: '"SFMono-Regular", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
      },
    },
    fontSize: {
      responsive: true,
      classes: {
        0: '0px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        24: '24px',
        28: '28px',
        36: '36px',
        48: '48px',
        56: '56px',
      },
    },
    fontStyle: {
      responsive: true,
    },
    fontWeight: {
      responsive: true,
    },
    letterSpacing: {
      responsive: true,
      classes: {
        big: '1.5px',
      },
    },
    lineClamp: {
      responsive: true,
      classes: {
        1: 1,
        2: 2,
        3: 3,
      },
    },
    lineHeight: {
      responsive: true,
      classes: {
        small: 1,
        big: 1.33,
        bigger: 1.78,
      },
    },
    listStyle: {
      responsive: true,
    },
    textAlign: {
      responsive: true,
    },
    textDecoration: {
      responsive: true,
      hover: true,
    },
    textOverflow: {
      responsive: true,
    },
    textTransform: {
      responsive: true,
    },
    whiteSpace: {
      responsive: true,
    },
    wordBreak: {
      responsive: true,
    },
  },
};

export { config, modules };
