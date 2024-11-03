import { Link, Outlet } from "react-router-dom";
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
      </nav>
      <Outlet />
    </main>
  );
};
export default Layout;
