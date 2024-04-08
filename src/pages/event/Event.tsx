import React, { FC, useEffect, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';
import { CalendarEvent } from '../../components/calendarEvent/CalendarEvent';
import './Event.styl'
import { EventForm } from '../../components/eventForm/EventForm';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/redux';
import { IEvent } from '../../models/IEvent';

export const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { fetchGuests, createEvent, fetchEvents } = useActions()
    const { guests, events} = useTypedSelector( state => state.event )
    const { user } = useTypedSelector(state => state.auth)
    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
        // eslint-disable-next-line
    }, []);

    const addNewEvent = (event: IEvent) => {
        setIsModalOpen(false);
        createEvent(event);
    }

    return (
        <Layout>
            <CalendarEvent events={events}/>
            <Row>
                <Button className='button' onClick={showModal}>Add event</Button>
            </Row>
            <Modal
                title='Add event'
                open={ isModalOpen }
                onOk={ handleOk }
                onCancel={ handleCancel }
                footer={ null }
            >
                <EventForm
                    guests={ guests }
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
}