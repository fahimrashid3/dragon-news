import { useEffect, useState } from "react";
import MainNews from "../../../LayOut/MainNews/MainNews";

const CentralNav = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json").then((res) => res.json().then((data) => setNews(data)));
  }, []);
  return (
    <div>
      {news.map((singleNews) => (
        <MainNews key={singleNews._id} singleNews={singleNews}></MainNews>
      ))}
    </div>
  );
};

export default CentralNav;
