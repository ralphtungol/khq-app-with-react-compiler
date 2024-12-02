import axios from "axios";
import Routes from "./routing";

export const readClients = async (): Promise<any[]> => {
  const response = await axios.get(Routes.readClients());

  return response.data.content || [];
};
