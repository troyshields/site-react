import { 
  Outlet,
  ScrollRestoration
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeatureLinks from "./components/FeatureLinks";

export default function Layout() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="content">
          <ScrollRestoration />
          <Outlet />
        </div>
        <FeatureLinks/>
      </main>
      <Footer />
    </>
  )
}