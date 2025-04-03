<script lang="ts">
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
    import { fireAuth } from "../util/firebase.svelte";
    import { FirebaseError } from "firebase/app";

    const { toggleShowLogIn }: { toggleShowLogIn: () => void } = $props()

    let displayName: string = $state('')
    let email:       string = $state('')
    let password:    string = $state('')

    async function onsubmit(e: SubmitEvent) {
        e.preventDefault()

        try {
            await createUserWithEmailAndPassword(fireAuth, email, password)
        } catch (err) {
            if (err instanceof FirebaseError) {
                if (err.code == 'auth/invalid-credential') {
                    console.log('error message needs to be added...')
                }
            }
        }
    }
</script>

<h1>Sign Up</h1>
<form id="signup" {onsubmit}>
    <!-- <p id="login-error">Invalid username or password</p> -->
    <input name="displayName" placeholder="Your Name" bind:value={displayName}>
    <br>
    <br>

    <label for="studentOrTeacher">Are you a student or a teacher?</label>
    <br>
    <label for="student">Student</label>
    <input name="studentOrTeacher" type="radio" id="student" />
    <label for="teacher">Teacher</label>
    <input name="studentOrTeacher" type="radio" id="teacher" />

    <br>
    <br>
    <input name="email" placeholder="E-Mail Address" bind:value={email} />
    <br>
    <input name="pass" type="password" placeholder="Password" bind:value={password} />
    <br>
    <input type="submit" value="Sign Up" />

    <br>
    <br>

    Already have an account? <button onclick={toggleShowLogIn}>Log In</button>
</form> 
