import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/instance";

const fetchCatalogItems = async () => {
    const { data } = await axiosInstance.get('http://10.0.2.2:4000/catalog');
    return data;
};

const useCatalog = () => useQuery({queryKey: ['catalog'], queryFn: fetchCatalogItems});
export default useCatalog;