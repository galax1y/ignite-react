import { createSlice } from '@reduxjs/toolkit'

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
    play: (state, action) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    }
  },
})

export const player = playerSlice.reducer

export const { play } = playerSlice.actions