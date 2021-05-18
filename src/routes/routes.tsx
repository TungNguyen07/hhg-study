import EmployeesPage from "pages/Employee";
import Counter from "pages/Counter";
import { IRouter } from "interface"
import Home from "pages/Home";

const routes: IRouter[] = [
  {
    path: "/",
    isExact: true,
    Component: Home,
  },
  {
    path: "/counter",
    isExact: true,
    Component: Counter,
  },
  {
    path: "/employees",
    isExact: true,
    Component: EmployeesPage,
  },
];

export default routes;