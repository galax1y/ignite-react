import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppSelector } from '..'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
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
  },

  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1
      const nextLesson = state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      // Lógica para o autoplay
      // Se existe proxima aula no módulo atual, passa para essa aula
      // Se for a última aula do módulo, passa para a primeira aula do próximo módulo caso ele exista
      // Se o próximo módulo não existir, não faz nada
      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course.modules[nextModuleIndex]

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0
        }
      }
    },
  },
})

export const useCurrentLesson = () => {
  return useAppSelector(state => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentModule = state.player.course.modules[currentModuleIndex]
    const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}

export const player = playerSlice.reducer

export const { play, next } = playerSlice.actions