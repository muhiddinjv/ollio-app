import { useQuery } from "@tanstack/react-query";
import { getAllBanks, getAllCharts, getAllClients, getAllFields, getAllHistories, getAllLocations, getAllPackages, getAllStatus, getAllUsers, getAllWorkers, getMe, getParentStatus, getShops } from "./data.fn";

// Users  


export const useMe = () => useQuery({queryKey: ["auth/profile"], queryFn: getMe})

export const useUsers = () => useQuery({ queryKey: ["users"], queryFn: getAllUsers })

// Client statuses
export const useStatus = () => useQuery({ queryKey: ["get/status"], queryFn: getAllStatus })

export const useClients = () => useQuery({ queryKey: ["get/clients"], queryFn: getAllClients })

export const useBanks = () => useQuery({ queryKey: ["get/banks"], queryFn: getAllBanks })

export const useShops = () => useQuery({ queryKey: ["get/shops"], queryFn: getShops })

export const useParentStatuses = () => useQuery({queryKey: ["get/status/parent"], queryFn: getParentStatus})

export const useLeadsHistory = ({id}: any) => useQuery({queryKey: ["/get/leads/history"], queryFn: getAllHistories})

// Fields 

export const useFields = () => useQuery({ queryKey: ["fields"], queryFn: getAllFields })


export const useCharts = () => useQuery({queryKey: ["leads/statistics"], queryFn: getAllCharts})



// Locations 

export const useLocations = () => useQuery({queryKey: ["locations"], queryFn: getAllLocations})




// Packages 

export const usePackages = () => useQuery({queryKey: ["packages"], queryFn: getAllPackages})



// Workers 

export const useWorkers = () => useQuery({ queryKey: ["leads"], queryFn: getAllWorkers })


// Leads
// export const useLeads = () => useQuery({queryKey: ["/get/leads"], queryFn: getAllWorkers})
