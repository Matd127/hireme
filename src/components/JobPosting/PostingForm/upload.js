import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { storage } from "../../../firebase/config";
import { jobsActions } from "../../../redux/jobs-slice";

export const upload = function (
  file,
  dispatch,
  data,
  id,
  skills,
  benefits,
  keywords,
  setIsSuccess
) {
  if (!file) {
    dispatch(
      jobsActions.postJob({
        ...data,
        id: id,
        skills: skills,
        benefits: benefits,
        keywords: keywords,
      })
    );
    setIsSuccess(true);
  } else {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (err) => {
        console.log(err);
        setIsSuccess(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          dispatch(
            jobsActions.postJob({
              ...data,
              logo: url,
              id: id,
              requiredSkills: skills,
              benefits: benefits,
              keywords: keywords,
            })
          );
        });
        setIsSuccess(true);
      }
    );
  }
};
