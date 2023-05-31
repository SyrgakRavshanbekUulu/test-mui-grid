import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { useAppDispatch } from 'store/store';
import { getAllUsers } from 'store/user/reducers';
import { routeArray } from 'routes/routes';

const routes = routeArray.map((route) => (
  <Route key={route.path} path={route.path} element={<route.page />} />
))

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();


  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
  return (
    <div>
      <Routes>
        {routes}
      </Routes>
    </div>
  );
}

export default App;
