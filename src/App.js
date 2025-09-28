import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PrivateRoutes from "./routes/privateRoutes";
// import Login from "./pages/auth/login";
import LandingPage from "./pages/landingPage";
import Sejarah from "./pages/sejarah";
import VisiMisi from "./pages/visi-misi";
import About from "./pages/about"
import Kurikulum from "./pages/kurikulum";
import Psb from "./pages/informasi/psb";
import NotFound from "./pages/not-found";
import Blog from "./pages/blog"
import TestAuth from "./pages/login_Test";
import UserValidation from "./pages/user-validation";
import Pengumuman from "./pages/pengumuman-PPDB";
import PenerimaanSiswaBaru from "./pages/spmb/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/history" element={<Sejarah/>}/>
        <Route path="/visi-misi" element={<VisiMisi/>}/>
        <Route path="/about-school" element={<About/>}/>
        <Route path="/kurikulum" element={<Kurikulum/>}/>
        <Route path="/informasi-ppdb" element={<Psb/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login" element={<TestAuth/>}/>
        <Route path="/user-validation" element={<UserValidation/>}/>
        <Route path="/pengumuman" element={<Pengumuman/>}/>
        <Route path="spmb" element={<PenerimaanSiswaBaru />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
