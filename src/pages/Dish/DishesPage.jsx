import axios from "axios";
import placeholder from "../../assets/placeholder.png";

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
// .env api base url for dishes index
const defaultApiUrl = import.meta.env.VITE_API_URL + "dishes";
const defaultImgUrl = import.meta.env.VITE_API_IMG_URL;

export default function DishesPage() {
  const [searchParams, setSearchParams] = useSearchParams(); //import parametri dalla query string
  const [dishes, setDishes] = useState([]);

  const search = searchParams.get("name");

  const [pagination, setPagination] = useState({
    perPage: 4,
    currentPage: 1,
    lastPage: 1,
    total: 0,
  });

  const getDishes = async (page = 1) => {
    try {
      const response = await axios.get(
        defaultApiUrl + `?limit=${pagination.perPage}` + `&page=${page}` + `&name=${searchParams.get("name") || ""}`
      );

      const results = response.data.results;

      setPagination({
        perPage: results.per_page,
        currentPage: results.current_page,
        lastPage: results.last_page,
        total: results.total,
      });

      setDishes(results.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDishes(1);
  }, [searchParams]);

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
      <div className="row my-4">
        <div className="col-12 pages">
          <nav aria-label="Page navigation example ">
            <ul className="pagination justify-content-center gap-2">
              {Array.from({ length: pagination.lastPage }, (_, index) => (
                <li key={index} className="page-item">
                  <button
                    className={`page-link ${pagination.currentPage === index + 1 ? "active" : ""}`}
                    onClick={() => getDishes(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
