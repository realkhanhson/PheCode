import Layout from "../components/Layout";
import Head from "next/head";
import { Container } from "@material-ui/core";

export default function PageNotFound() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Head>
          <title>404 Not Found</title>
          <meta property="og:title" content="Luzshine" key="title" />
        </Head>
        <img src="https://i.imgur.com/1gEdKVZ.jpeg" />
      </Container>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          display: flex;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </Layout>
  );
}
