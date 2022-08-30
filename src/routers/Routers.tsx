import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "../pages/NewsPage";
import { useParams } from "react-router-dom";
import { ReactNode } from "react";
const Routers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
