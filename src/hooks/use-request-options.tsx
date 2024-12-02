import { useEffect, useRef } from "react";
import axios from "axios";
import { useAuthManager, useClient } from "kubra-ui-lib-auth";
import { AuthHeaders } from "kubra-ui-lib-auth/dist/types";

export const useRequestOptions = () => {
  const authManager = useAuthManager();
  const { client } = useClient();
  const requestInterceptor = useRef<number>();

  useEffect(() => {
    return () => {
      if (requestInterceptor.current !== undefined) {
        axios.interceptors.request.eject(requestInterceptor.current);
      }
    };
  }, []);

  const getRequestHeaders = async () => {
    try {
      const headers = await authManager.getRequestHeaders();
      return headers;
    } catch (err) {
      throw new Error(`Could not retrieve auth headers: ${err}`);
    }
  };

  // if we have an existing interceptor, remove it before adding the new one
  if (requestInterceptor.current !== undefined) {
    axios.interceptors.request.eject(requestInterceptor.current);
  }

  // add authorization token to each request
  requestInterceptor.current = axios.interceptors.request.use(
    async function (config) {
      const authHeaders = await getRequestHeaders();

      for (const key in authHeaders) {
        config.headers.set(key, authHeaders[key as keyof AuthHeaders]);
      }
      // Add other headers that you need here
      config.headers.set("kubra-tenantid", client.id);
      config.headers.set("kubra-clientId", client.id);

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export default useRequestOptions;
