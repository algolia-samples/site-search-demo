/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import cx from 'classnames';
import { connectSearchBox } from 'react-instantsearch-dom';

import querySuggestions from '../../../data/search-query-suggestions';
import styles from '../../../css/pages/search.css';

interface QuerySuggestionsProps {
  refine: (event: string) => void;
}

const QuerySuggestions: FC<QuerySuggestionsProps> = ({ refine }) => (
  <ul className="mt-16 mb-0 p-0 lis-none d-none fxw-nowrap md:d-flex">
    {querySuggestions.map((suggestion, index) => (
      <li className={cx('fxg-1', index > 0 && 'ml-16')} key={suggestion}>
        <button
          onClick={() => refine(suggestion)}
          css={styles.querySuggestions}
          className="cursor-pointer color-grey-500 bdr-4 d-block w-100p h-100p p-8 fsz-12 app-none bdw-0 bgc-grey-100 hover:bgc-asteroid"
        >
          {suggestion}
        </button>
      </li>
    ))}
  </ul>
);

export default connectSearchBox(QuerySuggestions);
