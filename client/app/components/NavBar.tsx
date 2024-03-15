import React from "react";

export const NavBar: React.FC<{ page: string }> = ({ page }) => {
  return (
    <div className="fixed pt-32 ml-48 left-0 top-0 h-screen w-fit">
      <ul className="list-none space-y-7 p-0">
        <li>
          <a
            className={`${
              page === "performance" ? "font-extrabold text-xl" : ""
            } p-4 cursor-pointer hover:bg-white hover:text-black w-fit transition duration-200 rounded-xl`}
            href="/performance"
          >
            Performance
          </a>
        </li>
        <li>
          <a
            className={`${
              page === "invoice" ? "font-extrabold text-xl" : ""
            } p-4 cursor-pointer hover:bg-white hover:text-black w-fit transition duration-200 rounded-xl`}
            href="/"
          >
            List of Invoices
          </a>
        </li>
      </ul>
    </div>
  );
};
