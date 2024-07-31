import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNave = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json").then((res) =>
      res.json().then((data) => setCategories(data))
    );
  }, []);

  return (
    <div>
      <h2 className="font-bold text-xl mb-2">All Categories </h2>
      {categories.map((category) => (
        <Link
          className="block p-2  space-y-2 ml-4 text-xl"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNave;
