const defaultImgUrl = import.meta.env.VITE_API_IMG_URL;
import { Link } from "react-router";
import placeholder from "../assets/placeholder.png";

export default function DishCard({ dish }) {
  return (
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
  );
}
