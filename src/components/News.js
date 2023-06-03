import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    
  }
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: this.totalResults,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=be52d7e832764e7a83f85bf28ff234e5&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }

  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=be52d7e832764e7a83f85bf28ff234e5&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (!(Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1)) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=be52d7e832764e7a83f85bf28ff234e5&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true
      })
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page: this.state.page + 1,
        totalResults: parsedData.totalResults,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: "35px"}}>NewsMonkey - Top Headlines</h1>
        <div className="text-center">{this.state.loading && <Spinner />}</div>
        <div className="row">
          {this.state.articles
            ? this.state.articles.map((element) => {
                return !this.state.loading&&(
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
                    />
                  </div>
                );
              })
            : ""}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-success "
              onClick={this.handlePrevClick}
            >
              &larr; Prev
            </button>
            <button
              disabled={
                Math.ceil(this.state.totalResults / this.props.pageSize) <
                this.state.page + 1
              }
              type="button"
              className="btn btn-success"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
