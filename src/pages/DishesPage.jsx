import axios from "axios";
import { useEffect, useState } from "react";
import placeholder from "../assets/placeholder.png";
// .env api base url for dishes index
const defaultApiUrl = import.meta.env.VITE_API_URL + "dishes";
const defaultImgUrl = import.meta.env.VITE_API_IMG_URL;

export default function DishesPage() {
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
      <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {dishes.map((dish) => (
          <div className="col-12" key={dish.id}>
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
        ))}
      </div>
    </div>
  );
}
