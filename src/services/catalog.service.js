import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/instance";

export const getCatalog = (queryParams) =>
  axiosInstance.get("products/global", {
    params: queryParams,
  });

export const UseGetCatalog = ({ queryParams }) => {
  return useQuery({
    queryKey: ["CATALOG_ITEMS", queryParams],
    queryFn: async () => {
      return await getCatalog(queryParams)
        .then((res) => res)
        .catch((err) => console.log(err));
    },
  });
};
