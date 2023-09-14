import { DroppableLists } from '@/utils/enums'
import { Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { ThemmeContext } from '../Layout/Layout'
import { TypeItem } from './TypesComponent'
import { IAttackTypeProps } from './types/typeslist.types'

const AttackType = ({ droppableId, attackType }: IAttackTypeProps) => {
  const theme = useContext(ThemmeContext)

  return (
    <Droppable droppableId={droppableId} direction='horizontal'>
      {provided => (
        <Stack margin={2} height={80} alignItems='center' ref={provided.innerRef} {...provided.droppableProps}>
          <Typography
            sx={{ textShadow: theme.palette.mode === 'dark' ? '2px 2px 2px rgba(0,0,0,.3)' : '' }}
            color={theme.palette.primary.contrastText}
          >
            El tipo de tu ataque
          </Typography>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            marginBottom={1}
            overflow='auto'
            width={145}
            height={38}
            minHeight={38}
            border={`4px solid ${theme.palette.secondary.main}`}
            borderRadius='24px'
            sx={{ '&::-webkit-scrollbar': { display: 'none' }, backgroundColor: theme.palette.primary.light }}
          >
            {attackType && (
              <TypeItem key={attackType.id} {...attackType} index={0} listType={DroppableLists.ATTACKTYPE} />
            )}
          </Stack>
          {provided.placeholder}
        </Stack>
      )}
    </Droppable>
  )
}

export default AttackType
