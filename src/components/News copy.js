import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { useState, useEffect } from "react";
const App = () => {
  articles = [
    {
        "source": {
            "id": "four-four-two",
            "name": "FourFourTwo"
        },
        "author": "Richard Laverty",
        "title": "Why is Nottingham Forest vs Sheffield United not on TV?",
        "description": "Nottingham Forest vs Sheffield United is not on TV – and it's all because of… cricket!?",
        "url": "https://www.fourfourtwo.com/news/why-is-nottingham-forest-vs-sheffield-united-not-on-tv",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/NFrj5JKt8nn8NgQBNQunqb-1200-80.jpg",
        "publishedAt": "2023-08-18T12:00:15Z",
        "content": "Nottingham Forest vs Sheffield United is not on TV tonight – due to the cricket.\r\nThe first Friday night football of the Premier League season beckons when Forest host the newly-promoted Blades ahead… [+2591 chars]"
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
      "title": "Malinga replaces Bond as Mumbai Indians' fast-bowling coach for IPL 2024",
      "description": "will return to Mumbai Indians for IPL 2024, this time as their fast-bowling coach. He will replace Shane Bond, who had held that position for the past nine seasons. | ESPNcricinfo.com",
      "url": "https://www.espncricinfo.com/story/ipl-2024-malinga-replaces-bond-as-mi-fast-bowling-coach-msk-prasad-lucknow-super-giants-strategic-consultant-1392987",
      "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960/lsci/db/PICTURES/CMS/287800/287804.3.jpg",
      "publishedAt": "2020-06-37T11:41:27Z",
      "content":"Lasith Malinga is back for Mumbai Indians, this time as fast-bowling coach and Lasith Malinga will return to Mumbai Indians for IPL 2024 [+7984 chars]"
  }
]

/* 
const [count, setCount] = useState(0);

useEffect(() => {
  //Runs only on the first render
}, []); */

 /*  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  } */

 /*  
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ddd377f18ca84273b39eff66f6dd7087"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  } */

    
  handlePrevClick =  async ()=>{
    console.log("Previous")

let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ddd377f18ca84273b39eff66f6dd7087&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page -1,
      articles: parsedData.articles})
  }
  
  handleNextClick = async ()=>{
    console.log("Next",this.state.page)

let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ddd377f18ca84273b39eff66f6dd7087&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
     this.setstate({
      page: this.state.page +1,
      articles: parsedData.articles
    });
   };

  
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=> <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>)}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}
export default News
{/* // .slice(0, 45) title */}
{/* // .slice(0, 88) */}