import axios from "axios";

const baseURL = "https://cerulean-marlin-wig.cyclic.app/";

const axiosInstance = axios.create({
  baseURL,
});

export const getAllCalls = () => axiosInstance.get("/activities");
export const getCallDetails = (callId) =>
  axiosInstance.get(`/activities/${callId}`);
export const archiveCall = (callId) =>
  axiosInstance.patch(`/activities/${callId}`, { is_archived: true });
export const unarchiveCall = (callId) =>
  axiosInstance.patch(`/activities/${callId}`, { is_archived: false });
export const archiveAllCalls = () => axiosInstance.patch("/reset");
