import Maintenance from "./pages/Maintenance";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reel from "./pages/Reel";
import Footer from "./components/Footer";
import Blog from "./pages/Vlog";

function App() {
  //return <Maintenance />;
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reel" element={<Reel />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
