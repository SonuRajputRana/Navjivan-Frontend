// import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet, useLocation } from "react-router";
// import AppHeader from "./AppHeader";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import PageHeader from "../pages/NavPages/PageHeader";
import { PageHeaderConfig } from "../config/PageHeaderConfig";
// import Header from "./Header";
//  import Backdrop from "./Backdrop";
//  import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const PageData = PageHeaderConfig[location.pathname];

  return (
    <div className="min-h-screen xl:flex">
      <div className={`flex-1 transition-all duration-300 ease-in-out`} >
        <AppHeader />
        {/* <Header /> */}
        {/* <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6"> */}
        <div className="">
          {!isHomePage ? <PageHeader title={PageData.title} breadcrumb={PageData.breadcrumb}/> : null}
          <Outlet />
        </div>
        <div className="footer">
          <AppFooter />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    // <SidebarProvider>
      <LayoutContent />
    // </SidebarProvider>
  );
};

export default AppLayout;
