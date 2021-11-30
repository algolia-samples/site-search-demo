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

const previousPage = routes.HOME;

const indexType = 'PROD_';
const siteIndex = `${indexType}algolia_com_site`;

const SearchPage: FC = () => {
  const searchBox = useRef<HTMLElement>();

  // const router = useRouter();

  const [debouncedSetState, setDebouncedSetState] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  // const [lastLocation, setLastLocation] = useState<any>(router);
  const [searchState, setSearchState] = useState<Record<string, any>>(
    isBrowser ? (urlToSearchState(window.location) as any) : ''
  );
  const [tab, setTab] = useState<string>('');

  const [{ searchClient }] = useState<{
    searchClient: any;
  }>(() => {
    const algoliaClient = algoliasearch(
      '1QDAWL72TQ',
      '47700f55d95d23f5a57744b9a027ea83'
    );

    return {
      searchClient: algoliaClient,
    };
  });

  // useEffect(() => {
  //   if (router.asPath !== lastLocation.asPath) {
  //     setSearchState(urlToSearchState(window.location));
  //     setLastLocation(router);
  //   }
  // }, [router, lastLocation.asPath]);

  const onSearchStateChange = (updatedSearchState: { query: string }) => {
    if (debouncedSetState) clearTimeout(debouncedSetState);

    setDebouncedSetState();
    // setTimeout(
    //   () => router.push(searchStateToUrl(router, updatedSearchState)),
    //   400
    // )

    setSearchState(updatedSearchState);
  };

  useEffect(() => {
    if (isBrowser) {
      const tmpTab = (getUrlParameter(window.location.search, 'tab') ||
        'all') as string;
      if (tmpTab !== tab) {
        setTab(tmpTab.toLowerCase());
      }

      (searchBox.current as HTMLElement)?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const closeSearch = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && router) {
        router.push(previousPage);
      }
    };

    window.addEventListener('keydown', closeSearch);

    return () => {
      window.removeEventListener('keydown', closeSearch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <EmptyLayout
        canonical={routes.SEARCH}
        title="Search"
        metaDescription="search"
        url={routes.SEARCH}
        hasSearchExperience
      >
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
              <Labels tab={tab} />
              <SearchBox innerRef={searchBox} />
              <QuerySuggestions />
              <Index indexName={siteIndex}>
                <StateResults name="Website" tab={tab}>
                  <CustomHits
                    infiniteHits={
                      <CustomWebsiteInfiniteHits indexName={siteIndex} />
                    }
                    hits={<CustomWebsiteHits indexName={siteIndex} />}
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
