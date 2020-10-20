import React, { useEffect, useState } from 'react';
import '../css/NewsList.scss';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsList = props => {
    // const [articles, setArticles] = useState(null);
    // // const [loading, setLoading] = useState(false);
    const {selectedCategory} = props;
    const [loading, response, error] = usePromise(() => {
        const query = selectedCategory === 'all' ? '' : `&category=${selectedCategory}`;
        return axios.get(
                            `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c82b95a3df2a471eb5bde466f14dc8eb`
                        );
    }, [selectedCategory]);

    // useEffect(() => {

    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const query = selectedCategory === 'all' ? '' : `&category=${selectedCategory}`;
    //             const response = await axios.get(
    //                 `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c82b95a3df2a471eb5bde466f14dc8eb`
    //             );
    //             // await으로 기다리게 하고 response 받으면 setArticle 호출
            
    //             setArticles(response.data.articles);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         setLoading(false);
    //     }
    //     fetchData();
    // }, [selectedCategory]); // 선택된 카테고리 바뀌면 재수행

    // fetchData 비동기로 던져놓고 아래로 계속 수행함.

    if (loading) {
        return (
            <div className="NewsList">
                <h1>대기 중....</h1>
            </div>
        )
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <div className="NewsList">에러 발생!!</div>
    }

    const {articles} = response.data;

    return (
        <div className="NewsList">
            {articles.map(article => <NewsItem key={article.url} article={article}/>)}
        </div>
    );
};

export default NewsList;