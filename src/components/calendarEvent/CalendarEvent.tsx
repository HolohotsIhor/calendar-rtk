import React, { FC } from 'react';
import { Calendar } from 'antd';
import { IEvent } from '../../models/IEvent';
import { Dayjs } from 'dayjs';

interface EventCalendarProps {
    events: IEvent[];
}
export const CalendarEvent: FC<EventCalendarProps> = (props) => {
    const cellRender = (value: Dayjs) => {
        const formatedDate =  value.format('YYYY.MM.DD')
        const currentDayEvents = props.events.filter(event => event.date === formatedDate)
        return (
            <div>
                {currentDayEvents.map((event, index) =>
                    <div key={index}>{event.description}</div>
                )}
            </div>
        );
    };

    return (
        <Calendar
            cellRender={cellRender}
        />
    );
}