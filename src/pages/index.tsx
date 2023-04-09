import { ITypeProps } from '@/components/TypesComponent/types/typeslist.types'
import TypeList from '@/components/TypesComponent/TypesComponent'
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

const Home = ({ typesList }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <TypeList allTypesList={typesList} />
)

export default Home
