import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import LoaderContext from "../../context/LoaderContext.js";
import DishCard from "../../components/DishCard.jsx";
// .env api base url for dishes index
const defaultApiUrl = import.meta.env.VITE_API_URL + "dishes";

export default function DishesPage() {
  const { setIsLoading } = useContext(LoaderContext);
  const [searchParams] = useSearchParams(); //import parametri dalla query string
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
      setIsLoading(true);
      const response = await axios.get(
        defaultApiUrl + `?limit=${pagination.perPage}` + `&page=${page}` + `&name=${search || ""}`
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
    } finally {
      setIsLoading(false);
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
            <DishCard dish={dish} />
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
                    className={`page-link z-0 ${pagination.currentPage === index + 1 ? "active" : ""}`}
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
