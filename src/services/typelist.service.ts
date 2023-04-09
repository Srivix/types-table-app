import { ITypeProps } from '@/components/TypesComponent/types/typeslist.types'
import { typesIdsList } from '@/utils/typescomponent.utils'

export const getAllTypes = async () => {
  
  try{

    const promises =  typesIdsList.map( item => {
      const type = fetch(`https://pokeapi.co/api/v2/type/${item.id}`,{method: 'GET'}).then(res => res.json())
      type.then(typeItem => typeItem.color = item.color)
      return type
    })

    const typos: ITypeProps[] = await Promise.all(promises)

    return typos

  }catch(err){
    console.error(err)
    return []
  }
}