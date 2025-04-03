<script lang="ts">
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { fireAuth } from "../util/firebase.svelte";
    import { FirebaseError } from "firebase/app";

    const { toggleShowLogIn }: { toggleShowLogIn: () => void } = $props()

    let email:    string = $state('')
    let password: string = $state('')
    async function onsubmit(e: SubmitEvent) {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(fireAuth, email, password)
        } catch (err) {
            if (err instanceof FirebaseError) {
                if (err.code == 'auth/invalid-credential') {
                    console.log('error message needs to be added...')
                }
            }
        }
    }
</script>

<h1>Log In</h1>
<form id="login" {onsubmit}>
    <!-- <p id="login-error">Invalid username or password</p> -->
    <input name="email" placeholder="E-Mail Address" bind:value={email} />
    <br>
    <input name="pass" type="password" placeholder="Password" bind:value={password} />
    <br>
    <input type="submit" value="Log In" />

    <br>
    <br>

    Need a new account? <button onclick={toggleShowLogIn}>Sign Up</button>
</form> 
