import "../styles/globals.css";

import React, { useEffect } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

import { AuthContextProvider } from "@/context/AuthContext";

import Layout from "../components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {});
  return (
    <>
      <Head>
        <title>CAE Sample App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </>
  );
};

export default App;
