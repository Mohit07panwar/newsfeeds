import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        pageSize: 10,
        country: "us",
        category: "general"
    }
    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            article2: [],
            page: 1

        }
        document.title = this.capitalizeFirstLetter(this.props.category);
    }
    async componentDidMount() {                                                //one way using async await to fetch api
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=adc4d9a9f5094feea3b192ea120903c1&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let jsonData = await data.json();
        this.setState({
            article2: jsonData.articles,
        })
    }
    // componentDidMount(){  
    //     fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=adc4d9a9f5094feea3b192ea120903c1")
    //     .then((response)=>{response.json()})
    //     .then((user)=>{this.setState({
    //         article:user
    //     })})
    // }

    //  updateChange=async ()=>{
    //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=adc4d9a9f5094feea3b192ea120903c1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let jsonData = await data.json();
    //     this.setState({
    //         article2: jsonData.articles,

    //     })
    // }
    handleNextChange = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=adc4d9a9f5094feea3b192ea120903c1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let jsonData = await data.json();
        this.setState({
            article2: jsonData.articles,
        })

        this.setState({
            page: this.state.page + 1,
        })
        // this.setState({ page: this.state.page + 1});
        // this.updateChange();

    }
    handlePrevChange = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=adc4d9a9f5094feea3b192ea120903c1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let jsonData = await data.json();
        this.setState({
            article2: jsonData.articles,
        })
        this.setState({
            page: this.state.page - 1
        })

        // this.setState({ page: this.state.page - 1});
        // this.updateChange();
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="mb-5 mt-5" style={{ color: "#b5bfc0", textAlign: "center" }}>TOP HEADLINES- {this.capitalizeFirstLetter(this.props.category)}</h1>

                    <div className="row my-4">
                        {this.state.article2.map((element) => {
                            return <div className="col-md-3 mb-4" key={element.url}>
                                <NewsItems title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} published={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
               

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevChange} className="btn btn-light" style={{ backgroundColor: "pink" }}>&larr; Previews</button>
                    <button onClick={this.handleNextChange} className="btn btn-dark">Next &#x2192;</button>

                </div>
            </div>


        )
    }
}
