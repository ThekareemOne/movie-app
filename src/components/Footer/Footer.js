import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-white mt-5 p-4 text-center"
      style={{ background: "#1c1c1c" }}
    >
      Copyright &copy; {new Date().getFullYear()} MovieApp
    </footer>
  );
}
