
import LangSwitcher from "../../../components/lang";

const TopMenu = () => {
  return (
    <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="flex items-center gap-6 px-6 py-4 text-sm font-medium text-slate-700">
            <LangSwitcher />
        </div>
    </nav>
  );
};

export default TopMenu;
