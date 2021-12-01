/** @jsxImportSource @emotion/react */
import type { ReactElement } from 'react';

import * as breakpoints from '../../../../constants/breakpoints';
import { mediaQuery } from '../../../../helpers';

interface CustomHitsProps {
  hits: ReactElement;
  infiniteHits: ReactElement;
}

const CustomHits = ({ hits, infiniteHits }: CustomHitsProps) => {
  if (mediaQuery(breakpoints.SM)) {
    return hits;
  }

  return infiniteHits;
};

export default CustomHits;

export { CustomBlogHits, CustomBlogInfiniteHits } from './blog';
export { CustomDocsHits, CustomDocsInfiniteHits } from './docs';
export { CustomLibraryHits, CustomLibraryInfiniteHits } from './library';
export { CustomResourcesHits, CustomResourcesInfiniteHits } from './resources';
export { CustomWebsiteHits, CustomWebsiteInfiniteHits } from './website';
