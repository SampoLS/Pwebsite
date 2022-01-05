import { Route, Routes } from "react-router";
import Header from "./components/headerComponent/Header";
import Categories from "./pages/categories/Categories";
import Home from "./pages/home/Home";
import NotFound from "./pages/not_found/NotFound";
import PornVideos from "./pages/porn_videos/PornVideos";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="pornvideos" element={<PornVideos />} />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
