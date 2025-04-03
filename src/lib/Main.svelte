<script lang="ts">
    import { signOut } from "firebase/auth";
    import { emailIsVerified, fireAuth, loggedIn } from "../util/firebase.svelte";
    import ContentSwitcher from "./ContentSwitcher.svelte"
    import LogIn from "./LogIn.svelte";
    import LogInOrSignUp from "./LogIn.svelte";
    import Sidebar from "./Sidebar.svelte"
    import SignUp from "./SignUp.svelte";
    import TopMenu from "./TopMenu.svelte"

    let showLogIn: boolean = $state(true)
    const toggleShowLogIn = () => showLogIn = !showLogIn
</script>

{#if !loggedIn()}
    <div class="popup">
        {#if showLogIn}
            <LogIn {toggleShowLogIn} />
        {:else}
            <SignUp {toggleShowLogIn} />
        {/if}
    </div>
{:else if !emailIsVerified()}
    <div class="popup">
        <h1>Email not verified...</h1>
        <p>
            Your email has not be verified. We sent an email to you.
            Click the link, then reload this page.
        </p>

        <button onclick={() => signOut(fireAuth)}>Log Out</button>
    </div>
{:else}
    <div id="start">
        <TopMenu />
        <div id="bottom-main">
            <Sidebar />
            <ContentSwitcher />
        </div>
    </div>
{/if}

<style>
    #start {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    #bottom-main {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }
</style>
