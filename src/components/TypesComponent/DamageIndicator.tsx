import { getDamageColor } from '@/helpers/typescomponent.helper'
import { damageArray } from '@/utils/typescomponent.utils'
import { Divider, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { ThemmeContext } from '../Layout/Layout'

const DamageIndicator = ({ damage }: { damage: number }) => {
  const theme = useContext(ThemmeContext)

  return (
    <Stack
      width={{ sm: 490, xs: 340 }}
      divider={<Divider variant='middle' orientation='vertical' />}
      direction='row'
      justifyContent='center'
      alignItems='center'
      marginY={2}
    >
      {damageArray.map(damageIndicator => (
        <Typography
          key={damageIndicator}
          display='flex'
          justifyContent='center'
          alignItems='center'
          height={70}
          width={80}
          sx={{
            color: damage === damageIndicator ? theme.palette.common.white : theme.palette.common.black,
            border: '1px solid black',
            background: damage === damageIndicator ? getDamageColor(damageIndicator) : theme.palette.primary.light,
            boxShadow: 'inset 3px 3px 3px rgba(255,255,255,.7), inset -2px -2px 2px -1px rgba(0,0,0,.7)',
            textShadow: damage === damageIndicator ? '2px 2px 2px rgba(0,0,0,.3)' : 'none',
          }}
        >
          {`x${damageIndicator}`}
        </Typography>
      ))}
    </Stack>
  )
}

export default DamageIndicator
