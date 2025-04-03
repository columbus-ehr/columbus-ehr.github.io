<script lang="ts">
    import { DataSnapshot, off, onChildAdded, onValue, push, ref, serverTimestamp, set } from "firebase/database";
    import { fireDb, getUid } from "../util/firebase.svelte";
    import { MessagePriority, type Notification } from "../util/notification";
    import type { Patient } from "../util/patient";
    import type { Order } from "../util/order";

    let { removeThis, onRemove = $bindable() }: ComponentProps = $props()

    // TODO put this in an external file
    interface User {
        displayName: string,
        role: string
    }

    let users = $state<{ [key: string]: User }>({})
    function changeUsers(snapshot: DataSnapshot) {
        users = snapshot.val()
    }
    let patients = $state<{ [key: string]: Patient }>({})
    function changePatients(snapshot: DataSnapshot) {
        patients = snapshot.val()
    }

    onValue(ref(fireDb, '/users'), changeUsers)
    onValue(ref(fireDb, '/patients'), changePatients)
    onRemove = () => {
        off(ref(fireDb, '/users'), 'value', changeUsers)
        off(ref(fireDb, '/patients'), 'value', changePatients)
    }

    const order = $state<Order>({
        recipient: '',
        patient: '',
        message: '',
    })

    async function onsubmit(e: SubmitEvent) {
        e.preventDefault()

        const key = push(ref(fireDb, `/orders/${order.recipient}`)).key
        await set(ref(fireDb, `/orders/${order.recipient}/${key}`), order)

        removeThis()
    }
</script>

<h1>Send Notification</h1>
<form {onsubmit}>
    <label for="to">Recipient</label>
    <select name="to" bind:value={order.recipient}>
        {#each Object.entries(users) as [uid, user]}
            <option value={uid}>{user.displayName}</option>
        {/each}
    </select>
    <br>

    <label for="patient">Patient</label>
    <select name="patient" bind:value={order.patient}>
        {#each Object.entries(patients) as [pid, patient]}
            <option value={pid}>{patient.name}</option>
        {/each}
    </select>
    <br>

    <label for="message">Message</label>
    <textarea name="message" bind:value={order.message}></textarea>

    <input type="submit" value="Send Notification">
</form>
