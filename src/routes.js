// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import DashboardPage from "views/Dashboard/Dashboard.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
