<script lang="ts">
    import type { Component } from "svelte";
    import MenuList from "./MenuList.svelte";
    import AddPatient from "../contents/AddPatient.svelte";
    import ViewPatients from "../contents/ViewPatients.svelte";
    import SendNotification from "../contents/SendNotification.svelte";
    import ViewNotifications from "../contents/ViewNotifications.svelte";
    import ExamMaker from "../contents/ExamMaker.svelte";
    import { signOut } from "firebase/auth";
    import { fireAuth } from "../util/firebase.svelte";
    import SendOrder from "../contents/SendOrder.svelte";
    import ViewOrders from "../contents/ViewOrders.svelte";

    interface Launcher {
        name: string,
        opens: Component<ComponentProps>,
    }

    const launcherTree: { [name: string]: Launcher[] } = {
        Patient: [
            {
                name: 'Add Patient',
                opens: AddPatient
            },
            {
                name: 'View Patients',
                opens: ViewPatients
            }
        ],
        Notifications: [
            {
                name: 'Send Notification',
                opens: SendNotification
            },
            {
                name: 'View Notifications',
                opens: ViewNotifications
            }
        ],
        Exams: [
            {
                name: 'Create Exam',
                opens: ExamMaker
            }
        ],
        Orders: [
            {
                name: 'Send Order',
                opens: SendOrder
            },
            {
                name: 'View Orders',
                opens: ViewOrders
            }
        ]
    }
</script>

<div id="root">
    {#each Object.entries(launcherTree) as [name, launchers]}
        <div id="launcher">
            <div id="name">{name}</div>
            <div id="menu-list">
                <MenuList {launchers} />
            </div>
        </div>
    {/each}

    <button id="log-out" onclick={() => signOut(fireAuth)}>Log Out</button>
</div>

<style>
    #root {
        background-color: #323232;
        display: flex;
        flex-direction: row;
        user-select: none;
    }
    #log-out {
        margin-left: auto;
    }
    #menu-list {
        display: none;
        position: absolute;
    }
    #name, #log-out {
        padding: 10px;
    }
    #launcher:hover > #menu-list {
        display: block;
    }
    #launcher:hover > #name, #log-out:hover {
        background-color: #444;
    }
    button {
        border: none;
        background-color: #222;
        padding: 10px;
    }
    button:hover {
        background-color: 555;
    }
</style>
