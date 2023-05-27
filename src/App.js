import Layout from "./components/Layout";
// import CreateProfile from "./components/CreateProfile";
import FormikForm from "./components/forms/FormikForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          path="/createprofile"
          element={
            <Layout>
              <FormikForm />
            </Layout>
          }
        />
        {/* <Layout>
          <FormikForm />
        </Layout> */}
      </Routes>
    </div>
  );
}

export default App;
