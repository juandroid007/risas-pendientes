import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'

dayjs.extend(calendar)

const toCalendar = (date: any) => dayjs().calendar(dayjs(date))

export {
  dayjs,
  toCalendar as calendar,
}
