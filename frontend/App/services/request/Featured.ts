import env from "../../../env";
import customRequest from "../config/customizedReq";

async function fetchAllFeaturedCategories(): Promise<IFeaturedCategory[]> {
  const { data } = await customRequest.get<IFeaturedCategory[]>("featureds/");

  return data;
}

export default fetchAllFeaturedCategories;
