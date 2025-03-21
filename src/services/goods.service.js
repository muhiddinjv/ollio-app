import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../screens/Auth/axiostance";
import { getAccessToken } from "../screens/Auth/astorage";

const getGoods = async (goodId) => {
  const accessToken = await getAccessToken();
  const response = await axiosInstance.get(`stock/${goodId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const UseGetGood = (goodId) =>
  useQuery({
    queryKey: ["GET_GOOD", goodId],
    queryFn: () =>
      getGoods(goodId)
        .then((res) => res)
        .catch((err) => console.log(err)),
  });
