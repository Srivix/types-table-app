import { ITypeProps } from '@/components/TypeList/types/typeslist.types'
import TypeList from '@/components/TypeList/TypesList'
import { getAllTypes } from '@/services/typelist.service'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

interface IServerSideProps {
  typesList: ITypeProps[]
}

export const getServerSideProps: GetServerSideProps<IServerSideProps> = async () => {
  try {
    const typesList = await getAllTypes()

    return {
      props: {
        typesList: typesList,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

const Home = ({ typesList }: InferGetServerSidePropsType<typeof getServerSideProps>) => <TypeList prueba={typesList} />

export default Home
