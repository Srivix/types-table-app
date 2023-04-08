import { Box, Divider, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import {
  DamageEffectiveness,
  DroppableLists,
  IAttackTypeProps,
  IDragHandlerProps,
  IListProps,
  ITypeProps,
  attackMock,
  damageArray,
  getDamageColor,
  mockSel,
} from './types/typeslist.types'

const TypesList = ({ droppableId, typesList }: IListProps) => {
  const [search, setSearch] = useState('')

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

const TypeItem = ({ id, name, names, color, index, listType }: ITypeProps & { index: number; listType?: string }) => {
  const dragId = listType ? `${listType}-${name}` : name
  const olename = names.find(name => name.language.name === 'es')?.name

  return (
    <Draggable draggableId={dragId} index={index} key={id}>
      {provided => (
        <Box
          data-react-beautiful-dnd-draggable='0'
          data-react-beautiful-dnd-drag-handle='0'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          sx={{
            color: 'white',
            borderRadius: '30px',
            background: color,
            boxShadow: 'inset 3px 3px 3px rgba(255,255,255,.7), inset -2px -2px 2px -1px rgba(0,0,0,.7)',
            textShadow: '2px 2px 2px rgba(0,0,0,.3)',
            width: 150,
            minWidth: 150,
            height: 32,
            minHeight: 32,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'uppercase',
            // styles we need to apply on draggables
            ...provided.draggableProps.style,
            transitionDuration: `!important 0.0001s`,
          }}
        >
          <Typography>{olename}</Typography>
        </Box>
      )}
    </Draggable>
  )
}

const reorder = (list: ITypeProps[], startIndex: number, endIndex: number) => {
  const [removed] = list.splice(startIndex, 1)
  list.splice(endIndex, 0, removed)
  return list
}

const addEnemyTypes = (typeList: ITypeProps[], selectedList: ITypeProps[], index: number) => {
  selectedList.push(typeList[index])
  return selectedList
}

const removeEnemyType = (enemyTypeList: ITypeProps[], index: number) => {
  enemyTypeList.splice(index, 1)
  return enemyTypeList
}

const changeEnemyTypes = (
  typesList: ITypeProps[],
  enemyTypesList: ITypeProps[],
  sourceId: number,
  destinationId: number,
) => {
  enemyTypesList.pop()

  return destinationId > 0 ? [...enemyTypesList, typesList[sourceId]] : [typesList[sourceId], ...enemyTypesList]
}

const handleTypeListDrag = ({
  result,
  typesList,
  enemyTypesList,
  setTypeList,
  setEnemyTypesList,
  setAttackType,
}: IDragHandlerProps) => {
  const { destination, source } = result

  if (destination) {
    switch (destination.droppableId) {
      case DroppableLists.TYPESLIST:
        if (destination.index !== source.index) {
          const list = reorder(typesList, source.index, destination.index)
          setTypeList([...list])
        }
        break
      case DroppableLists.ENEMYTYPELIST:
        if (!enemyTypesList.find(type => type.id === typesList[source.index].id)) {
          const list =
            enemyTypesList.length < 2
              ? addEnemyTypes(typesList, enemyTypesList, source.index)
              : changeEnemyTypes(typesList, enemyTypesList, source.index, destination.index)
          setEnemyTypesList([...list])
        }
        break
      case DroppableLists.ATTACKTYPE:
        setAttackType(typesList[source.index])
      default:
        break
    }
  }
}

const handleEnemyTypeListDrag = ({
  result,
  enemyTypesList,
  setEnemyTypesList,
}: Pick<IDragHandlerProps, 'result' | 'enemyTypesList' | 'setEnemyTypesList'>) => {
  const { destination, source } = result

  const list =
    destination && destination.droppableId === DroppableLists.ENEMYTYPELIST
      ? reorder(enemyTypesList, source.index, destination.index)
      : removeEnemyType(enemyTypesList, source.index)

  setEnemyTypesList([...list])
}

const handleAttackTypeDrag = ({ result, setAttackType }: Pick<IDragHandlerProps, 'result' | 'setAttackType'>) => {
  if (!(result.destination && result.destination.droppableId === DroppableLists.ATTACKTYPE)) {
    setAttackType(undefined)
  }
}

const onDragEndHandler = ({
  result,
  typesList,
  enemyTypesList,
  setTypeList,
  setEnemyTypesList,
  setAttackType,
}: IDragHandlerProps) => {
  switch (result.source.droppableId) {
    case DroppableLists.TYPESLIST:
      handleTypeListDrag({ result, typesList, enemyTypesList, setTypeList, setEnemyTypesList, setAttackType })
      break
    case DroppableLists.ENEMYTYPELIST:
      handleEnemyTypeListDrag({ result, enemyTypesList, setEnemyTypesList })
      break
    case DroppableLists.ATTACKTYPE:
      handleAttackTypeDrag({ result, setAttackType })
    default:
      break
  }
}

interface EffectivenessItem {
  id: string
  label: EffectivenessLabel[]
  list: ITypeProps[]
}

interface EffectivenessLabel {
  lang: string
  content: string
}

const EffectivenessComponent = ({
  enemyTypesList,
  typesList,
}: {
  enemyTypesList: ITypeProps[]
  typesList: ITypeProps[]
}) => {
  const emptyEffectivenessList: EffectivenessItem[] = [
    {
      id: 'noDamage',
      label: [{ lang: 'es', content: 'No efectivo: ' }],
      list: [],
    },
    {
      id: 'veryIneffective',
      label: [{ lang: 'es', content: 'Muy poco efectivo: ' }],
      list: [],
    },
    {
      id: 'ineffective',
      label: [{ lang: 'es', content: 'Poco efectivo: ' }],
      list: [],
    },
    {
      id: 'normal',
      label: [{ lang: 'es', content: 'Normal: ' }],
      list: [],
    },
    {
      id: 'effective',
      label: [{ lang: 'es', content: 'Efectivo: ' }],
      list: [],
    },
    {
      id: 'superEffective',
      label: [{ lang: 'es', content: 'Super efectivo: ' }],
      list: [],
    },
  ]

  const [effectivenessList, setEffectivenessList] = useState(emptyEffectivenessList)

  useEffect(() => {
    typesList.forEach(attackType => {
      const effectiveness = getTypeEffectiveness({ enemyTypesList, attackType })

      const effectivenessAndName = (effectiveness: number) => {
        switch (effectiveness) {
          case DamageEffectiveness.UNEFFECTIVE:
            return 'noDamage'
          case DamageEffectiveness.VERYINEFFECTIVE:
            return 'veryIneffective'
          case DamageEffectiveness.INEFFECTIVE:
            return 'ineffective'
          case DamageEffectiveness.NORMAL:
            return 'normal'
          case DamageEffectiveness.EFFECTIVE:
            return 'effective'
          case DamageEffectiveness.SUPEREFFECTIVE:
            return 'superEffective'
          default:
            return '-1'
        }
      }

      const effectivenessNames = ['noDamage', 'veryIneffective', 'ineffective', 'normal', 'effective', 'superEffective']

      const list = emptyEffectivenessList.map(effectiveItem => {
        if (
          effectivenessNames.find(name => name === effectiveItem.id) &&
          effectivenessAndName(effectiveness) === effectiveItem.id
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

const getTypeEffectiveness = ({
  enemyTypesList,
  attackType,
}: {
  enemyTypesList: ITypeProps[]
  attackType?: ITypeProps
}) => {
  if (attackType && enemyTypesList.length > 0) {
    const noDamage = enemyTypesList.filter(enemyAttack =>
      enemyAttack.damage_relations.no_damage_from.find(type => type.name === attackType.name),
    ).length

    if (noDamage) {
      return 0
    } else {
      const doubleDamage = enemyTypesList.filter(enemyAttack =>
        enemyAttack.damage_relations.double_damage_from.find(type => type.name === attackType.name),
      ).length
      const halfDamage = enemyTypesList.filter(enemyAttack =>
        enemyAttack.damage_relations.half_damage_from.find(type => type.name === attackType.name),
      ).length

      const resDoubleDamage = doubleDamage ? 2 * doubleDamage : 1
      const resHalfDamage = halfDamage ? (resDoubleDamage * 1) / (2 * halfDamage) : resDoubleDamage
      return resHalfDamage
    }
  } else {
    return -1
  }
}

const TypeList = ({ prueba }: { prueba: ITypeProps[] }) => {
  const [typesList, setTypeList] = useState(prueba)
  const [enemyTypesList, setEnemyTypesList] = useState(mockSel)
  const [attackType, setAttackType] = useState(attackMock)
  const [damage, setDamage] = useState(-1)

  useEffect(() => {
    const effectiveness = getTypeEffectiveness({ enemyTypesList, attackType })
    setDamage(effectiveness)
  }, [attackType, enemyTypesList])

  const onDragEnd = (result: DropResult) =>
    onDragEndHandler({ result, typesList, enemyTypesList, setTypeList, setEnemyTypesList, setAttackType })

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Stack direction='row'>
        <TypesList droppableId={DroppableLists.TYPESLIST} typesList={typesList} />
        <Stack direction='column'>
          <Stack direction='row'>
            <AttackType droppableId={DroppableLists.ATTACKTYPE} attackType={attackType} />
            <EnemyTypesList droppableId={DroppableLists.ENEMYTYPELIST} typesList={enemyTypesList} />
          </Stack>
          <DamageIndicator damage={damage} />
          <EffectivenessComponent enemyTypesList={enemyTypesList} typesList={typesList} />
        </Stack>
      </Stack>
    </DragDropContext>
  )
}

export default TypeList
