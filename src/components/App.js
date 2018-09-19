import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddExigence from "../containers/AddExigence";
import ContainerExigence from "../containers/ExigenceListe";
import ExportExigence from "../containers/ExportExigence";
const App = () => (
  <div>
    <Header />
    <main role="main" class="container">
      <br />
      <AddExigence />
      <br />
      <ContainerExigence />
      <br />
      <ExportExigence />
    </main>
    <Footer />
  </div>
);
export default App;
