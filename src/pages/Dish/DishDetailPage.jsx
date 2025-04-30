import axios from "axios";
import placeholder from "../../assets/placeholder.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DishDetailPage() {
  const id = useParams().id;

  const [dish, setDish] = useState([]);

  const getDish = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "dishes/" + id);

      const results = response.data.results;
      setDish(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDish();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{dish.name}</h1>
        </div>
        <div className="col-12">
          <img
            src={import.meta.env.VITE_API_IMG_URL + dish.image}
            alt={dish.name}
            onError={(e) => (e.target.src = placeholder)}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "200px" }}
          />
        </div>

        <div className="col-12 my-5">
          <p>{dish.description}</p>
          <p>&euro; {dish.price}</p>
        </div>
      </div>
    </div>
  );
}
