import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-200 text-black py-2 px-10 rounded-lg gap-5">
      <button className="btn btn-error text-white">Breaking News</button>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
