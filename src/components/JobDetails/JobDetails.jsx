import { useParams } from "react-router-dom";
import {
  DetailHeader,
  DetailHeaderContainer,
  AboutCompany,
  JobDetailsContainer,
  JobDetailsContent,
  JobDetailsInnerContainer,
  DetailTitle,
  DetailCompany,
  CompanyContent,
  CompanyTitle,
  CompanyDescription,
} from "./JobDetails.style";
import OtherJobs from "./OtherJobs";
import CompanyInformations from "./CompanyInformations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {jobsActions} from "../../redux/jobs-slice";

const JobDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = +params.id;

  useEffect(() => {
    dispatch(jobsActions.getDetailAboutJob({ id }));
  });

  const job = useSelector((state) => state.jobs.fonudJob)

  return (
    <>
      <JobDetailsContainer>
        <JobDetailsInnerContainer>
          <JobDetailsContent>
            <DetailHeaderContainer>
              <DetailHeader>
                <DetailTitle>{job.position}</DetailTitle>
                <DetailCompany>{job.company}</DetailCompany>
              </DetailHeader>
            </DetailHeaderContainer>

            <CompanyContent>
              <CompanyInformations location = {job.location} salary={job.salary}/>
              <AboutCompany>
                <CompanyTitle>About Company</CompanyTitle>
                <CompanyDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita vel, sapiente non repellat quo deserunt minima qui
                  necessitatibus amet aliquam repudiandae ea excepturi?
                  Consequatur veritatis unde sed eum assumenda repellendus?
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta vitae earum eveniet! Ea in itaque nesciunt odit
                  obcaecati dignissimos mollitia ipsam recusandae, aut explicabo
                  voluptas fugit, ex doloremque reprehenderit placeat.
                </CompanyDescription>
              </AboutCompany>
            </CompanyContent>
          </JobDetailsContent>

          <OtherJobs />
        </JobDetailsInnerContainer>
      </JobDetailsContainer>
    </>
  );
};

export default JobDetails;
