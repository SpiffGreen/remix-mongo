import { Outlet, LiveReload, Link, Links, Meta } from "@remix-run/react";
import React from "react";
import styles from "./styles/output.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta() {
  const description = "Mongodb, heroku, tailwindcss stack for Remix";
  const keywords = "remix, react, mongodb, tailwindcss, heroku";

  return {
    description,
    keywords
  }
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

type iDocType = {
  children: React.ReactNode;
  title?: string;
};

function Document({ children, title }: iDocType) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{title ? title : "The Remix App"}</title>
      </head>
      <body>
        {children}
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="border-b border-b-zinc-300 px-2">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center p-2">
            <Link to="/">Logo</Link>

            <ul className="flex justify-end min-w-[10rem] gap-10">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main>{children}</main>

      <footer className="bg-zinc-300 text-zinc-600 text-center p-2">
        Built with <span className="text-red-500">&hearts;</span> By Remix
      </footer>
    </>
  );
}
