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
              title: 'Bagel',
              duration: '02:43',
            }
          ]
        }
      ],
    },
  },

  reducers: {},
})

export const player = playerSlice.reducer