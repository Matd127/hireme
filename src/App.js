import { useDispatch } from "react-redux";
import { jobsActions } from "./redux/jobs-slice";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobsActions.loadLatestJobs());
    dispatch(jobsActions.loadAllCategories());
    dispatch(jobsActions.loadFeaturedCategories());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'contact',
      element: <Contact/>
    },
    {
      path: 'jobs',
      element: <Jobs/>
    }
  ])

  return (
    <RouterProvider router={router}/> 
  );
}

export default App;
