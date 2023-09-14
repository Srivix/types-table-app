import { DroppableLists } from '@/utils/enums'
import { Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { ThemmeContext } from '../Layout/Layout'
import { TypeItem } from './TypesComponent'
import { IListProps } from './types/typeslist.types'

const EnemyTypesList = ({ droppableId, typesList }: IListProps) => {
  const theme = useContext(ThemmeContext)

  return (
    <Droppable droppableId={droppableId} direction='horizontal'>
      {provided => (
        <>
          <Stack height={80} margin={2} alignItems='center' ref={provided.innerRef} {...provided.droppableProps}>
            <Typography
              sx={{ textShadow: theme.palette.mode === 'dark' ? '2px 2px 2px rgba(0,0,0,.3)' : '' }}
              color={theme.palette.primary.contrastText}
            >
              Tipos del enemigo
            </Typography>
            <Stack
              alignItems='center'
              gap={2}
              direction='row'
              height={38}
              minHeight={38}
              width={300}
              border={`4px solid ${theme.palette.secondary.main}`}
              borderRadius='24px'
              overflow='auto'
              sx={{ '&::-webkit-scrollbar': { display: 'none' }, backgroundColor: theme.palette.primary.light }}
            >
              {typesList.map((type, index) => (
                <TypeItem key={type.id} {...type} index={index} listType={DroppableLists.ENEMYTYPELIST} />
              ))}
            </Stack>
            {provided.placeholder}
          </Stack>
        </>
      )}
    </Droppable>
  )
}

export default EnemyTypesList
