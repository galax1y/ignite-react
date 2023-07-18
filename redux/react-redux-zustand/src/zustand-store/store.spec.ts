import { beforeEach, describe, expect, it } from 'vitest'
import { useStore } from '.'

const course = {
  id: 1,
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        {
          id: 'd6ie3PEmAr4',
          title: 'Bagel 1',
          duration: '02:43',
        },
        {
          id: 'tLfrU7ooi7s',
          title: 'Marinaul',
          duration: '30:01',
        }
      ]
    },
    {
      id: 2,
      title: 'Terminando com React',
      lessons: [
        {
          id: 'd6ie3PEmAr4',
          title: 'Bagel 3',
          duration: '02:43',
        },
        {
          id: 'tLfrU7ooi7s',
          title: 'Marinaul',
          duration: '30:01',
        }
      ]
    }
  ],
}

const initialState = useStore.getState()

describe('Zustand Store', () => {

  beforeEach(() => {
    // Reinicializando o estado antes de começar cada teste
    useStore.setState(initialState)
  })

  it('should be able to play', () => {
    const { play } = useStore.getState()

    play([1, 2])

    const { currentModuleIndex, currentLessonIndex } = useStore.getState()
    
    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })

  it('should be able to navigate to the next lesson automatically', () => {
    useStore.setState({ course })

    const { next } = useStore.getState()

    next()

    const { currentModuleIndex, currentLessonIndex } = useStore.getState()

    expect(currentModuleIndex).toEqual(0)
    expect(currentLessonIndex).toEqual(1)
  })

  it('should be able to navigate to the next module automatically', () => {
    useStore.setState({
      course,
      currentModuleIndex: 0,
      currentLessonIndex: 1,
    })

    const { next } = useStore.getState()

    next()

    const { currentModuleIndex, currentLessonIndex } = useStore.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and lesson index if there is no next lessons/modules available', () => {
    useStore.setState({
      course,
      currentModuleIndex: 1,
      currentLessonIndex: 1,
    })

    const { next } = useStore.getState()

    next()

    const { currentModuleIndex, currentLessonIndex } = useStore.getState()

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(1)
  })
})