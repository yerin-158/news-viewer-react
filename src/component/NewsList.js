import React, { useEffect, useState } from 'react';
import '../css/NewsList.scss';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsList = props => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    const {selectedCategory} = props;

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const query = selectedCategory === 'all' ? '' : `&category=${selectedCategory}`;
                const response = await axios.get(
                    `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c82b95a3df2a471eb5bde466f14dc8eb`
                );
                // await으로 기다리게 하고 response 받으면 setArticle 호출
            
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    }, [selectedCategory]); // 선택된 카테고리 바뀌면 재수행

    // fetchData 비동기로 던져놓고 아래로 계속 수행함.

    if (loading) {
        return (
            <div className="NewsList">
                <h1>대기 중....</h1>
            </div>
        )
    }

    if (!articles) {
        return null;
    }

    return (
        <div className="NewsList">
            {articles.map(article => <NewsItem key={article.url} article={article}/>)}
        </div>
    );
};

export default NewsList;