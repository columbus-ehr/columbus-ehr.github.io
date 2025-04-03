<script lang="ts">
    import { push, ref, serverTimestamp, set } from 'firebase/database'
    import { CheckInLocation, type Patient } from '../util/patient'
    import { fireDb } from '../util/firebase.svelte'
    import { removeContent } from '../lib/globalContent.svelte'

    const { removeThis }: ComponentProps = $props()

    const patient: Patient = {
        name: '',
        checkInLocation: CheckInLocation.primaryCare,
        dateOfBirth: '',
        checkInTime: serverTimestamp(),
        chiefComplaint: ''
    }

    async function onsubmit(e: SubmitEvent) {
        e.preventDefault()

        removeThis()

        const key = push(ref(fireDb, '/patients')).key
        await set(ref(fireDb, `/patients/${key}`), patient)
    }
</script>

<h1>Add Patient</h1>

<form {onsubmit}>
    <label for="name">Patient Name</label>
    <input type="text" name="name" bind:value={patient.name} />
    <br>

    <label for="dateOfBirth">Patient Date of Birth</label>
    <input type="date" name="dateOfBirth" bind:value={patient.dateOfBirth} />
    <br>

    <label for="checkInLocation">Check-in Place</label>
    <select name="checkInLocation" bind:value={patient.checkInLocation}>
        {#each Object.values(CheckInLocation) as location}
            <option value={location}>{location}</option>
        {/each}
    </select>
    <br>

    <label for="chiefComplaint">Chief Complaint</label>
    <textarea name="chiefComplaint" rows="3" cols="40" bind:value={patient.chiefComplaint}></textarea>
    <br>

    <input type=submit value="Add Patient" />
</form>
