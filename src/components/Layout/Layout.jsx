// En /components/Layout/Layout.jsx
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export function Layout({ children }) {
  return (
    <div>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  );
}
