import NavBer from "../Components/NavBer";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <div className="font-exe2">
      <div className="sticky z-10 top-0 bg-white dark:bg-[#080e1b] shadow-lg">
        <NavBer />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
