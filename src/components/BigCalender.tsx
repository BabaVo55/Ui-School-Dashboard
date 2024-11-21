'use client'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import {calendarEvents} from '@/lib/data'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK)
    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView)
    }
    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["month", "work_week", "day"]}
            view={view}
            style={{ height: '98%' }}
            onView={handleOnChangeView}
            min={new Date(2024, 7, 12, 8, 0, 0)} // Matches event range
            max={new Date(2024, 7, 16, 17, 0, 0)} // Matches event range
        />
    )
}

export default BigCalendar
