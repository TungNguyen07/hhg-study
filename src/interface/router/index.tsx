interface IRouter {
  path: string;
  isExact?: boolean;
  Component: (props: any) => JSX.Element;
}

export type { IRouter };