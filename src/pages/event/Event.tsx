import React, { FC, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';
import { CalendarEvent } from '../../components/calendarEvent/CalendarEvent';
import './Event.styl'
import { EventForm } from '../../components/eventForm/EventForm';

export const Event: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <Layout>
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
                <EventForm />
            </Modal>
        </Layout>
    );
}