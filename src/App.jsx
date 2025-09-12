import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import BlogContent from "./components/BlogContent";
import BlogCreate from "./components/BlogCreate";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlogProvider from "./BlogProvider";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogContent />} />
          <Route path="/blog/create" element={<BlogCreate />} />
        </Routes>
        <Footer />
      </BlogProvider>
    </BrowserRouter>
  );
}
