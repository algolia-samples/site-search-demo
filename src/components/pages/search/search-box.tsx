import type { FC } from 'react';
import { Search } from 'react-feather';
import { connectSearchBox, VoiceSearch } from 'react-instantsearch-dom';

import { isSpeechSupported } from '../../../helpers';
import styles from '../../../css/pages/search.css';
import Image from '../../image';

interface SearchBoxProps {
  currentRefinement: number;
  refine: (event: string) => void;
  [string: string]: any;
}

const SearchBox: FC<SearchBoxProps> = ({
  currentRefinement,
  refine,
  innerRef,
}) => (
  <div className="h-60 ph-16 bdr-4 d-flex ai-center bgc-grey-100 lg:ph-32 lg:h-80">
    <button
      className="p-0 app-none bdw-0 bgc-transparent cursor-pointer"
      aria-label="Start searching"
      onClick={() => innerRef.current.focus()}
    >
      <Search
        className="fxs-0 w-20 h-20 color-nebula-500 lg:w-30 lg:h-30"
        strokeWidth={1.5}
      />
    </button>
    <input
      ref={innerRef}
      css={styles.searchBox}
      className="ph-16 bgc-transparent fxg-1 color-grey-700 ff-poppins app-none bdw-0 fsz-16 lg:fsz-24"
      placeholder="Learn about search-as-a-service…"
      type="text"
      value={currentRefinement}
      onChange={(event) => {
        refine(event.target.value);
      }}
    />
    {isSpeechSupported() && (
      <VoiceSearch searchAsYouSpeak statusComponent={() => null} />
    )}
    <Image
      className="fxs-0 w-20 h-20 d-none xs:d-block sm:d-none"
      src="shared/algolia_logo/algolia-blue-mark.svg"
      alt="Algolia Logo"
    />
    <Image
      className="fxs-0 d-none sm:d-block"
      src="search/search-by-algolia.svg"
      alt="Search by Algolia"
    />
  </div>
);

export default connectSearchBox(SearchBox);
