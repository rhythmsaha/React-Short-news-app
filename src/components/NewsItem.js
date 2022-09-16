import React from "react";
import classes from "./styles/NewsItem.module.css";
import imageplaceholder from "../assets/images/imageplaceholder.png";

const NewsItem = ({ news }) => {
    return (
        <div className={classes.NewsItem}>
            <div className={classes.NewsItem__Image}>
                <img src={news.urlToImage ? news.urlToImage : imageplaceholder} alt="" />
            </div>
            <div className={classes.NewsItem__Description}>
                <div className={classes.NewsItem__Title}>{news.title}</div>
                <div className={classes.NewsItem__PublishedOn}>
                    <strong>short</strong> by {news.author ? news.author : "Anonymous User"} / {news.publishedAt}
                </div>
                <div className={classes.NewsItem__Content} dangerouslySetInnerHTML={{ __html: news.content }}></div>
                <div className={classes.NewsItem__Source}>
                    read more at{" "}
                    <a href={news.url} rel="noreferrer" target="_blank">
                        {news.source.name ? news.source.name : "here"}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
