import Maintenance from "./pages/Maintenance";

function App() {
  return <Maintenance />;

  /* ----------------------------------------------
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
  ----------------------------------------------- */
}

export default App;
