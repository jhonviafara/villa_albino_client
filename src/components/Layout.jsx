import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col text-green-500 ">
      <div className="h-16 w-full border-b border-transparent shadow-lg shadow-green-500 sticky top-0 z-50">
        <Header/>
      </div>
      <div className="h-full w-full">
      <main>
        <Outlet />
      </main>
      </div>
    </div>
  );
}

export default Layout;
