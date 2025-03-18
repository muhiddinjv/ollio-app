import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/instance";
import { getAccessToken } from "../screens/Auth/astorage";

export const getCatalog = async () => {
  const accessToken = await getAccessToken();

  const response = await axiosInstance.get("catalog", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response;
};

export const UseGetCatalog = () => {
  return useQuery({
    queryKey: ["CATALOG_ITEMS"],
    queryFn: async () => {
      return await getCatalog()
        .then((res) => res)
        .catch((err) => console.log(err));
    },
  });
};
