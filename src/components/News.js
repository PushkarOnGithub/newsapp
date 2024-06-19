import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState("");
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(0);
  // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&pagesize=${props.pageSize}&page=${page}`;

  const countries = [
    "in",
    "us",
    "pk",
    "au",
    "ca",
    "ie",
    "ph",
    "sg",
    "uk",
    "gb",
  ];
  const getNews = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&apikey=${props.apikey}&lang=en&country=${countries[country]}`;
    setCountry(1);
    props.setProgress(10);
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    props.setProgress(100);
  };

  const capitalizeFirseLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  useEffect(() => {
    document.title = `${capitalizeFirseLetter(props.category)} - NewsMonkey`;
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&apikey=${props.apikey}&lang=en&country=${countries[country]}`;
    setLoading({ loading: true });
    props.setProgress(60);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setLoading(true);
    setCountry(country + 1);
    // setState({
    //   articles: articles.concat(parsedData.articles),
    //   loading: false,
    //   totalResults: totalResults,
    //   page: state.page+1,
    // });
    props.setProgress(100);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center" style={{ margin: "110px 0 45px 0" }}>
          NewsMonkey - Top Headlines
        </h1>
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={updateNews}
        hasMore={countries.length+1 !== country}
        loader={
          loading && (
            <div className="text-center">
              {" "}
              <Spinner />{" "}
            </div>
          )
        }>
        <div className="container ">
          {/* <div className="text-center">
              {loading && <Spinner />}
            </div> */}
          <div className="row">
            {articles
              ? articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title.slice(0, 50)}
                        description={
                          element.description === null
                            ? ""
                            : element.description.slice(0, 121)
                        }
                        imageUrl={element.image}
                        newsUrl={element.url}
                        author={element.source.url}
                        date={element.publishedAt}
                        name={element.source.name}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
export default News;
News.defaultProps = {
  country: "in",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};
