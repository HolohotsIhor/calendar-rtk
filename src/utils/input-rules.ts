export const inputRules = {
    required: (message: string = 'Required field' ) => ({
        required: true,
        message
    })
}