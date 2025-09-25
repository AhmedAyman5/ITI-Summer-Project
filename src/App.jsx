import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ErrorPage, Home, Products } from "./pages/exportPages";


// function CartPage() {
//   return <h2>Cart Page</h2>;
// }
// function Login() {
//   return <h2>Login Page</h2>;
// }

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
