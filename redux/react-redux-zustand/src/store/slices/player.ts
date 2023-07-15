import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppSelector } from '..'

interface Course {
  id: number
  modules: {
    id: number
    title: string
    lessons: {
      id: string
      title: string
      duration: string
    }[]
  }[]
}

export interface PlayerState {
  course: Course | null,
  currentModuleIndex: number,
  currentLessonIndex: number,
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<Course>) => {
      state.course = action.payload
    },
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1
      const nextLesson = state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      // Lógica para o autoplay
      // Se existe proxima aula no módulo atual, passa para essa aula
      // Se for a última aula do módulo, passa para a primeira aula do próximo módulo caso ele exista
      // Se o próximo módulo não existir, não faz nada
      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course?.modules[nextModuleIndex]

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

    const currentModule = state.player.course?.modules[currentModuleIndex]
    const currentLesson = state.player.course?.modules[currentModuleIndex].lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}

export const player = playerSlice.reducer

export const { play, start, next } = playerSlice.actions