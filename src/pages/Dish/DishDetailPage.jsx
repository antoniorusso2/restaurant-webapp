import axios from "axios";
import placeholder from "../../assets/placeholder.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
const defaultApiUrl = import.meta.env.VITE_API_URL + "dishes";
const defaultImgUrl = import.meta.env.VITE_API_IMG_URL;

export default function DishDetailPage() {
  const id = useParams().id;
  // const navigate = useNavigate();

  const [dish, setDish] = useState([]);

  const getDish = async () => {
    try {
      const response = await axios.get(defaultApiUrl + `/${id}`);

      const results = response.data.results;

      setDish(results);

      // console.log(dish);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDish();
  }, []);

  return (
    <div className="container">
      {/* title and price */}
      <div className="row align-items-center row-gap-3">
        <div className="col-12">
          <h1>{dish.name}</h1>
          <span className="badge bg-gradient text-bg-success">&euro; {dish.price} </span>
        </div>

        {/* image */}
        <div className="col-12 col-lg-6 flex-shrink-0">
          <img
            src={dish.image ? defaultImgUrl + dish.image : placeholder}
            alt={dish.name}
            onError={(e) => (e.target.src = placeholder)}
            className="img-fluid rounded-3"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* description and ingredients */}
        <div className="col-12 col-lg-6 d-flex flex-column gap-3">
          {dish.ingredients && (
            <div className="ingredients border border-light-subtle rounded-3 p-3">
              <h3 className="fw-bold">Ingredienti</h3>
              <ul className="list-group list-group-flush text-decoration-none list-unstyled">
                {dish.ingredients.map((ingredient) => (
                  <li key={ingredient.id}>- {ingredient.name}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="description border border-light-subtle rounded-3 p-3">
            <p className="lead ">{dish.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
