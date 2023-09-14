import { DroppableLists } from '@/utils/enums'
import { Stack, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { ThemmeContext } from '../Layout/Layout'
import { TypeItem } from './TypesComponent'
import { IListProps } from './types/typeslist.types'

const TypesList = ({ droppableId, typesList }: IListProps) => {
  const [search, setSearch] = useState<string>('')
  const theme = useContext(ThemmeContext)

  return (
    <Droppable droppableId={droppableId} direction='vertical'>
      {provided => (
        <>
          <Stack width={1} gap={1} padding={2} alignItems='center' ref={provided.innerRef} {...provided.droppableProps}>
            <TextField
              className='text'
              variant='outlined'
              placeholder='Buscar'
              onChange={search => setSearch(search.target.value)}
              inputProps={{ style: { padding: '4px 12px 4px 12px' } }}
              InputProps={{
                style: {
                  color: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.light,
                  width: 190,
                  border: `4px solid ${theme.palette.secondary.main}`,
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
              border={`4px solid ${theme.palette.secondary.main}`}
              borderRadius='24px'
              overflow='auto'
              sx={{ '&::-webkit-scrollbar': { display: 'none' }, backgroundColor: theme.palette.primary.light }}
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
