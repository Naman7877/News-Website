import React, { Component } from 'react'
import PropTypes from 'prop-types';
import News from './News'
import { render } from "react-dom";
import Tab from './Tab'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner1 from './Spinner1'
import LoadingBar from 'react-top-loading-bar'


export class Newsitem extends Component {
    static defaultProps = {
        counrty: 'us',
        pagenum: '10',
        catg: 'general'

    }
    static propTyps = {
        counrty: PropTypes.string,
        catg: PropTypes.string,
        pagenum: PropTypes,

    }

    article = [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "Khanyiso Tshwaku",
            "title": "CSA's acting CEO says rumours of India tour being delayed is just speculation",
            "description": "Cricket South Africa's acting chief executive officer Pholetsi Moseki said India's tour being delayed by a week remains speculation.",
            "url": "https://www.news24.com/sport/Cricket/Proteas/csas-pholetsi-moseki-says-rumours-of-india-tour-being-delayed-is-just-speculation-20211202",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/1710/004f3c6c38b449ff8f4814d5d21abc51.jpg",
            "publishedAt": "2021-12-02T12:41:04+00:00",
            "content": "<ul><li>Cricket South Africa's acting chief executive officer Pholetsi Moseki said India delaying their highly anticipated tour by a week remains speculation. </li><li>A report from an Indian publica… [+1993 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

    // capialized first char of a string 
    capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);

    }

    constructor(props) {
        super(props);
        console.log("this is constructor and lets begin ");
        // here statr is like a usestate in functional components 
        // we cna change the value of state according to the system

        //here set the tital of the page 
        document.title = this.capital(this.props.catg);

        this.state = {
            article: this.article,
            pagenum: 1,
            count: 1,
            loading: false,
            total: 0,

        }
    }

    async update() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.counrty}&category=${this.props.catg}&apiKey=6dfdd00e375a4c56945e3f5eda9c42c5&page=${this.state.pagenum}&pagesize=20`;
        this.setState({
            loading: true,
        })
        let data1 = await fetch(url);
        let parsedata = await data1.json();
        this.setState({
            article: parsedata.articles,
            total: parsedata.totalResults,
            loading: false,
        });


    }
    async componentDidMount() {
        console.log("hii");
        // here we create a updatefunction this function fetch api
        this.update();
    }

    next = async () => {
        console.log("next");
        if (this.state.pagenum + 1 > Math.ceil(this.state.total / 20)) {

        }
        else {
            // first increase number of pagenum than call function 
            this.setState({
                pagenum: this.state.pagenum + 1,

                loading: false,
            })
            this.update();
        }


    }

    prev = async () => {
        // console.log("prev");

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.counrty}&category=${this.props.catg}&apiKey=6dfdd00e375a4c56945e3f5eda9c42c5&page=${this.state.pagenum - 1}&pagesize=20`;
        // this.setState({
        //     loading: true,
        // })
        // let data1 = await fetch(url);
        // let parsedata = await data1.json();
        // this.setState({ article: parsedata.articles });
        // console.log(parsedata.articles);
        this.setState({
            pagenum: this.state.pagenum - 1,
            count: this.state.count - 1,
            loading: false,
        })
        this.update();


    }
    fetchMoreData = async() => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
         this.setState({
            pagenum:this.state.pagenum+1,
          });
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.counrty}&category=${this.props.catg}&apiKey=6dfdd00e375a4c56945e3f5eda9c42c5&page=${this.state.pagenum}&pagesize=20`;
          this.setState({
              loading: true,
          })
          let data1 = await fetch(url);
          let parsedata = await data1.json();
          this.setState({
              article: this.state.article.concat(parsedata.articles),
              total: parsedata.totalResults,
              loading: false,
          });
      };
    
     

    render() {


        return (
            <>
                <Tab />

                {/* here create a container class and use my-3 margin in y axis and mx-3 for margin for x axis */}
                <div className="container my-3">
                    {/* <div className="">{this.state.loading && <Spinner></Spinner>} </div> */}

                    {/* here use row class by bootstrap and cerate 3 coloum in a row  */}
                    <InfiniteScroll
                        dataLength={this.state.article.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.article.length !== this.state.total}
                        loader={<Spinner1/>}
                    >
                        <div className='container'>
                        <div className="row">

                            {this.state.article.map((Element) => {

                                return <div className="col-md-3">
                                    <News title={Element.title ? Element.title.slice(0, 20) : ""} desc={Element.description ? Element.description.split(0, 40) : ""} url={Element.url} imageurl={Element.urlToImage} author={Element.author} publishedAt={Element.publishedAt}></News>
                                </div>

                            })}

                            {/* Here md for medium device coloum wise page contain 12 scail so we devide 3 newitem in 4 scal each */}

                        </div>
                        </div>
                    </InfiniteScroll>
                    {/* <div class="d-flex justify-content-between my-3 mx-3 mb-3">
                        <button disabled={this.state.pagenum <= 1} type="button" class="btn btn-secondary" onClick={this.prev}>&larr; Prev</button>
                        <button disabled={this.state.pagenum + 1 > Math.ceil(this.state.total / 20)} type="button" class="btn btn-secondary" onClick={this.next}>Next &rarr;</button>
                    </div> */}
                </div>
            </>
        )
    }
}

export default Newsitem
