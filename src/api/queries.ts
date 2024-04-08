import { useQuery } from "@tanstack/react-query";
import { getAllCharts, getAllClients, getAllFields, getAllHistories, getAllLocations, getAllPackages, getAllStatus, getAllUsers, getAllWorkers, getProfile, getParentStatus } from "./requests";

// Users  
export const useMe = () => useQuery({queryKey: ["auth/profile"], queryFn: getProfile})
export const useUsers = () => useQuery({ queryKey: ["users"], queryFn: getAllUsers })

// Client statuses
export const useStatus = () => useQuery({ queryKey: ["get/status"], queryFn: getAllStatus })
export const useClients = () => useQuery({ queryKey: ["get/clients"], queryFn: getAllClients })
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
