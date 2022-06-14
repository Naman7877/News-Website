import React, { Component } from 'react'
import '../App.css';

export class News extends Component {
    render() {
        let { title, desc, url, imageurl,author,publishedAt } = this.props
        return (
            <div>
                <div className="card" style={{margin: "auto", marginTop:"20px"}}>
                    <img src={!imageurl?"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png":imageurl} className="card-img-top" alt="Image" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p class="card-text"><small class="text-muted"><strong>By: </strong>{!author?"Unknown":author}   {new Date(publishedAt).toDateString()}</small></p>
                        <a href={url} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default News
