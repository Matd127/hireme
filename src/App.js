import { useDispatch } from "react-redux";
import { jobsActions } from "./redux/jobs-slice";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";
import Jobs from "./pages/JobsPage";
import JobDetails from "./pages/JobDetailsPage"

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
    },
    {
      path: 'job/:id/:position',
      element: <JobDetails/>
    }
  ])

  return (
    <RouterProvider router={router}/> 
  );
}

export default App;
