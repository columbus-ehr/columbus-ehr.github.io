export enum MessagePriority {
    Information = 'Information',
    Warning = 'Warning',
    Critical = 'Critical'
}

export interface Notification {
    date: number | object,
    message: string,
    priority: MessagePriority,
    read: boolean,
    sender: string,
}
