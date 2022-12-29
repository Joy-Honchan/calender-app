import { getEveryDateInMonth } from '../utils/generateDates'

export interface EventType {
    priority: 'High' | 'Medium' | 'Low', title: string, time: number
}

export interface DailyDataType {
    date: number,
    dayInWeek: number,
    events: EventType[]
}

export const generateCalenderData = (year: number, month: number) => {
    let eventData: { date: number, events: EventType }[] = [];
    if (localStorage.getItem('calender-data') !== null) {
        eventData = JSON.parse(localStorage.getItem('calender-data') as string)
    }

    return getEveryDateInMonth(year, month).map(dateObj => ({
        date: dateObj.unix(),
        dayInWeek: dateObj.day(),
        events: eventData.filter(event => event.date === dateObj.unix()).map(event => event.events)
    }))
}