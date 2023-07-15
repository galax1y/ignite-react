import { describe, expect, it } from 'vitest'
import { player as reducer, play, next } from './player'

const exampleState = {
  course: {
    modules: [
      {
        id: '1',
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
        id: '2',
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
  },
  currentModuleIndex: 0,
  currentLessonIndex: 0,
}

describe('Player slice', () => {
  it('should be able to play a video', () => {
    
    const state = reducer(exampleState, play([1, 2]))

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(2)
  })

  it('should be able to navigate to the next lesson automatically', () => {
    const state = reducer(exampleState, next())

    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)
  })

  it('should be able to navigate to the next module automatically', () => {
    const state = reducer({
      ...exampleState,
      currentLessonIndex: 1,
    }, next())

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and lesson index if there is no next lessons/modules available', () => {
    const state = reducer({
      ...exampleState,
      currentModuleIndex: 1,
      currentLessonIndex: 1,
    }, next())

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(1)
  })
})