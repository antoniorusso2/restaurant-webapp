import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import DishesPage from "./pages/DishesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/piatti" element={<DishesPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
