import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './firebase-config.js'

export const configReady = !Object.values(firebaseConfig).some(
  (value) => typeof value === 'string' && value.startsWith('PASTE_'),
)

const app = configReady ? initializeApp(firebaseConfig) : null

export const auth = app ? getAuth(app) : null
export const db = app ? getFirestore(app) : null
