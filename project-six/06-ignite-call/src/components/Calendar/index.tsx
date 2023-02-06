import { getWeekDays } from '@/utils/get-week-days'
import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Fevereiro <span>2023</span>
        </CalendarTitle>
        <CalendarActions>
          <button>
            <CaretLeft size={20} />
          </button>
          <button>
            <CaretRight size={20} />
          </button>
        </CalendarActions>
      </CalendarHeader>

      {/* CalendarBody é uma table */}
      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekday) => (
              <th key={weekday}>{weekday}.</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
