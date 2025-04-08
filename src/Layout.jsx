import { 
  Outlet,
  ScrollRestoration
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeatureLinks from "./components/FeatureLinks";
import Hero from "./components/Hero";

export default function Layout() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="container">
        
          <ScrollRestoration />
          <Outlet />
        
        </div>
        <FeatureLinks/>
      </main>
      <Footer />
    </>
  )
}