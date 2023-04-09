import { DroppableLists } from '@/utils/enums'
import { Stack, Typography } from '@mui/material'
import { Droppable } from 'react-beautiful-dnd'
import { TypeItem } from './TypesComponent'
import { IAttackTypeProps } from './types/typeslist.types'

const AttackType = ({ droppableId, attackType }: IAttackTypeProps) => (
  <Droppable droppableId={droppableId} direction='horizontal'>
    {provided => (
      <>
        <Stack margin={2} height={80} alignItems='center' ref={provided.innerRef} {...provided.droppableProps}>
          <Typography>Your Attack Type</Typography>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            marginBottom={1}
            overflow='auto'
            width={162}
            minWidth={162}
            height={38}
            minHeight={38}
            border='4px solid blue'
            borderRadius='24px'
            sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
          >
            {attackType && (
              <TypeItem key={attackType.id} {...attackType} index={0} listType={DroppableLists.ATTACKTYPE} />
            )}
          </Stack>
          {provided.placeholder}
        </Stack>
      </>
    )}
  </Droppable>
)

export default AttackType
