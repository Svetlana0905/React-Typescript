import { Link } from "react-router-dom";

export const BottomMenu: React.FC = () => {
  return (
    <article className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white shadow-slate-400/50 shadow-md">
      <span className="font-bold">React Typescript 2022</span>

      <div className="nav-bar">
        <Link to="/" className="mr-2">
          Home
        </Link>
        <Link to="product" className="mr-2">
          Products
        </Link>
        <Link to="about">About</Link>
      </div>
    </article>
  );
};
