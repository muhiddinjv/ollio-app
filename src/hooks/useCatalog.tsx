import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const fetchCatalogItems = async () => {
    const { data } = await axios.get('http://10.0.2.2:4000/catalog');
    return data;
};

const useCatalog = () => useQuery({queryKey: ['catalog'], queryFn: fetchCatalogItems});
export default useCatalog;