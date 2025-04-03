// export enum CheckInLocation {
//     primaryCare = 'Primary care',
//     urgentCare = 'Urgent care',
//     emergencyCare = 'Emergency department',
// }

// export interface Patient {
//     name: string,
//     checkInLocation: CheckInLocation
//     birthday: Date
//     checkInTime: Date,
// }
// export interface PatientSendable {
//     name: string,
//     checkInLocation: string
//     birthday: string
//     checkInTime: string
// }
// export function patientToSendable(p: Patient): PatientSendable {
//     const { name, checkInLocation, birthday, checkInTime } = p
//     return {
//         name, checkInLocation,
//         birthday: birthday.toDateString(),
//         checkInTime: checkInTime.toTimeString()
//     }
// }
// export function patientFromSendable(ps: PatientSendable): Patient {
//     const { name, checkInLocation, birthday, checkInTime } = ps
//     return {
//         name,
//         checkInLocation: <CheckInLocation>checkInLocation,
//         birthday: new Date(birthday),
//         checkInTime: new Date(checkInTime),
//     }
// }
