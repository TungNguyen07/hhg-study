interface IFetchQuery {
  endpoint: string;
  method?: "get";
  params?: {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: string;
  };
}

export type { IFetchQuery };