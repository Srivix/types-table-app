import { DroppableLists } from '@/utils/enums'
import { Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { TypeItem } from './TypesComponent'
import { IListProps } from './types/typeslist.types'

const TypesList = ({ droppableId, typesList }: IListProps) => {
  const [search, setSearch] = useState<string>('')

  return (
    <Droppable droppableId={droppableId} direction='vertical'>
      {provided => (
        <>
          <Stack gap={1} margin={2} alignItems='center' ref={provided.innerRef} {...provided.droppableProps}>
            <TextField
              className='text'
              variant='outlined'
              placeholder='Search'
              onChange={search => setSearch(search.target.value)}
              inputProps={{ style: { padding: '4px 12px 4px 12px' } }}
              InputProps={{
                style: {
                  width: 190,
                  border: '4px solid blue',
                  borderRadius: '32px',
                },
              }}
            />
            <Stack
              width={180}
              maxHeight={410}
              alignItems='center'
              gap={1}
              paddingY='8px'
              paddingX='4px'
              border='4px solid blue'
              borderRadius='24px'
              overflow='auto'
              sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
            >
              {typesList &&
                typesList.length > 0 &&
                typesList.map((type, index) => {
                  if (
                    type.names.some(
                      name =>
                        name.language.name === 'es' &&
                        name.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
                    )
                  ) {
                    return <TypeItem key={type.id} {...type} index={index} listType={DroppableLists.TYPESLIST} />
                  }
                })}
            </Stack>
            {provided.placeholder}
          </Stack>
        </>
      )}
    </Droppable>
  )
}

export default TypesList
