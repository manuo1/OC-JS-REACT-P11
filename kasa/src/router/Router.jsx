import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Accommodation from '../pages/Accommodation';
import Error404 from '../pages/Error404';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default Router;
