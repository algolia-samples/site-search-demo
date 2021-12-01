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

import { isBrowser } from '../../../../helpers';
import ShowMore from '../show-more';

interface DocsHitProps {
  hit: {
    breadcrumb: [];
    path: string;
    variation: {
      flavor: string;
    };
  };
  insights: (event: string, options: any) => void;
}

const DocsHit: FC<DocsHitProps> = ({ hit, insights }) => (
  <li>
    <a
      onClick={() =>
        insights('clickedObjectIDsAfterSearch', {
          eventName: 'Clicked docs result',
        })
      }
      className="td-none d-block"
      href={hit.path}
    >
      <Text className="m-0 lh-big" small>
        <span className="fw-bold">
          <Highlight hit={hit} attribute="h1" />
          {hit.variation && hit.variation.flavor && (
            <>
              {' '}
              | <Highlight hit={hit} attribute="variation.flavor" />
            </>
          )}
        </span>
        {hit.breadcrumb &&
          hit.breadcrumb.slice(0, -1).map((item: string) => (
            <LabelText
              key={item}
              className="op-75p ml-8 bdr-4 bgc-grey-200 p-4 lh-small d-inline-flex"
            >
              <span className="fsz-10">{item}</span>
            </LabelText>
          ))}
      </Text>
      <Text className="mt-8 mb-0" small>
        <Snippet hit={hit} attribute="content" />
      </Text>
    </a>
  </li>
);

const ConnectedDocHit = isBrowser
  ? connectHitInsights((window as any).aa)(DocsHit)
  : () => null;


export const CustomDocsInfiniteHits = connectInfiniteHits(
  ({ hits, hasMore, refineNext }) => (
    <>
      <ul className="m-0 pl-20 color-nebula-500 lh-big d-grid ghgap-16 fsz-12 md:g-2 md:gvgap-80 lg:fsz-14">
        {hits.map((hit, index) => (
          <ConnectedDocHit key={`${hit.h1}-${index}`} hit={hit} />
        ))}
      </ul>
      <ShowMore hasMore={hasMore} refine={refineNext} />
    </>
  )
);

export const CustomDocsHits = connectHits(({ hits }) => (
  <>
    <ul className="m-0 pl-20 color-nebula-500 lh-big d-grid ghgap-16 fsz-12 md:g-2 md:gvgap-80 lg:fsz-14">
      {hits.map((hit, index) => (
        <ConnectedDocHit key={`${hit.h1}-${index}`} hit={hit} />
      ))}
    </ul>
  </>
));
