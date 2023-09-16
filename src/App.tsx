import { type Component, lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
const LoginPage = lazy(() => import("./pages/login"));
const HomePage = lazy(() => import("./pages/index"));

const App: Component = () => {
  return (
    <>
      <h1 class="text-lg">hello solid</h1>
      <Routes>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Routes>
    </>
  );
};

export default App;
