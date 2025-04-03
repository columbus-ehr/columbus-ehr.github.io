<script lang="ts">
    import { DataSnapshot, off, onChildAdded, onValue, push, ref, serverTimestamp, set } from "firebase/database";
    import { fireDb, getUid } from "../util/firebase.svelte";
    import { MessagePriority, type Notification } from "../util/notification";

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
    onValue(ref(fireDb, '/users'), changeUsers)
    onRemove = () => off(ref(fireDb, '/users'), 'value', changeUsers)

    let recipient = $state('')
    const notification = $state<Notification>({
        date: serverTimestamp(),
        message: '',
        priority: MessagePriority.Information,
        read: false,
        sender: getUid()!
    })

    async function onsubmit(e: SubmitEvent) {
        e.preventDefault()

        const key = push(ref(fireDb, `/notifications/${recipient}`)).key
        await set(ref(fireDb, `/notifications/${recipient}/${key}`), notification)
    }
</script>

<h1>Send Notification</h1>
<form {onsubmit}>
    <label for="to">Recipient</label>
    <select name="to" bind:value={recipient}>
        {#each Object.entries(users) as [uid, user]}
            <option value={uid}>{user.displayName}</option>
        {/each}
    </select>

    <label for="message">Message</label>
    <textarea name="message" bind:value={notification.message}></textarea>

    <input type="submit" value="Send Notification">
</form>
