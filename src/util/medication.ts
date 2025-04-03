import { child, DatabaseReference, set } from 'firebase/database'

export enum AdministerMethod {
    Oral,
    Intravenous,
    Intramuscular,
    Rectal,
    Subligual,
    Transdermal,
    Intradermal,
}

export interface Medication {
    name: string,
    administerMethods: Set<AdministerMethod>,

    // This is in milligrams!!!
    dosageAmounts: { [method in AdministerMethod]: number }
}

interface MedicationSendable {
    administerMethods: AdministerMethod[],
    dosageAmounts: { [method in AdministerMethod]: number }
}
export async function medicationUpdate(med: Medication, ref: DatabaseReference) {
    const sendable: MedicationSendable = {
        administerMethods: Array.from(med.administerMethods),
        dosageAmounts: med.dosageAmounts,
    }
    await set(child(ref, med.name), sendable)
}
