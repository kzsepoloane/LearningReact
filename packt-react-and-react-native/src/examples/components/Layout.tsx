import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const param = "From Param";
const query = new URLSearchParams({ msg: "From Query" });
const Layout = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/ChapterTwo">Chapter One</Link>
        <span>|</span>
        <Link to="/ChapterThree">Chapter Three</Link>
        <span>|</span>
        <Link to="/ChapterFive">Chapter Five</Link>
        <span> | </span>
        <Link to="/one">One</Link>
        <span> | </span>
        <Link to="/two">Two</Link>
        <span> | </span>
        <Link to="/users">Users</Link>
        <span> | </span>
        <Link to={`echo/${param}`}>Echo Param</Link>
        <span> | </span>
        <Link to={`echo?${query.toString()}`}>Echo Query</Link>
        <span> | </span>
        <Link to="lazy">Lazy Loaded</Link>
        <span> | </span>
        <Link to="suspense">Suspense</Link>
      </nav>
      <Suspense fallback={<FadeLoader color="#36d7b7" />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default Layout;
