import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import DishesPage from "./pages/Dish/DishesPage";
import DishDetailPage from "./pages/Dish/DishDetailPage";
import { useState } from "react";
import LoaderContext from "./context/LoaderContext";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <BrowserRouter>
      <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="piatti">
              <Route index element={<DishesPage />} />
              <Route path=":id" element={<DishDetailPage />} />
            </Route>
            <Route path="/contacts" element={<ContactPage />} />
          </Route>
        </Routes>
      </LoaderContext.Provider>
    </BrowserRouter>
  );
}

export default App;
