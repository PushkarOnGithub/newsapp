import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: "",
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  
  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&pagesize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    this.props.setProgress(60);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
    this.props.setProgress(100);
  }
  fetchData = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apikey=${this.props.apikey}&page=${
      this.state.page+1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(60);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: this.totalResults,
      page: this.state.page+1,
    });
    this.props.setProgress(100);
  };
  

  render() {
    return (
      <>
          <h1 className="text-center" style={{ margin: "35px" }}>
            NewsMonkey - Top Headlines
          </h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchData}
            hasMore={this.state.page !== this.state.totalResults}
            loader={this.state.loading&&(<div className="text-center"> <Spinner /> </div>)}>
        <div className="container">
            {/* <div className="text-center">
              {this.state.loading && <Spinner />}
            </div> */}
            <div className="row">
              {this.state.articles
                ? this.state.articles.map((element) => {
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
  }
}
