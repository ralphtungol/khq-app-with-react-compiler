import { useQuery } from "@tanstack/react-query";
import { clientKeys } from "./query-keys";
import { readClients } from "./requests";

export const useClients = () => {
  return useQuery({
    queryKey: [...clientKeys.allClients],
    queryFn: () => readClients(),
    refetchOnWindowFocus: false,
  });
};
