import React from "react";
import Head from "next/head";

export default function Header() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>

      <style jsx>
        {`
          .mainlogo {
            max-width: 100%;
            max-height: 80px;
            display: flex;
            margin-left: auto;
            margin-right: auto;
            padding: 10px 0 20px 0;
          }
        `}
      </style>
    </React.Fragment>
  );
}
