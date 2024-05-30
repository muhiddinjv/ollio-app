import axios from "./axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

export async function signIn(credentials) {
  try {
    const response = await axios.post('http://10.0.2.2:4000/auth/signin', credentials);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}


export const register = async (el) => axios.post("auth/signup", el).then(res => res.data).catch(err => err)

export const getProfile = async () => axios.get("auth/profile").then(res => res.data).catch(err => err)

export const getShops = async () => await axios.get("shops", {headers: {Authorization: `Bearer ${await AsyncStorage.getItem("token")}`}}).then(res => res.data).catch(err => err)

export const getAllGlobalItems = async () => await axios.get("catalog", {headers: {Authorization: `Bearer ${await AsyncStorage.getItem("token")}`}}).then(res => res.data).catch(err => err)

export const getAllUsers = async () => axios.get("users").then(res => res.data).catch(err => err)

// get parents
export const getParentStatus = async () => axios.get("statuses/parent").then(res => res.data).catch(err => err)

// Client status
export const getAllStatus = async () => axios.get("statuses").then(res => res.data).catch(err => err)
export const getAllClients = async () => axios.get("clients").then(res => res.data).catch(err => err)

// Client lead history
export const getAllHistories = async () => axios.get("/leads/history").then(res => res.data).catch(err => err)

export const editUser = async ({ user, id }) => axios.put(`users/${id}`, user).then(res => res.data).catch(err => err)

// Edit user
export const editStatus = async (user ) => axios.put(`statuses/${user?.id}`, user).then(res => res.data).catch(err => err)

export const editClient = async ({user, id}) => axios.put(`clients/${id}`, user).then(res => res.data).catch(err => err)

export const editBank = async ({user, id}) => axios.put(`banks/${id}`, user).then(res => res.data).catch(err => err)

export const editLeads = async ({user, id}) => axios.put(`leads/${id}`, user).then(res => res.data).catch(err => err)

export const deleteUser = async (id) => axios.delete(`users/${id}`).then(res => res.data).catch(err => err)

// delete status
export const deleteStatus = async (id) => axios.delete(`statuses/${id}`).then(res => res.data).catch(err => err)

export const deleteClient = async (id) => axios.delete(`clients/${id}`).then(res => res.data).catch(err => err)
// delete leads
export const deleteLeads = async (id) => axios.delete(`leads/${id}`).then(res => res.data).catch(err => err)

export const createUser = async (user) => axios.post(`users`, user).then(res => res.data).catch(err => err)

//statuses
export const createStatus = async (user) => axios.post(`statuses`, user).then(res => res.data).catch(err => err)
export const createClient = async (user) => axios.post(`clients`, user).then(res => res.data).catch(err => err)

// Charts 
export const getAllCharts = async ({ params }) => await axios.get("leads/statistics",params).then(res => res.data).catch(err => err)

// Fields 
export const getFields = async () => axios.get("fields").then(res => res.data).catch(err => err)
export const editField = async ({field, id}) => axios.put(`fields/${id}`, field).then(res => res.data).catch(err => err)
export const deleteField = async (id) => axios.delete(`fields/${id}`).then(res => res.data).catch(err => err)
export const createField = async (field) => axios.post(`fields`, field).then(res => res.data).catch(err => err)

// Locations 
export const getLocations = async () => axios.get("locations").then(res => res.data).catch(err => err)
export const editLocation = async ({location, id}) => axios.put(`locations/${id}`, location).then(res => res.data).catch(err => err)
export const deleteLocation = async (id) => axios.delete(`locations/${id}`).then(res => res.data).catch(err => err)
export const createLocation = async (location) => axios.post(`locations`, location).then(res => res.data).catch(err => err)

// Workers 
export const getStaff = async ({params}) => axios.get("leads", {params}).then(res => res.data).catch(err => err)
export const editStaff = async ({worker, id}) => axios.put(`workers/${id}`, worker).then(res => res.data).catch(err => err)
