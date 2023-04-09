import { DroppableLists } from '@/utils/enums'
import { Stack, Typography } from '@mui/material'
import { Droppable } from 'react-beautiful-dnd'
import { TypeItem } from './TypesComponent'
import { IListProps } from './types/typeslist.types'

const EnemyTypesList = ({ droppableId, typesList }: IListProps) => (
  <Droppable droppableId={droppableId} direction='horizontal'>
    {provided => (
      <>
        <Stack height={80} margin={2} alignItems='center' ref={provided.innerRef} {...provided.droppableProps}>
          <Typography>Enemy Types</Typography>
          <Stack
            alignItems='center'
            justifyContent='flex-start'
            gap={2}
            paddingX='8px'
            direction='row'
            height={38}
            minHeight={38}
            width={316}
            minWidth={316}
            border='4px solid blue'
            borderRadius='24px'
            overflow='auto'
            sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
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

export default EnemyTypesList
