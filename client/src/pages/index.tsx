import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Podium from '../components/Podium';
import Ranking from '../components/Ranking';
import { apiClient } from '../api/http';

const Home: NextPage = ({ users }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <>
      <Head>
        <title>Ranking - Capacitação</title>
      </Head>
      <Layout>
        <Menu />
        <Podium users={users} />
        <Ranking users={users} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  let data;

  await apiClient.get(`/api/users`)
    .then((response) => {
      data = response.data;
    })
    .catch((error) => console.log(error));

  return {
    props: {
      users: data
    }
  };
}

export default Home
