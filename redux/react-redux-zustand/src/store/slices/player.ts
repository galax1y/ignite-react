import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../lib/axios'
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
  isLoading: boolean,
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: true,
}

export const loadCourse = createAsyncThunk(
  'player/load',
  async () => {
    const response = await api.get('/courses/1')
    
    return response.data
  }
)

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
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
  extraReducers(builder) {
    builder.addCase(loadCourse.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.course = action.payload
      state.isLoading = false
    })
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

export const { play, next } = playerSlice.actions