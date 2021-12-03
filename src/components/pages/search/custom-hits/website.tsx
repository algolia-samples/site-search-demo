/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { Fragment } from 'react';
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
import { Hit } from 'react-instantsearch-core';
import { HOME } from '../../../../constants/routes';

interface WebsiteHitProps {
  hit: Hit;
  insights: (event: string, options: any) => void;
}

const WebsiteHit: FC<WebsiteHitProps> = ({ hit, insights }) => (
  <li>
    <TextLink
      onClick={() => {
        insights('clickedObjectIDsAfterSearch', {
          eventName: 'Clicked website result',
          queryID: hit.__queryID,
          objectIDs: [hit.objectID],
        });
        setSessionStorageItem('queryIndex', hit.__indexName);
        setSessionStorageItem('queryID', hit.__queryID);
        setSessionStorageItem('queryObjectID', hit.objectID);
      }}
      className="fw-bold d-block"
      to={new URL(hit.path, HOME).toString()}
    >
      <Text className="m-0">
        <span className="d-block fw-bold lh-big fsz-16">
          <Highlight hit={hit} attribute="title.en" />
        </span>
      </Text>
      <Text className="mt-4 mb-8 d-flex ai-center" small>
        {hit.path &&
          hit.path
            .split('/')
            .filter((item) => item !== '')
            .map((item, pathIndex) => (
              <Fragment key={item}>
                {pathIndex > 0 && (
                  <ChevronRight
                    size={13}
                    css={styles.topMinOne}
                    className="h-auto pos-relative mh-4"
                    strokeWidth={1}
                  />
                )}
                <span className="fsz-12">{item}</span>
              </Fragment>
            ))}
      </Text>
      <Text className="m-0" small>
        <Snippet hit={hit} attribute="metaDescription" />
      </Text>
    </TextLink>
  </li>
);

const ConnectedWebsiteHit = isBrowser
  ? connectHitInsights((window as any).aa)(WebsiteHit)
  : () => null;

export const CustomWebsiteInfiniteHits = connectInfiniteHits(
  ({ hits, hasMore, refineNext }) => (
    <>
      <ul className="m-0 pl-20 color-nebula-500 d-grid ghgap-16 fsz-16 lh-big md:g-2 md:gvgap-80">
        {hits.map((hit, index) => (
          <ConnectedWebsiteHit key={index} hit={hit} />
        ))}
        <ShowMore hasMore={hasMore} refine={refineNext} />
      </ul>
    </>
  )
);

export const CustomWebsiteHits = connectHits(({ hits }) => (
  <>
    <ul className="m-0 pl-20 color-nebula-500 d-grid ghgap-16 fsz-16 lh-big md:g-2 md:gvgap-80">
      {hits.map((hit, index) => (
        <ConnectedWebsiteHit key={index} hit={hit} />
      ))}
    </ul>
  </>
));
