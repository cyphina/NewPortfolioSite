import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";
import Navbar from "./components/Navbar";
import { Suspense } from "solid-js";
import Footer from "./components/Footer";

const Layout = (props: any) => {
  return (
    <>
      <MetaProvider>
        <Title>Zi's Blog</Title>
      </MetaProvider>
      <Navbar />
      <Suspense>{props.children}</Suspense>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Router root={Layout}>
      <FileRoutes />
    </Router>
  );
}
