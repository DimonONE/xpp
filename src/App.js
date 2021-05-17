import React, { Suspense } from "react";
import "./App.css";
import { HeadPage } from "./pages/HeadPage/HeadPage";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <HeadPage />
      </div>
    </Suspense>
  );
}

export default App;
