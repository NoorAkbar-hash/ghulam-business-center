import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// INIT APP
const app = initializeApp(firebaseConfig);

// AUTH
export const auth = getAuth(app);

// FIRESTORE (SIMPLE + SAFE)
export const db = getFirestore(app);

// ENUMS
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

// ERROR HANDLER
export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  console.error({
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path,
    auth: {
      uid: auth.currentUser?.uid,
      email: auth.currentUser?.email,
    }
  });

  throw error;
}