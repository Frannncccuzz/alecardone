import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail";

import { I18nProvider } from "./I18nProvider";

export default function App() {
  return (
    <I18nProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path=":category" element={<Products />} />
          <Route path=":category/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </I18nProvider>
  );
}
