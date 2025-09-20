import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/NavBar";

export default function Layout() {
  return (
    <div className="min-h-dvh bg-[#5A0C0C] text-white">
      <NavBar
        facebook={"https://www.facebook.com/share/15zqgyX4eF/?mibextid=wwXIfr"}
        insta={"https://www.instagram.com/_alessandrocardone_pizza_maker/"}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
