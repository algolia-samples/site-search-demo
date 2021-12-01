/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { Text } from '@algolia/ui-library';
import cx from 'classnames';
import {
  connectHitInsights,
  connectHits,
  connectInfiniteHits,
  Highlight,
  Snippet,
} from 'react-instantsearch-dom';

import Image from '../../../../components/image';
import TextLink from '../../../../components/text-link';

import * as externalRoutes from '../../../../constants/external-routes';
import styles from '../../../../css/pages/search.css';
import { isBrowser } from '../../../../helpers';
import ShowMore from '../show-more';

interface BlogHitProps {
  hit: {
    featured_media: string;
    slug: string;
    title: string;
    coauthors: Array<{
      avatar_url: string;
      job_title: string;
      nickname: string;
    }>;
  };
  insights: (event: string, options: any) => void;
}

const BlogHit: FC<BlogHitProps> = ({ hit, insights }) => (
  <li key={hit.slug}>
    <TextLink
      onClick={() =>
        insights('clickedObjectIDsAfterSearch', {
          eventName: 'Clicked blog result',
        })
      }
      className="h-100p d-flex fxd-column jc-between"
      to={`${externalRoutes.BLOG}${hit.slug}/`}
    >
      <div>
        {hit.featured_media && (
          <Image
            css={styles.imgHeight}
            className="bdw-1 bdc-grey-100 bds-solid w-100p bdr-6 obf-cover bgc-grey-100"
            src={hit.featured_media}
            alt={hit.title}
          />
        )}
        <Text className="mt-16 mb-0">
          <span className="d-block lh-big fw-bold">
            <Highlight hit={hit} attribute="title" />
          </span>
        </Text>
        <Text className="mt-8 mb-0 wb-break" small>
          <Snippet attribute="content" hit={hit} />
        </Text>
      </div>
      <div className="mt-24 d-flex fxd-column ai-start">
        {hit.coauthors.map((author, index) => (
          <div
            className={cx('d-flex ai-center', index > 0 && 'mt-8')}
            key={`${author.nickname}-${hit.slug}`}
          >
            {author.avatar_url && (
              <Image
                className="bdr-max w-32 h-32 mr-8"
                src={author.avatar_url}
                alt={author.nickname}
              />
            )}
            <Text className="mv-0" small>
              <Highlight hit={hit} attribute={`coauthors[${index}].nickname`} />
              {author.job_title !== '' && (
                <>
                  <br />
                  <span className="color-grey-400 fsz-12">
                    <Highlight
                      hit={hit}
                      attribute={`coauthors[${index}].job_title`}
                    />
                  </span>
                </>
              )}
            </Text>
          </div>
        ))}
      </div>
    </TextLink>
  </li>
);

const ConnectedBlogHit = isBrowser
  ? connectHitInsights((window as any).aa)(BlogHit)
  : () => null;

export const CustomBlogInfiniteHits = connectInfiniteHits(
  ({ hits, hasMore, refineNext }) => (
    <>
      <ul className="d-grid gvgap-20 ghgap-48 m-0 p-0 lis-none xs:g-2 sm:g-4">
        {hits.map((hit) => (
          <ConnectedBlogHit key={`${hit.slug}`} hit={hit} />
        ))}
      </ul>
      <ShowMore hasMore={hasMore} refine={refineNext} />
    </>
  )
);

export const CustomBlogHits = connectHits(({ hits }) => (
  <>
    <ul className="d-grid gvgap-20 ghgap-48 m-0 p-0 lis-none xs:g-2 sm:g-4">
      {hits.map((hit) => (
        <ConnectedBlogHit key={`${hit.slug}`} hit={hit} />
      ))}
    </ul>
  </>
));
