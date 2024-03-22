import React, { FC } from 'react';
import { Button, DatePicker, DatePickerProps, Form, Input, Row } from 'antd';
import { inputRules } from '../../utils/input-rules';
import './EventForm.styl'

export const EventForm: FC  = () => {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <Form>
            <Form.Item
                label='Event description'
                name='description'
                rules={[inputRules.required()]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label='Event date'
                name='date'
                rules={[inputRules.required()]}
            >
                <DatePicker onChange={onChange} />
            </Form.Item>
            <Row className='event-form__action'>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Row>
        </Form>
    );
}