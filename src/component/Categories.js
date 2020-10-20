import React, { useCallback, useEffect, useState } from 'react';
import '../css/Categories.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const categoriesSample = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
]


const Categories = props => {
    const [categories, setCategories] = useState(categoriesSample);

    return (
        <div className="Categories">
            {categories.map(category =>  
                <NavLink 
                    className="Category"
                    key={category.name}
                    exact={category.name === 'all'}
                    to={category.name === 'all' ? '/' : `/${category.name}`}>
                {category.text}    
                </NavLink>    
            )}
        </div>
    );
};

export default Categories;