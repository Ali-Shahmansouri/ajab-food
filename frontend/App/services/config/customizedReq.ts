import axios from "axios";
import env from "../../../env";

const customRequest = axios.create({
  baseURL: `${env.EXPO_PUBLIC_API_URL}api/`,
});

export default customRequest;
