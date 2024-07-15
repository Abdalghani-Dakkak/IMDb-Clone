"use client";
import React from "react";

export default function error({ error, reset }) {
  return (
    <div className="text-center mt-10">
      <h1>Somthing went wrong. Please try again later.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
