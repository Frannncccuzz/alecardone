import { Outlet } from "react-router-dom";


import { useI18n } from "../I18nProvider";

export default function Layout() {
  const { t } = useI18n();
  
  return (
    <div className="min-h-dvh  text-white bg-[linear-gradient(356deg,rgba(123,30,38,0.89)_35%,rgba(0,0,0,1)_100%)]">
      <Outlet />
    </div>
  );
}
