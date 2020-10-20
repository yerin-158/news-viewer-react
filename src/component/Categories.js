import React, { useCallback, useState } from 'react';
import '../css/Categories.scss';
import classNames from 'classnames';

const categoriesSample = [
    {
        name: 'all',
        text: '전체보기',
        selected: true
    },
    {
        name: 'business',
        text: '비즈니스',
        selected: false
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트',
        selected: false
    },
    {
        name: 'health',
        text: '건강',
        selected: false
    },
    {
        name: 'science',
        text: '과학',
        selected: false
    },
    {
        name: 'sports',
        text: '스포츠',
        selected: false
    },
]


const Categories = props => {
    const [categories, setCategories] = useState(categoriesSample);
    const {onSelect} = props;

    const onClick = useCallback(selectedIndex => {
        setCategories(categories =>
            categories.map((category, index) =>
                index === selectedIndex ? {...category, selected:true} : {...category, selected:false}
            )    
        );
    },[]);


    return (
        <div className="Categories">
            {categories.map((category, index) =>  
                <div className={classNames("Category", {selected: category.selected} )}
                    onClick={()=>{
                        onSelect(category.name);
                        onClick(index);
                    }}
                    key={category.name}>{category.text}</div>    
            )}
        </div>
    );
};

export default Categories;