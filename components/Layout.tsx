import React, { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

export const Layout = ({
  children,
  title = "Gautam Paranjape",
}: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/images/favicon.png"></link>
      </Head>
      {children}
    </div>
  );
};
