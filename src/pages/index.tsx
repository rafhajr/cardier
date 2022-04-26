import type { GetServerSideProps, NextPage } from 'next'
import { parseCookies } from 'nookies'

const Home: NextPage = () => {
  return <h1>Next</h1>
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  if (cookies['@maral.token']) {
    return {
      redirect: {
        destination: '/app/dashboard',
        permanent: false,
      },
    }
  }

  if (!cookies['@maral.token']) {
    return {
      redirect: {
        destination: '/cardHome',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
