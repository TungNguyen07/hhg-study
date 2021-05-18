import { useCallback, useState } from "react";
import axios from "axios";

const HOST = process.env.REACT_APP_API_HOST;

export const usePost = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestStatus, setRequestStatus] = useState<number>(0);

  const postData = useCallback(async (endpoint: string, body: any) => {
    setIsLoading(true);
    setRequestStatus(0);
    const url = `${HOST}/${endpoint}`
    const { status } = await axios({
      url,
      data: JSON.stringify(body),
      method: "post"
    });
    setRequestStatus(status);
    setIsLoading(false);
  }, []);

  return { postData, isLoading, status: requestStatus };
}
