import React, { useCallback } from 'react';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = props => {
    const {match} = props;
    const selectedCategory = match.params.category || 'all'; // match.params.category == false이면 'all' 반환함
    
    return (
        <>
            <Categories selectedCategory={selectedCategory} />
            <NewsList selectedCategory={selectedCategory} />
        </>
    );
};

export default NewsPage;