import React, { FC, useState } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { inputRules } from '../../utils/input-rules';
import './EventForm.styl'
import { IUser } from '../../models/IUser';
import { IEvent } from '../../models/IEvent';
import { Moment } from 'moment';
import { useTypedSelector } from '../../hooks/redux';

interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void
}

export const EventForm: FC<EventFormProps> = (props) => {
    const { user } = useTypedSelector(state => state.auth)
    const [ event, setEvent ] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: '',
    } as IEvent)

    const handleDate = (date: Moment | null) => {
        if (date) setEvent({ ...event, date: date.format('YYYY.MM.DD') })
        else console.log('Date not selected');
    }

    const handleForm = () => {
        props.submit({ ...event, author: user.username })
    }

    return (
        <Form onFinish={ handleForm }>
            <Form.Item
                label='Event description'
                name='description'
                rules={ [inputRules.required()] }
            >
                <Input
                    onChange={ e => setEvent({...event, description: e.target.value}) }
                />
            </Form.Item>
            <Form.Item
                label='Event date'
                name='date'
                rules={ [inputRules.required(), inputRules.isDateAfter('Can\'t creating event for the past time')] }
            >
                <DatePicker
                    onChange={ handleDate }
                />
            </Form.Item>
            <Form.Item 
                name='guest'
                label='Event users'
                rules={ [inputRules.required()] }
            >
                <Select
                    style={{ width: 120 }}
                    options={ props.guests.map( guest => ({ value: guest.username, label: guest.username })) }
                    onChange={ (guest: string) => setEvent({...event, guest})  }
                />
            </Form.Item>
            <Row className='event-form__action'>
                <Button type='primary' htmlType='submit'>
                    Create
                </Button>
            </Row>
        </Form>
    );
}