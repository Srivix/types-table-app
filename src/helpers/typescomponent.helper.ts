import { ITypeProps } from "@/components/TypesComponent/types/typeslist.types"
import { DamageEffectivenessStatus, DamageEffectivenesses } from "@/utils/enums"

export const getDamageColor = (damage: number) => {
    switch(damage) {
      case DamageEffectivenesses.UNEFFECTIVE:
        return '#404040'
      case DamageEffectivenesses.VERYINEFFECTIVE:
        return '#EB1919'
      case DamageEffectivenesses.INEFFECTIVE:
        return '#E78C00'
      case DamageEffectivenesses.NORMAL:
        return '#45AF00'
      case DamageEffectivenesses.EFFECTIVE:
        return '#003DDF'
      case DamageEffectivenesses.SUPEREFFECTIVE:
        return '#8000DF'
      default:
        return '#A5A5A5'
    }
  }

export const getEffectivenessName = (effectiveness: number) => {
    switch (effectiveness) {
      case DamageEffectivenesses.UNEFFECTIVE:
        return DamageEffectivenessStatus.UNEFFECTIVE
      case DamageEffectivenesses.VERYINEFFECTIVE:
        return DamageEffectivenessStatus.VERYINEFFECTIVE
      case DamageEffectivenesses.INEFFECTIVE:
        return DamageEffectivenessStatus.INNEFECTIVE
      case DamageEffectivenesses.NORMAL:
        return DamageEffectivenessStatus.NORMAL
      case DamageEffectivenesses.EFFECTIVE:
        return DamageEffectivenessStatus.EFFECTIVE
      case DamageEffectivenesses.SUPEREFFECTIVE:
        return DamageEffectivenessStatus.SUPEREFFECTIVE
      default:
        return '-1'
    }
  }

export const getTypeEffectiveness = (enemyTypesList: ITypeProps[], attackType?: ITypeProps) => {

  if( !attackType || enemyTypesList.length <= 0 ){
    return -1
  }

  const noDamage = enemyTypesList.filter(enemyAttack =>
    enemyAttack.damage_relations.no_damage_from.find(type => type.name === attackType.name),
  ).length

  if (noDamage) {
    return 0
  }

  const doubleDamage = enemyTypesList.filter(enemyAttack =>
    enemyAttack.damage_relations.double_damage_from.find(type => type.name === attackType.name),
  ).length

  const halfDamage = enemyTypesList.filter(enemyAttack =>
    enemyAttack.damage_relations.half_damage_from.find(type => type.name === attackType.name),
  ).length

  const resDoubleDamage = doubleDamage ? 2 * doubleDamage : 1

  const resHalfDamage = halfDamage ? 1 / (2 * halfDamage) : 1

  const result = resDoubleDamage * resHalfDamage

  return result
      
}