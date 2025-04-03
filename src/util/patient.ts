export enum CheckInLocation {
    primaryCare = 'Primary care',
    urgentCare = 'Urgent care',
    emergencyCare = 'Emergency department',
}
export interface Patient {
    name: string,
    checkInLocation: CheckInLocation
    dateOfBirth: string,
    checkInTime: number | object,
    chiefComplaint: string,
}
export const patientFieldsToStrings: { [key in keyof Patient]: string } = {
    name: 'Name',
    checkInLocation: 'Check-In Location',
    dateOfBirth: 'Date of Birth',
    checkInTime: 'Check-In Time',
    chiefComplaint: 'Chief Complaint'
}
