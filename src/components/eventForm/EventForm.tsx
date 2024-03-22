import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { inputRules } from '../../utils/input-rules';

export const EventForm: FC  = () => {
    return (
        <Form>
            <Form.Item
                label='Event description'
                name='description'
                rules={[inputRules.required()]}
            >
                <Input />
            </Form.Item>
        </Form>
    );
}