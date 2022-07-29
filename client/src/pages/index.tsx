import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Podium from '../components/Podium';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ranking - Capacitação</title>
      </Head>
      <Layout>
        <Menu />
        <Podium />
      </Layout>
    </>
  );
}

export default Home
