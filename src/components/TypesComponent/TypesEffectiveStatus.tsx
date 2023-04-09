import { getEffectivenessName, getTypeEffectiveness } from '@/helpers/typescomponent.helper'
import { effectivenessNames, emptyEffectivenessList } from '@/utils/typescomponent.utils'
import { Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { EffectivenessItem, ITypeProps } from './types/typeslist.types'

const TypesEffectiveStatus = ({
  enemyTypesList,
  typesList,
}: {
  enemyTypesList: ITypeProps[]
  typesList: ITypeProps[]
}) => {
  const [effectivenessList, setEffectivenessList] = useState<EffectivenessItem[]>(emptyEffectivenessList)

  useEffect(() => {
    emptyEffectivenessList.map(effectiveness => (effectiveness.list = []))

    typesList.forEach(attackType => {
      const effectiveness = getTypeEffectiveness(enemyTypesList, attackType)

      const list = emptyEffectivenessList.map(effectiveItem => {
        if (
          effectivenessNames.find(name => name === effectiveItem.id) &&
          getEffectivenessName(effectiveness) === effectiveItem.id
        ) {
          effectiveItem.list.push(attackType)
        }
        return effectiveItem
      })

      setEffectivenessList([...list])
    })
  }, [enemyTypesList])

  return (
    <Stack direction='column'>
      {effectivenessList &&
        effectivenessList.map(item => (
          <Typography key={item.id}>
            {item.label.find(label => label.lang === 'es')?.content}
            {item.list.map(content => content.names.find(name => name.language.name === 'es')?.name).join(', ')}
          </Typography>
        ))}
    </Stack>
  )
}

export default TypesEffectiveStatus
