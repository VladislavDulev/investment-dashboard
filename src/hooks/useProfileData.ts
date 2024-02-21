import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IProfile } from "../interfaces/profile";
import { RootState } from "../reducers";

export const useProfileData = () => {
  const profileDataFromStore = useSelector(
    (state: RootState) => state.settings.data
  );
  const storedProfile = localStorage.getItem("profile");
  const [retrievedProfileData, setRetrievedProfileData] =
    useState<IProfile | null>(null);

  useEffect(() => {
    if (storedProfile) {
      setRetrievedProfileData(JSON.parse(storedProfile));
    } else {
      setRetrievedProfileData(profileDataFromStore);
    }
  }, [storedProfile, profileDataFromStore]);

  return retrievedProfileData;
};
