import type { FC } from 'react';
import { useState } from 'react';
import cx from 'classnames';
import { Dropdown, DropdownItem, LabelText } from '@algolia/ui-library';

import { capitalize, searchStateToUrl, urlToSearchState } from '../../../helpers';

const indexType = 'PROD_';

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
}

const Labels: FC<LabelsProps> = ({ tab }) => {
  // const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [debouncedSetState, setDebouncedSetState] = useState(null);

  const onLabelChange = (tabItem: string) => {
   /* if (router.query.tab) {
      const newQuery: {
        tab: string;
        indices?: { [key: string]: { page: number } };
      } = {
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
            newQuery.indices[`${indexType}algolia_com${category}`].page = 1;
          }
          return false;
        }
      );
      router.push(searchStateToUrl(router, newQuery));
    } else {
      router.push(`${router.pathname}?tab=${tabItem}`);
    } */
  };

  const timeoutLabelChange = (tabItem: string) => {
    clearTimeout(debouncedSetState as any);

    setIsLoading(true);

    setDebouncedSetState(
      setTimeout(() => {
        onLabelChange(tabItem);
        setIsLoading(false);
      }, 500) as any
    );
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
              disabled={isLoading}
              onClick={() => timeoutLabelChange(tabItem)}
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
};

export default Labels;
