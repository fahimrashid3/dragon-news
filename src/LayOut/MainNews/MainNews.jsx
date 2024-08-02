import { useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { RxEyeOpen } from "react-icons/rx";
import { Link } from "react-router-dom";

const MainNews = ({ singleNews }) => {
  // console.log(singleNews.others_info.is_trending);
  const {
    _id,
    category_id,
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = singleNews;
  const { name, published_date, img } = author;
  const { number } = author;

  const [length, setLength] = useState(500);
  const [readMore, setReadMore] = useState(true);

  const handelClickReadMore = () => {
    setLength(details.length);

    setReadMore(!readMore);
    console.log(length);
  };

  return (
    <div className="mb-24">
      <div className="flex bg-gray-50 text-black justify-between rounded-t-lg">
        <div className="flex">
          <img className="rounded-full w-12 h-12 mr-3" src={img} alt="" />
          <div>
            <p className="font-semibold text-xl">{name}</p>
            <p>{published_date}</p>
          </div>
        </div>
        <div className="flex text-xl items-center gap-2 mr-3">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className="space-y-5 mt-5 mb-5">
        <p className="font-bold text-2xl">{title}</p>
        <img src={image_url} alt="" />
        <p>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link to={`/news/${_id}`} className="text-blue-600">
                Read more...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </p>

        <hr />
      </div>
      <div className="flex justify-between">
        <div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p className="text-white">{number}</p>
        </div>
        <div className="flex items-center gap-2">
          <RxEyeOpen />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
