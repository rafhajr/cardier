import type { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => {
  return <h1>Next</h1>
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    redirect: {
      destination: '/cardHome',
      permanent: false,
    },
  }
}
