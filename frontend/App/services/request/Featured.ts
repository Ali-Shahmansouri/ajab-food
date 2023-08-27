import env from "../../../env";
import customRequest from "../config/customizedReq";

async function fetchAllFeaturedCategories(): Promise<IFeaturedCategory[]> {
  const { data } = await customRequest.get<IFeaturedCategory[]>("featureds/");
  console.log(env.EXPO_PUBLIC_API_URL);

  return data;
}

export default fetchAllFeaturedCategories;
