import { DEFAULT_LIMIT, DEFAULT_PAGE } from "constant";
import { IEmployee, IFetchQuery } from "interface";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const HOST = process.env.REACT_APP_API_HOST;

export const useFetch = (config: IFetchQuery) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IEmployee[]>([]);
  const [total, setTotal] = useState<number>(0)

  const {
    endpoint = "",
    method = "get",
    params = {
      limit: DEFAULT_LIMIT,
      page: DEFAULT_PAGE,
      sortBy: "createdAt",
      order: "desc"
    }
  } = config;

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const url = `${HOST}/${endpoint}`
    const { data } = await axios({
      url,
      params,
      method
    });
    setData(data.items);
    setTotal(data.count)
    setIsLoading(false);
  }, [params]);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, total, refetch: fetchData };
}
