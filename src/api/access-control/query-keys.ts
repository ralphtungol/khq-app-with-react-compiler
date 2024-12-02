export const clientKeys = {
  allClients: ["allClients"] as const,
  lists: () => [...clientKeys.allClients, "list"] as const,
};
