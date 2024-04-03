import axios from "./axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
// Users 
export const signIn = async (el: any) => axios.post("auth/signin", el)
    .then(res => console.log(333))
    .catch(err => err)






export const register = async (el: any) => axios.post("auth/signup", el).then(res => res.data).catch(err => err)

export const getMe = async () => axios.get("auth/profile").then(res => res.data).catch(err => err)

export const getShops = async () => await axios.get("shops", {headers: {Authorization: `Bearer ${await AsyncStorage.getItem("token")}`}}).then(res => res.data).catch(err => err)

export const getAllGlobalItems = async () => await axios.get("items_global", {headers: {Authorization: `Bearer ${await AsyncStorage.getItem("token")}`}}).then(res => res.data).catch(err => err)

export const getAllUsers = async () => axios.get("users").then(res => res.data).catch(err => err)

// get parents
export const getParentStatus = async () => axios.get("statuses/parent").then(res => res.data).catch(err => err)

// Client status
export const getAllStatus = async () => axios.get("statuses").then(res => res.data).catch(err => err)

export const getAllClients = async () => axios.get("clients").then(res => res.data).catch(err => err)

export const getAllBanks = async () => axios.get("banks").then(res => res.data).catch(err => err)

// Client lead history
export const getAllHistories = async () => axios.get("/leads/history").then(res => res.data).catch(err => err)

export const editUser = async ({ user, id }: any) => axios.put(`users/${id}`, user).then(res => res.data).catch(err => err)

// Edit user
export const editStatus = async (user : any) => axios.put(`statuses/${user?.id}`, user).then(res => res.data).catch(err => err)

export const editClient = async ({user, id}: any) => axios.put(`clients/${id}`, user).then(res => res.data).catch(err => err)

export const editBank = async ({user, id}: any) => axios.put(`banks/${id}`, user).then(res => res.data).catch(err => err)

export const editLeads = async ({user, id}: any) => axios.put(`leads/${id}`, user).then(res => res.data).catch(err => err)

export const deleteUser = async (id: string) => axios.delete(`users/${id}`).then(res => res.data).catch(err => err)

// delete status
export const deleteStatus = async (id: string) => axios.delete(`statuses/${id}`).then(res => res.data).catch(err => err)

export const deleteClient = async (id: string) => axios.delete(`clients/${id}`).then(res => res.data).catch(err => err)
// delete leads
export const deleteLeads = async (id: string) => axios.delete(`leads/${id}`).then(res => res.data).catch(err => err)

export const createUser = async (user: any) => axios.post(`users`, user).then(res => res.data).catch(err => err)

//statuses
export const createStatus = async (user: any) => axios.post(`statuses`, user).then(res => res.data).catch(err => err)

export const createClient = async (user: any) => axios.post(`clients`, user).then(res => res.data).catch(err => err)

export const createBank = async (user: any) => axios.post(`banks`, user).then(res => res.data).catch(err => err)

//statuses
export const createLeads = async (user: any) => axios.post(`leads`, user).then(res => res.data).catch(err => err)




// Fields 
export const getAllFields = async () => axios.get("fields").then(res => res.data).catch(err => err)

// Fields 
export const getAllCharts = async ({ params }: any) => await axios.get("leads/statistics",params).then(res => res.data).catch(err => err)

export const editField = async ({field, id}: any) => axios.put(`fields/${id}`, field).then(res => res.data).catch(err => err)

export const deleteField = async (id: string) => axios.delete(`fields/${id}`).then(res => res.data).catch(err => err)

export const createField = async (field: any) => axios.post(`fields`, field).then(res => res.data).catch(err => err)



// Locations 
export const getAllLocations = async () => axios.get("locations").then(res => res.data).catch(err => err)

export const editLocation = async ({location, id}: any) => axios.put(`locations/${id}`, location).then(res => res.data).catch(err => err)

export const deleteLocation = async (id: string) => axios.delete(`locations/${id}`).then(res => res.data).catch(err => err)

export const createLocation = async (location: any) => axios.post(`locations`, location).then(res => res.data).catch(err => err)




// Packages 
export const getAllPackages = async () => axios.get("packages").then(res => res.data).catch(err => err)

export const editPackage = async ({pack, id}: any) => axios.put(`packages/${id}`, pack).then(res => res.data).catch(err => err)

export const deletePackage = async (id: string) => axios.delete(`packages/${id}`).then(res => res.data).catch(err => err)

export const createPackage = async (pack: any) => axios.post(`packages`, pack).then(res => res.data).catch(err => err)




// Workers 
export const getAllWorkers = async ({params}: any) => axios.get("leads", {params}).then(res => res.data).catch(err => err)

export const editWorker = async ({worker, id}: any) => axios.put(`workers/${id}`, worker).then(res => res.data).catch(err => err)

// export const deletePackage = async (id) => axios.delete(`packages/${id}`).then(res => res.data).catch(err => err)

// export const createPackage = async (pack) => axios.post(`packages`, pack).then(res => res.data).catch(err => err)
