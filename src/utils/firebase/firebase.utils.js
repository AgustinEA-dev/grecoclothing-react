import { initializeApp } from "firebase/app"

import { getFirestore, doc, getDocs, collection, writeBatch, query } from "firebase/firestore"

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAMK8fsJ4ogTOZb24WsGFxyDe5F0iP44JE",
    authDomain: "integrador-3-react.firebaseapp.com",
    projectId: "integrador-3-react",
    storageBucket: "integrador-3-react.appspot.com",
    messagingSenderId: "544496296943",
    appId: "1:544496296943:web:9922a94a1cca8b60320c1a"
};


const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore()

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })
    await batch.commit()
    console.log("done")
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
}

