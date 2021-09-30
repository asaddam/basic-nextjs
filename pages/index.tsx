import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
// ctrl+shif+o untuk hapus import yg tidak kepakai

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1 className="title">Welcome Ahmad</h1>
    </Layout>
  );
};

export default Home;
