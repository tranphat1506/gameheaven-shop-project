import clsx from 'clsx';
import { memo } from 'react';

import styles from './Popper.module.scss';
const SearchSuggestionPopper = ({ searchValue, suggestList }) => {
    console.log('s s P');
    return (
        <div
            className={clsx(styles.searchSuggestionPopper)}
            style={{ visibility: suggestList ? 'visible' : 'hidden' }}
        >
            {searchValue}
        </div>
    );
};

export default memo(SearchSuggestionPopper);
