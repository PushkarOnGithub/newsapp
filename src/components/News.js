import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&pagesize=${props.pageSize}&page=${page}`;
    setLoading(true);
    props.setProgress(60);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    props.setProgress(100);
  };

  const capitalizeFirseLetter = (word)=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  useEffect(() => {
    document.title = `${capitalizeFirseLetter(props.category)} - NewsMonkey`
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apikey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setLoading({ loading: true });
    props.setProgress(60);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setLoading(true);
    setTotalResults(props.totalResults);
    setPage(page + 1);
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
      <div className="container"><h1 className="text-center" style={{ margin: "110px 0 45px 0" }}>
        NewsMonkey - Top Headlines
      </h1>
      </div> 
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={page !== totalResults}
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
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
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
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
