import { Dayjs } from 'dayjs';
import { now } from 'moment';

export const inputRules = {
    required: (message: string = 'Required field' ) => ({
        required: true,
        message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Dayjs) {
            if (value.isAfter(now())) {
                return Promise.resolve()
            }
            return Promise.reject(new Error(message))
        }
    })
}