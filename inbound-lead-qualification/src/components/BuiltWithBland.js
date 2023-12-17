import React from "react";

// Displays top-left banner about Bland AI
const BuiltWithBland = () => (
  <div className="absolute top-12 left-12 p-4 rounded border hover:scale-105 hover:shadow-lg duration-200 bg-white">
    <p>
      Call inbound leads using{" "}
      <a href="https://bland.ai" className="font-bold">
        Bland AI
      </a>
      <br />
      <br />
      View our{" "}
      <a
        href="https://docs.bland.ai"
        className="text-blue-500 hover:underline text-underline"
      >
        docs
      </a>
      <br />
      Access the{" "}
      <a
        href="https://app.bland.ai"
        className="text-blue-500 hover:underline text-underline"
      >
        dev portal
      </a>{" "}
      (get your API key)
    </p>
  </div>
);

export default BuiltWithBland;
