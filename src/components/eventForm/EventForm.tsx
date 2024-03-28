import React, { FC } from 'react';
import { Button, DatePicker, DatePickerProps, Form, Input, Row, Select } from 'antd';
import { inputRules } from '../../utils/input-rules';
import './EventForm.styl'
import { IUser } from '../../models/IUser';

interface EventFormProps {
    guests: IUser[]
}

export const EventForm: FC<EventFormProps> = (props) => {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <Form>
            <Form.Item
                label='Event description'
                name='description'
                rules={ [inputRules.required()] }
            >
                <Input />
            </Form.Item>
            <Form.Item
                label='Event date'
                name='date'
                rules={ [inputRules.required()] }
            >
                <DatePicker onChange={ onChange } />
            </Form.Item>
            <Form.Item>
            <Select
                defaultValue="Slect users"
                style={{ width: 120 }}
                options={
                    props.guests.map( guest => ({ value: guest.username, label: guest.username }))
                }
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