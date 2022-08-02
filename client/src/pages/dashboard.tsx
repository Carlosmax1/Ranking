import Head from "next/head";
import { 
  ContainerMenu, 
  LayoutMenuDashboard, 
  Container, 
  TitleDashboard
} from "../../styles/dashboardStyle";
import User from "../components/User";
import type { GetServerSideProps, InferGetServerSidePropsType} from 'next';
import { apiClient } from "../api/http";

export default function Dashboard({users}: InferGetServerSidePropsType<typeof getServerSideProps>){
  return(
    <> 
      <Head> 
        <title>Dashboard - Ranking</title>
      </Head>
      <LayoutMenuDashboard>
        <ContainerMenu>
        </ContainerMenu>
        <Container>
          <TitleDashboard>Dashboard</TitleDashboard>
          <User users={users} />
        </Container>
      </LayoutMenuDashboard>
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