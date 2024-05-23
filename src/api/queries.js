import { useQuery } from "@tanstack/react-query";
import { getAllCharts, getAllClients, getFields, getAllHistories, getLocations, getAllUsers, getStaff, getProfile, getParentStatus } from "./requests";

// Users  
export const useMe = () => useQuery({queryKey: ["auth/profile"], queryFn: getProfile})
export const useUsers = () => useQuery({ queryKey: ["users"], queryFn: getAllUsers })

// Client statuses
export const useClients = () => useQuery({ queryKey: ["clients"], queryFn: getAllClients })
export const useParentStatuses = () => useQuery({queryKey: ["status/parent"], queryFn: getParentStatus})
export const useLeadsHistory = ({id}) => useQuery({queryKey: ["leads/history"], queryFn: getAllHistories})

// Fields 
export const useFields = () => useQuery({ queryKey: ["fields"], queryFn: getFields })
export const useCharts = () => useQuery({queryKey: ["leads/statistics"], queryFn: getAllCharts})

// Locations 
export const useLocations = () => useQuery({queryKey: ["locations"], queryFn: getLocations})

// Workers 
export const useStaff = () => useQuery({ queryKey: ["staff"], queryFn: getStaff })
