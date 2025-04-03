<script lang="ts">
    import { DataSnapshot, off, onValue, ref } from "firebase/database";
    import { fireDb, getUid } from "../util/firebase.svelte";
    import type { Notification } from "../util/notification";

    let { removeThis, onRemove = $bindable() }: ComponentProps = $props()

    let notifications = $state<Notification[]>([])

    function changeNotifications(snapshot: DataSnapshot) {
        notifications = Object.values(snapshot.val())
    }
    onValue(ref(fireDb, `/notifications/${getUid()!}`), changeNotifications)
    onRemove = () => off(ref(fireDb, `/notifications/${getUid()!}`), 'value', changeNotifications)
</script>

{#if notifications.length == 0}
    <p>No notifications!</p>
{/if}

{#each notifications as notification}
    <details>
        <summary>From UID {notification.sender}</summary>
        {notification.message}
    </details>
{/each}
