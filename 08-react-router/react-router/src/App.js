import { Routes, Route } from "react-router-dom";
import './app.css'
import Navbar from "./components/Navbar";

import ArticlePage from "./pages/ArticlePage";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="articles" element={<ArticlePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
    </div>
  );

  // return (
  //   <div className="App">
  //     <nav>
  //       <button onClick={() => setPage("articles")}>Articulos</button>
  //       <button onClick={() => setPage("catalog")}>Catálogo</button>
  //       <button onClick={() => setPage("user")}>Usuario</button>
  //     </nav>
  //     {page === "articles" && <ArticlePage />}
  //     {page === "catalog" && <CatalogPage />}
  //     {page === "user" && <UserPage />}
  //   </div>
  // );
}

export default App;
