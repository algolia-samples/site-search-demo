/** @jsxImportSource @emotion/react */
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Heading2, Text } from '@algolia/ui-library';
import { Configure, Index, InstantSearch } from 'react-instantsearch-dom';
import { X } from 'react-feather';

import TextLink from './components/text-link';
import Link from './components/link';

import styles from './css/pages/search.css';

import * as externalRoutes from './constants/external-routes';
import * as routes from './constants/routes';

import EmptyLayout from './layouts/empty-layout';

import {
  createURL,
  getUrlParameter,
  isBrowser,
  searchStateToUrl,
  urlToSearchState,
} from './helpers';

import Labels from './components/pages/search/labels';
import SearchBox from './components/pages/search/search-box';
import StateResults from './components/pages/search/state-results';
import QuerySuggestions from './components/pages/search/query-suggestions';
import CustomHits, {
  CustomBlogInfiniteHits,
  CustomBlogHits,
  CustomDocsInfiniteHits,
  CustomDocsHits,
  CustomLibraryInfiniteHits,
  CustomLibraryHits,
  CustomResourcesInfiniteHits,
  CustomResourcesHits,
  CustomWebsiteInfiniteHits,
  CustomWebsiteHits,
} from './components/pages/search/custom-hits';
import { SearchState } from 'react-instantsearch-core';

const previousPage = routes.HOME;

const indexType = 'PROD_';
const siteIndex = `${indexType}algolia_com_site`;

const searchClient = algoliasearch(
  '1QDAWL72TQ',
  '47700f55d95d23f5a57744b9a027ea83'
);

const SearchPage: FC = () => {
  const searchBox = useRef<HTMLElement>();
  const writeTimer = useRef<ReturnType<typeof setTimeout>>();
  const [searchState, setSearchState] = useState<SearchState>(
    isBrowser ? (urlToSearchState(window.location) as any) : ''
  );
  const [tab, setTab] = useState<string>('');

  useEffect(() => {
    if (!isBrowser) return;
    window.addEventListener('popstate', (e) => {
      setSearchState(urlToSearchState(window.location));
    });
  }, []);

  const onSearchStateChange = (updatedSearchState: SearchState) => {
    if (writeTimer.current) clearTimeout(writeTimer.current);

    if (isBrowser) {
      writeTimer.current = setTimeout(
        () =>
          window.history.pushState(
            {},
            '',
            searchStateToUrl(window.location, updatedSearchState)
          ),
        400
      );
    }

    setSearchState(updatedSearchState);
  };

  useEffect(() => {
    if (writeTimer.current) clearTimeout(writeTimer.current);
  }, [tab]);

  useEffect(() => {
    if (isBrowser) {
      const existingTab = (getUrlParameter(window.location.search, 'tab') ||
        'all') as string;
      if (existingTab !== tab) {
        setTab(existingTab.toLowerCase());
      }

      searchBox.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <EmptyLayout>
        <main css={styles.root} className="p-20 bgc-white mih-100vh">
          <div className="pb-80 pt-0 maw-1200 m-auto sm:pt-24 sm:pb-24 lg:pt-48 lg:pb-48">
            <header className="d-none sm:mb-24 sm:d-flex sm:jc-between sm:ai-center lg:mb-48">
              <Heading2 tag="h1" className="m-0">
                How can we help you?
              </Heading2>
              <Link
                className="d-flex fxd-column jc-center ai-center td-none lh-small color-grey-400"
                to={previousPage}
              >
                <X className="w-25 h-25" strokeWidth={1.5} />
                <Text small tag="div">
                  esc
                </Text>
              </Link>
            </header>
            <InstantSearch
              searchClient={searchClient}
              indexName={siteIndex}
              searchState={searchState}
              onSearchStateChange={onSearchStateChange}
              createURL={createURL}
            >
              <Labels tab={tab} setTab={setTab} />
              <SearchBox innerRef={searchBox} />
              <QuerySuggestions />
              <Index indexName={siteIndex}>
                <StateResults name="Website" tab={tab}>
                  <CustomHits
                    infiniteHits={<CustomWebsiteInfiniteHits />}
                    hits={<CustomWebsiteHits />}
                  />
                </StateResults>
                <Configure
                  clickAnalytics
                  hitsPerPage={tab === 'website' ? 16 : 6}
                  attributesToSnippet={['metaDescription:27']}
                />
              </Index>
              <Index indexName={`${indexType}algolia_com_site_resources-ubf`}>
                <StateResults
                  name="Resources"
                  viewMore={externalRoutes.RESOURCES}
                  tab={tab}
                >
                  <CustomHits
                    infiniteHits={<CustomResourcesInfiniteHits />}
                    hits={<CustomResourcesHits />}
                  />
                </StateResults>
                <Configure
                  clickAnalytics
                  hitsPerPage={tab === 'resources' ? 20 : 10}
                  snippetEllipsisText="…"
                />
              </Index>
              <Index indexName={`${indexType}algolia_blog`}>
                <StateResults
                  name="Blog"
                  viewMore={externalRoutes.BLOG}
                  tab={tab}
                >
                  <CustomHits
                    infiniteHits={<CustomBlogInfiniteHits />}
                    hits={<CustomBlogHits />}
                  />
                </StateResults>
                <Configure
                  clickAnalytics
                  hitsPerPage={tab === 'blog' ? 12 : 4}
                  attributesToSnippet={['content:20']}
                  snippetEllipsisText="…"
                />
              </Index>
              <Index indexName={`${indexType}algolia_com_doc`}>
                <StateResults
                  name="Docs"
                  viewMore={externalRoutes.DOC}
                  tab={tab}
                >
                  <CustomHits
                    infiniteHits={<CustomDocsInfiniteHits />}
                    hits={<CustomDocsHits />}
                  />
                </StateResults>
                <Configure
                  clickAnalytics
                  hitsPerPage={tab === 'docs' ? 20 : 10}
                  attributesToSnippet={['content:27']}
                  attributesToHighlight={['h1', 'variation.flavor']}
                  snippetEllipsisText="…"
                />
              </Index>
              <Index indexName={`${indexType}algolia_com-inspiration-library`}>
                <StateResults
                  name="Inspiration Library"
                  viewMore={routes.SEARCH_INSPIRATION_LIBRARY}
                  tab={tab}
                >
                  <CustomHits
                    infiniteHits={<CustomLibraryInfiniteHits />}
                    hits={<CustomLibraryHits />}
                  />
                </StateResults>
                <Configure
                  clickAnalytics
                  hitsPerPage={tab === 'inspiration library' ? 20 : 10}
                  attributesToSnippet={['shortDescription:27']}
                  snippetEllipsisText="…"
                />
              </Index>
            </InstantSearch>
          </div>
        </main>
        <div
          css={styles.closeButtonContainer}
          className="pb-16 pos-fixed bot-0 left-0 right-0 h-100 d-flex ai-end jc-center sm:d-none"
        >
          <TextLink
            tag={Link}
            className="bxs-default d-flex w-50 h-50 bgc-grey-700 bdr-max"
            to={previousPage}
            aria-label="Close search"
          >
            <X className="m-auto color-white" aria-hidden />
          </TextLink>
        </div>
      </EmptyLayout>
    </>
  );
};

export default SearchPage;
