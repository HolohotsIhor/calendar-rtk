import React, { FC, useEffect, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';
import { CalendarEvent } from '../../components/calendarEvent/CalendarEvent';
import './Event.styl'
import { EventForm } from '../../components/eventForm/EventForm';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/redux';

export const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { fetchGuests, createEvent } = useActions()
    const { guests, events} = useTypedSelector( state => state.event )

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    useEffect(() => {
        fetchGuests()
    }, [fetchGuests]);

    return (
        <Layout>
            {JSON.stringify(events)}
            <CalendarEvent events={[]}/>
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
                    submit={ event => createEvent(event)}
                />
            </Modal>
        </Layout>
    );
}