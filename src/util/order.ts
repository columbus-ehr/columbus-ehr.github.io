export interface Order {
    recipient: string;
    patient: string;
    message: string;
}

export const orderFieldsToStrings: { [key in keyof Order]: string } = {
    recipient: 'Recipient',
    patient: 'Patient',
    message: 'Message'
}
