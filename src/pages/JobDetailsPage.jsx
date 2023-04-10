import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const JobDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <Navbar />
      <div>
        It works!
        {params.id}
        {params.position}
      </div>
    </>
  );
};

export default JobDetailsPage;
