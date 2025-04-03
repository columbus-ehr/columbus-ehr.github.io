import 'svelte'
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged, sendEmailVerification } from "firebase/auth"
import { getDatabase } from "firebase/database"

export const firebaseConfig = {
    apiKey: 'AIzaSyD85p4w02tZ4MGOJuj-DWc0DY_Igau0LNU',
    authDomain: 'project-4209476263125400271.firebaseapp.com',
    projectId: 'project-4209476263125400271',
    storageBucket: 'project-4209476263125400271.firebasestorage.app',
    messagingSenderId: '845208103451',
    appId: '1:845208103451:web:260334c73d093994af66be',
    databaseURL: 'https://project-4209476263125400271-default-rtdb.firebaseio.com'
}

export const fireApp  = initializeApp(firebaseConfig)
export const fireAuth = getAuth(fireApp)
export const fireDb   = getDatabase(fireApp)

let uid = $state<string | null>(null)
let emailVerified = $state<boolean>(false)
export function getUid(): string | null {
    return uid
}
export function loggedIn(): boolean {
    return (uid !== null)
}
export function emailIsVerified(): boolean {
    return emailVerified
}
onAuthStateChanged(fireAuth, async (user) => {
    if (user === null) {
        uid = null
    } else {
        emailVerified = user.emailVerified
        uid = user.uid

        if (!emailVerified) {
            await sendEmailVerification(user, {
                url: window.location.href
            })
        }
    }
})