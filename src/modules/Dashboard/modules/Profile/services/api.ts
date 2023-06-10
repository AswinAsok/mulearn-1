import React from "react";
import { ToastId, UseToastOptions } from "@chakra-ui/react";
import { NavigateFunction } from "react-router-dom";
import { privateGateway } from "../../../../../services/apiGateways";
import { dashboardRoutes } from "../../../../../services/urls";

type userProfile = React.Dispatch<React.SetStateAction<any>>;
type userLog = React.Dispatch<React.SetStateAction<any>>;

export const getUserProfile = (setUserProfile: userProfile) => {
  privateGateway
    .get(dashboardRoutes.getUserProfile)
    .then((response) => {
      console.log(response.data.response);
      setUserProfile(response.data.response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserLog = (setUserLog: userLog) => {
  privateGateway
    .get(dashboardRoutes.getUserLog)
    .then((response) => {
      console.log(response.data.response);
      setUserLog(response.data.response);
    })
    .catch((error) => {
      console.log(error);
    });
};