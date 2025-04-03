<script lang="ts">
    import { DataSnapshot, onValue, ref } from "firebase/database";
    import { type Order, orderFieldsToStrings } from "../util/order";
    import { fireDb, getUid } from "../util/firebase.svelte";

    const props: ComponentProps = $props()

    let orders = $state<Record<string, Order>>({})

    function updateOrders(snapshot: DataSnapshot) {
        console.log('ON>>>>>>')
        orders = snapshot.val()
        console.log(orders)
    }
    onValue(ref(fireDb, `/orders/${getUid()}`), updateOrders)
</script>

<h1>Received Orders</h1>

{#if Object.keys(orders).length == 0}
<p>There are currently no orders.</p>
{:else}

<table>
    <thead>
        <tr>
            {#each Object.values(orderFieldsToStrings) as field}
                <th>{field}</th> 
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each Object.values(orders) as order}
            <tr>
                {#each Object.keys(orderFieldsToStrings) as field}
                    <td>{order[field]}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

{/if}
