/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center mt-16">
      <img className="h-52" src="spinner.svg" alt="Loading..." />
    </div>
  );
}
