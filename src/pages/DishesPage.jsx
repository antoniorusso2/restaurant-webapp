import axios from "axios";
import { useEffect, useState } from "react";

export default function DishesPage() {
  // .env api base url for dishes index
  const defaultApiUrl = import.meta.env.VITE_API_URL + "dishes";

  const [dishes, setDishes] = useState([]);

  const getDishes = async () => {
    try {
      const response = await axios.get(defaultApiUrl);
      console.log(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDishes();
  }, []);

  return (
    <div>
      <h1>Questa è la pagina piatti</h1>
    </div>
  );
}
