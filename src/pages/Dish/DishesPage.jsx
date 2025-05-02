import axios from "axios";
import placeholder from "../../assets/placeholder.png";

import { useEffect, useState } from "react";
import { Link } from "react-router";
// .env api base url for dishes index
const defaultApiUrl = import.meta.env.VITE_API_URL + "dishes";
const defaultImgUrl = import.meta.env.VITE_API_IMG_URL;

export default function DishesPage() {
  const [dishes, setDishes] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const getDishes = async () => {
    try {
      const response = await axios.get(defaultApiUrl);
      const results = response.data.results;

      setCurrentPage(results.current_page);
      setDishes(results.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDishes();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {dishes.map((dish) => (
          <div className="col-12" key={dish.id}>
            <div className="card h-100">
              <div className="card-header h-75">
                <img
                  src={dish.image ? defaultImgUrl + dish.image : placeholder}
                  onError={(e) => (e.target.src = placeholder)}
                  className="card-img w-100 h-100 object-fit-cover"
                  alt={dish.name}
                />
              </div>
              <div className="card-body">
                {/* link to detail page */}
                <Link
                  className="card-title d-block text-truncate h4 link-offset-1 link-offset-1-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to={`/piatti/${dish.id}`}
                >
                  {dish.name}
                </Link>
                <p className="card-text text-truncate">{dish.description}</p>
                <p className="card-text fw-bold fs-5 mt-auto self-end">&euro; {dish.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
