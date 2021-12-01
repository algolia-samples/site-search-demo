/** @jsxImportSource @emotion/react */
import cx from 'classnames';
import { Dropdown, DropdownItem, LabelText } from '@algolia/ui-library';

import {
  capitalize,
  getUrlParameter,
  isBrowser,
  searchStateToUrl,
  urlToSearchState,
} from '../../../helpers';
import { SearchState } from 'react-instantsearch-core';

const labels = [
  'all',
  'website',
  'resources',
  'blog',
  'docs',
  'inspiration library',
];

interface LabelsProps {
  tab: string;
  setTab: (tab: string) => void;
}

const indexType = 'PROD_';

function Labels({ tab, setTab }: LabelsProps) {
  const onLabelChange = (tabItem: string) => {
    setTab(tabItem);
    if (!isBrowser) return;
    const existingTab = getUrlParameter(window.location.search, 'tab');
    if (existingTab) {
      const newQuery: SearchState = {
        ...urlToSearchState(window.location),
        tab: tabItem,
      };
      // Reset all pages numbers to 1 to avoid blank results
      ['_site', '_blog', '_doc', '_resources', '-inspiration-library'].map(
        (category) => {
          if (
            newQuery.indices &&
            newQuery.indices[`${indexType}algolia_com${category}`]
          ) {
            (
              newQuery.indices[`${indexType}algolia_com${category}`] as any
            ).page = 1;
          }
          return false;
        }
      );
      window.history.pushState(
        {},
        '',
        searchStateToUrl(window.location, newQuery)
      );
    } else {
      window.history.pushState({}, '', `?tab=${tabItem}`);
    }
  };

  return (
    <>
      {/* Desktop  */}
      <ul className="d-none md:m-0 md:p-0 md:lis-none md:d-flex md:fxw-wrap md:jc-start md:pl-32">
        {labels.map((tabItem, index) => (
          <li className={cx(index < 5 && 'mr-32')} key={tabItem}>
            <LabelText
              className={cx(
                'm-0 d-block cursor-pointer app-none bgc-transparent bdbw-3 bdtw-0 bdlw-0 bdrw-0 pt-0 ph-0 pb-16 bds-solid',
                tab === tabItem ? 'bdc-nebula-500' : 'bdc-transparent'
              )}
              tag="button"
              color="grey"
              onClick={() => onLabelChange(tabItem)}
            >
              {tabItem}
            </LabelText>
          </li>
        ))}
      </ul>

      {/* Mobile  */}
      <Dropdown label={capitalize(tab)} className="mb-16 md:d-none" count={1}>
        {labels.map((tabItem) => (
          <DropdownItem
            key={tabItem}
            label={tabItem}
            value={tabItem}
            onChange={() => onLabelChange(tabItem)}
            isRefined={tabItem === tab}
          />
        ))}
      </Dropdown>
    </>
  );
}

export default Labels;
