/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { LabelText, Text } from '@algolia/ui-library';
import {
  connectHitInsights,
  connectHits,
  connectInfiniteHits,
  Highlight,
  Snippet,
} from 'react-instantsearch-dom';

import * as routes from '../../../../constants/routes';
import { isBrowser } from '../../../../helpers';
import ShowMore from '../show-more';

interface LibraryHitProps {
  hit: {
    title: string;
    slug: string;
    shortDescription: string;
    useCase: string;
  };
  insights: (event: string, options: any) => void;
}

const LibraryHit: FC<LibraryHitProps> = ({ hit, insights }) => (
  <li>
    <a
      onClick={() =>
        insights('clickedObjectIDsAfterSearch', {
          eventName: 'Clicked library result',
        })
      }
      className="td-none d-block"
      href={`${routes.SEARCH_INSPIRATION_LIBRARY}${hit.slug}`}
    >
      <Text className="m-0 lh-big" small>
        <span className="fw-bold">
          <Highlight hit={hit} attribute="title" />
        </span>
        <LabelText className="op-75p ml-8 bdr-4 bgc-grey-200 p-4 lh-small d-inline-flex">
          <span className="fsz-10">{hit.useCase}</span>
        </LabelText>
      </Text>
      <Text className="mt-8 mb-0" small>
        <Snippet hit={hit} attribute="shortDescription" />
      </Text>
    </a>
  </li>
);

const ConnectedLibraryHit = isBrowser
  ? connectHitInsights((window as any).aa)(LibraryHit)
  : () => null;

export const CustomLibraryInfiniteHits = connectInfiniteHits(
  ({ hits, hasMore, refineNext }) => (
    <>
      <ul className="m-0 pl-20 color-nebula-500 lh-big d-grid ghgap-16 fsz-12 md:g-2 md:gvgap-80 lg:fsz-14">
        {hits.map((hit, index) => (
          <ConnectedLibraryHit key={`${hit.h1}-${index}`} hit={hit} />
        ))}
      </ul>
      <ShowMore hasMore={hasMore} refine={refineNext} />
    </>
  )
);

export const CustomLibraryHits = connectHits(({ hits }) => (
  <>
    <ul className="m-0 pl-20 color-nebula-500 lh-big d-grid ghgap-16 fsz-12 md:g-2 md:gvgap-80 lg:fsz-14">
      {hits.map((hit, index) => (
        <ConnectedLibraryHit key={`${hit.h1}-${index}`} hit={hit} />
      ))}
    </ul>
  </>
));
