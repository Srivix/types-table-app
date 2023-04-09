import { getDamageColor } from '@/helpers/typescomponent.helper'
import { damageArray } from '@/utils/typescomponent.utils'
import { Divider, Stack, Typography } from '@mui/material'

const DamageIndicator = ({ damage }: { damage: number }) => (
  <Stack
    divider={<Divider variant='middle' orientation='vertical' />}
    direction='row'
    justifyContent='center'
    alignItems='center'
    sx={{ marginY: 2, color: 'white' }}
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
          background: damage === damageIndicator ? getDamageColor(damageIndicator) : '#A5A5A5',
          boxShadow: 'inset 3px 3px 3px rgba(255,255,255,.7), inset -2px -2px 2px -1px rgba(0,0,0,.7)',
          textShadow: '2px 2px 2px rgba(0,0,0,.3)',
        }}
      >
        {`x${damageIndicator}`}
      </Typography>
    ))}
  </Stack>
)

export default DamageIndicator
