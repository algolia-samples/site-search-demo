import type { MouseEvent as ReactMouseEvent, FC } from 'react';
import { ChevronRight } from 'react-feather';
import {
  connectHitInsights,
  connectHits,
  connectInfiniteHits,
  Highlight,
  Snippet,
} from 'react-instantsearch-dom';
import { Text } from '@algolia/ui-library';

import TextLink from '../../../../components/text-link';
import styles from '../../../../css/pages/search.css';
import { isBrowser, setSessionStorageItem } from '../../../../helpers';
import ShowMore from '../show-more';

interface ResourcesHitProps {
  hit: {
    url: string;
    __queryID: string;
    objectID: string;
    selected_stream: string;
  };
  insights: (event: string, options: any) => void;
  indexName: string;
}

const ResourcesHit: FC<ResourcesHitProps> = ({ hit, insights, indexName }) => (
  <li>
    <TextLink
      onClick={() => {
        insights('clickedObjectIDsAfterSearch', {
          eventName: 'Clicked resources result',
          queryID: hit.__queryID,
          objectIDs: [hit.objectID],
        });
        setSessionStorageItem('queryIndex', indexName);
        setSessionStorageItem('queryID', hit.__queryID);
        setSessionStorageItem('queryObjectID', hit.objectID);
      }}
      className="fw-bold d-block"
      to={hit.url}
    >
      <Text className="m-0">
        <span className="d-block fw-bold lh-big fsz-16">
          <Highlight hit={hit} attribute="title" />
        </span>
      </Text>
      <Text className="mt-4 mb-8 d-flex ai-center" small>
        <span className="fsz-12">resources</span>
        {hit.selected_stream && (
          <>
            <ChevronRight
              size={13}
              css={styles.topMinOne}
              className="h-auto pos-relative mh-4"
              strokeWidth={1}
            />
            <span className="fsz-12">{hit.selected_stream.toLowerCase()}</span>
          </>
        )}
      </Text>
      <Text className="m-0" small>
        <Snippet hit={hit} attribute="description" />
      </Text>
    </TextLink>
  </li>
);

const ConnectedResourcesHit = isBrowser
  ? connectHitInsights(window.aa)(ResourcesHit)
  : null;

interface ResourcesHitsProps {
  hasMore: boolean;
  hits: Array<{
    h1: string;
  }>;
  refine: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ResourcesHits: FC<ResourcesHitsProps> = ({ hits, hasMore, refine }) => (
  <>
    <ul className="m-0 pl-20 color-nebula-500 lh-big d-grid ghgap-16 fsz-12 md:g-2 md:gvgap-80 lg:fsz-14">
      {hits.map((hit, index) => (
        <ConnectedResourcesHit key={`${hit.h1}-${index}`} hit={hit} />
      ))}
    </ul>
    <ShowMore hasMore={hasMore} refine={refine} />
  </>
);

export const CustomResourcesInfiniteHits = connectInfiniteHits(ResourcesHits);

export const CustomResourcesHits = connectHits(ResourcesHits);
