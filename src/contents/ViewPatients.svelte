<script lang="ts">
    import { DataSnapshot, off, onValue, ref } from 'firebase/database';
    import { type Patient, patientFieldsToStrings } from '../util/patient'
    import { fireDb } from '../util/firebase.svelte';

    let { removeThis, onRemove = $bindable() }: ComponentProps = $props()

    let patients = $state<Patient[]>([])
    function changePatients(snapshot: DataSnapshot) {
        patients = Object.values(snapshot.val())
    }
    onValue(ref(fireDb, '/patients'), changePatients)
    onRemove = () => off(ref(fireDb, '/patients'), 'value', changePatients)
</script>

<h1>View Patients</h1>

<table>
    <thead>
        <tr>
            {#each Object.values(patientFieldsToStrings) as fieldName}
                <th>{fieldName}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each patients as patient}
            <tr>
                {#each Object.keys(patientFieldsToStrings) as key}
                    <td>{patient[key]}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
