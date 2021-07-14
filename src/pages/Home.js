import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NewsItem from "../components/NewsItem";
import classes from "./Home.module.css";

const Home = () => {
  const [news, setNews] = useState([]);
  const { category } = useParams();

  const fetchNewsHandler = useCallback(() => {
    axios
      .get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${
          category ? category : "general"
        }/in.json`
      )
      .then((res) => setNews(res.data.articles));
  }, [category]);

  useEffect(() => {
    fetchNewsHandler();
  }, [fetchNewsHandler]);

  return (
    <>
      <main>
        <div className={classes.DownloadApp}>
          <div className={classes.DownloadApp__Text}>
            For the best experience use <strong>inshorts</strong> app on your
            smartphone
          </div>
          <div className={classes.DownloadApp__Stores}>
            <span className={classes.appstoreLogos}>
              <img
                src="https://assets.inshorts.com/website_assets/images/appstore.png"
                alt=""
              />
            </span>
            <span className={classes.appstoreLogos}>
              <img
                src="https://assets.inshorts.com/website_assets/images/playstore.png"
                alt=""
              />
            </span>
          </div>
        </div>
        <section className={classes.News__Section}>
          <ul className={classes.News__List}>
            {news.map((article, index) => (
              <NewsItem key={index} news={article} />
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
