import Content from "./components/Content/Content";
import LatestJobs from "./components/Jobs/LatestJobs.jsx";
import Tips from "./components/Tips/Tips";
import { useDispatch } from "react-redux";
import { jobsActions } from "./redux/jobs-slice";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobsActions.findTopThreeJobs());
  }, [dispatch]);

  return (
    <>
      <Content />
      <LatestJobs />
      <Tips />
      <Footer/>
    </>
  );
}

export default App;
