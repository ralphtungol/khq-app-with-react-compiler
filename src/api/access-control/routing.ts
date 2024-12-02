import { api } from "config";

export const getRoutes = (host: string) => ({
  readClients: () => {
    return `${host}/clients`;
  },
});

const accessControlRoutes = getRoutes(`${api.accessControlApi.host}`);

export default accessControlRoutes;
