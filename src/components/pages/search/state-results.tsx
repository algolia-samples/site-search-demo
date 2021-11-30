import type { FC } from 'react';
import cx from 'classnames';
import { Heading3, Text } from '@algolia/ui-library';
import { connectStateResults } from 'react-instantsearch-dom';

import Pagination from './pagination';

interface StateResultsProps {
  name: string;
  tab: string;
  searchResults: {
    nbHits: number;
    userData: UserDataType[];
  };
  viewMore: string;
}

const StateResults: FC<StateResultsProps> = ({
  children,
  searchResults,
  tab,
  name,
  viewMore,
}) => {
  if (!searchResults) {
    return null;
  }
  return (
    <section
      className={cx(
        tab === 'all' || tab === name.toLowerCase() ? 'd-block' : 'd-none'
      )}
    >
      <header className="mt-32 mb-16 d-flex ai-center jc-between lg:mt-48 lg:mb-24">
        <Heading3 className="mv-0">{name}</Heading3>
        <Pagination viewMore={viewMore} name={name} />
      </header>
      {searchResults.nbHits !== 0 && children}
      {searchResults.nbHits === 0 && !searchResults.userData && (
        <Text className="m-0" small>
          There are no results for this query.
        </Text>
      )}
    </section>
  );
};

export default connectStateResults(StateResults);
