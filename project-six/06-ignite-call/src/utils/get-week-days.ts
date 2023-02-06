interface getWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: getWeekDaysParams) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekDay) => {
      // Se o parâmetro short for true, retorna só as primeiras 3 letras dos dias da semana maiúsculas
      if (short) {
        return weekDay.substring(0, 3).toUpperCase()
      }
      // Senão retorna os dias da semana por extenso com a primeira letra maiúscula
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}
