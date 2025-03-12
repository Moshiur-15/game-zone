import NavBer from "../Components/NavBer";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <div className="font-playfair">
      <div className="sticky z-10 top-0 bg-white dark:bg-slate-800 shadow">
        <NavBer />
      </div>
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
