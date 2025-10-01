import React from "react";
import { DotLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <DotLoader color="#00A859" className="h-50 w-50" />
    </div>
  );
}
