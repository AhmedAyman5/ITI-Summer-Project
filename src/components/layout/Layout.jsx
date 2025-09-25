import { Navbar } from "../exportComponents";


function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="position-relative" style={{top: '60px'}}>{children}</main>
    </>
  );
}

export default Layout;
