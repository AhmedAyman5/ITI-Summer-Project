import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container-fluid ">{children}</main>
    </>
  );
}

export default Layout;
