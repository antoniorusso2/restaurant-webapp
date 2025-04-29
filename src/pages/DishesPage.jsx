import axios from "axios";
import { useEffect, useState } from "react";
import placeholder from "../assets/placeholder.png";

export default function DishesPage() {
  // .env api base url for dishes index
  const defaultApiUrl = import.meta.env.VITE_API_URL + "dishes";
  const defaultImgUrl = import.meta.env.VITE_API_IMG_URL;

  const [dishes, setDishes] = useState([]);

  const getDishes = async () => {
    try {
      const response = await axios.get(defaultApiUrl);
      const results = response.data.results.data;

      setDishes(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDishes();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row g-3">
        {dishes.map(
          (dish) => (
            console.log(defaultImgUrl + dish.image),
            (
              <div className="col-4" key={dish.id}>
                <div className="card h-100">
                  <img
                    src={defaultImgUrl + dish.image}
                    onError={(e) => (e.target.src = placeholder)}
                    className="card-img-top"
                    alt={dish.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{dish.name}</h5>
                    <p className="card-text">{dish.description}</p>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
