import { Dispatch, SetStateAction } from "react"
import { DropResult, DroppableId } from "react-beautiful-dnd"

export const enum DroppableLists {
    TYPESLIST = 'typesList',
    ENEMYTYPELIST = 'enemyTypeList',
    ATTACKTYPE = 'attackType',
  }

export const enum DamageEffectiveness {
  UNEFFECTIVE = 0,
  VERYINEFFECTIVE = 1/4,
  INEFFECTIVE = 1/2,
  NORMAL = 1,
  EFFECTIVE = 2,
  SUPEREFFECTIVE = 4
}

export const getDamageColor = (damage: number) => {
  switch(damage) {
    case DamageEffectiveness.UNEFFECTIVE:
      return '#404040'
    case DamageEffectiveness.VERYINEFFECTIVE:
      return '#EB1919'
    case DamageEffectiveness.INEFFECTIVE:
      return '#E78C00'
    case DamageEffectiveness.NORMAL:
      return '#45AF00'
    case DamageEffectiveness.EFFECTIVE:
      return '#003DDF'
    case DamageEffectiveness.SUPEREFFECTIVE:
      return '#8000DF'
    default:
      return '#A5A5A5'
  }
}

export const damageArray = [
  DamageEffectiveness.UNEFFECTIVE, 
  DamageEffectiveness.VERYINEFFECTIVE, 
  DamageEffectiveness.INEFFECTIVE, 
  DamageEffectiveness.NORMAL, 
  DamageEffectiveness.EFFECTIVE,
  DamageEffectiveness.SUPEREFFECTIVE
]

export interface IListProps {
  droppableId: DroppableId
  typesList: ITypeProps[]
}

export interface IAttackTypeProps {
  droppableId: DroppableId
  attackType?: ITypeProps
}

export interface IDragHandlerProps {
  result: DropResult
  typesList: ITypeProps[]
  enemyTypesList: ITypeProps[]
  setTypeList: Dispatch<SetStateAction<ITypeProps[]>>
  setEnemyTypesList: Dispatch<SetStateAction<ITypeProps[]>>
  setAttackType: Dispatch<SetStateAction<ITypeProps | undefined>>  
}

export const mock = [
  {id: '1', color: '#A8A77A'},
  {id: '2', color: '#C22E28'},
  {id: '3', color: '#A98FF3'},
  {id: '4', color: '#A33EA1'},
  {id: '5', color: '#E2BF65'},
  {id: '6', color: '#B6A136'},
  {id: '7', color: '#A6B91A'},
  {id: '8', color: '#735797'},
  {id: '9', color: '#B7B7CE'},
  {id: '10', color: '#EE8130'},
  {id: '11', color: '#6390F0'},
  {id: '12', color: '#7AC74C'},
  {id: '13', color: '#F7D02C'},
  {id: '14', color: '#F95587'},
  {id: '15', color: '#96D9D6'},
  {id: '16', color: '#6F35FC'},
  {id: '17', color: '#705746'},
  {id: '18', color: '#D685AD'}
]
  
export const mockSel: ITypeProps[] = []

export const attackMock: ITypeProps | undefined =  undefined

export interface DamageRelations {
  double_damage_from: Type[]
  double_damage_to: Type[]
  half_damage_from: Type[]
  half_damage_to: Type[]
  no_damage_from: Type[]
  no_damage_to: Type[]
}

export interface Type {
  name: string
}

export interface GameIndex {
  game_index: number
  generation: Generation
}

export interface Generation {
  name: string
}

export interface MoveDamageClass {
  name: string
}

export interface Move {
  name: string
}

export interface Pokemon {
  pokemon: PokemonDetails
  slot: number
}

export interface PokemonDetails {
  name: string
}

export interface Name {
  name: string
  language: {
    name: string
  }
}

export interface ITypeProps {
  id: number
  name: string
  names: Name[]
  color: string
  damage_relations: DamageRelations
  game_indices: GameIndex[]
  generation: Generation
  move_damage_class: MoveDamageClass
  moves: Move[]
  pokemon: Pokemon[]
}
