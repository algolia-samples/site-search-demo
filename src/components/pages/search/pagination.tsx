/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import cx from 'classnames';
import { LightCta, Text } from '@algolia/ui-library';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { connectPagination, connectStats } from 'react-instantsearch-dom';

import styles from '../../../css/pages/search.css';

interface StatsProps {
  nbHits: number;
}

const Stats: FC<StatsProps> = ({ nbHits }) => (
  <Text small>
    {nbHits} {nbHits === 1 ? 'result' : 'results'}
  </Text>
);

const ConnectedStats = connectStats(Stats);

interface PaginationProps {
  currentRefinement: number;
  nbPages: number;
  refine: (e: number) => void;
  name: string;
  viewMore: string;
}

const Pagination: FC<PaginationProps> = ({
  currentRefinement,
  nbPages,
  refine,
  name,
  viewMore,
}) => {
  if (nbPages <= 0) {
    return null;
  }

  return (
    <div className="d-flex ai-center">
      <ConnectedStats />
      <nav className="d-none sm:d-block">
        <button
          onClick={() => {
            refine(currentRefinement - 1);
          }}
          disabled={currentRefinement === 1}
          css={[styles.button, styles.buttonLeft]}
          className={cx(
            'w-25 h-25 p-0 ml-8 app-none bdw-1 bdc-grey-200 bds-solid',
            currentRefinement === 1 ? 'op-50p' : 'cursor-pointer'
          )}
          aria-label="Previous results"
        >
          <ArrowLeft
            css={styles.buttonIcon}
            className="color-grey-700"
            strokeWidth={1}
          />
        </button>
        <button
          onClick={() => {
            refine(currentRefinement + 1);
          }}
          disabled={currentRefinement === nbPages}
          css={[styles.button, styles.buttonRight]}
          className={cx(
            'w-25 h-25 p-0 mr-8 app-none bdw-1 bdc-grey-200 bds-solid pos-relative',
            currentRefinement === nbPages ? 'op-50p' : 'cursor-pointer'
          )}
          aria-label="Next results"
        >
          <ArrowRight
            css={styles.buttonIcon}
            className="color-grey-700"
            strokeWidth={1}
          />
        </button>
      </nav>
      <Text className="m-0 d-none sm:d-block" small>
        {currentRefinement} - {nbPages}
      </Text>
      {viewMore && (
        <span
          css={styles.topMinOne}
          className="pos-relative d-none ml-16 sm:d-block"
        >
          <LightCta href={viewMore}>View {name}</LightCta>
        </span>
      )}
    </div>
  );
};

export default connectPagination(Pagination);
