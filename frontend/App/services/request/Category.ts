import customRequest from "../config/customizedReq";

async function fetchAllCategories(): Promise<ICategory[]> {
  const { data } = await customRequest.get<ICategory[]>("categories/");
  return data;
}

export default fetchAllCategories;
