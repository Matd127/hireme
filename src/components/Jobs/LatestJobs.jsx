import { LatestJobContainer, LatestJobsItem, LatestJobsItems, LatestTitle } from "./LatestJobs.style"

const LastestJobs = () => {
    return(
       <LatestJobContainer>
            <LatestTitle>Latest Jobs Listing</LatestTitle>
            <LatestJobsItems>
                <LatestJobsItem>1</LatestJobsItem>
                <LatestJobsItem>2</LatestJobsItem>
                <LatestJobsItem>3</LatestJobsItem>
            </LatestJobsItems>
       </LatestJobContainer>
    )
}

export default LastestJobs