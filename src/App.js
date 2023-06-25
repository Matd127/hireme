// import { useDispatch } from "react-redux";
// import { jobsActions } from "./redux/jobs-slice";
// import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";
import JobDetails from "./pages/JobDetailsPage"
import JobsPage from "./pages/JobsPage";
import JobPostingPage from "./pages/JobPostingPage";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(jobsActions.loadLatestJobs());
  //   dispatch(jobsActions.loadAllCategories());
  //   dispatch(jobsActions.loadFeaturedCategories());
  // }, [dispatch]);

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
      element: <JobsPage/>
    },
    {
      path: 'post',
      element: <JobPostingPage/> 
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
