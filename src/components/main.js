import react, { useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import '../css/main.css'
import LogIn from './login'
import Home from './home'
import Header from './header'
import { Loader } from '@mantine/core';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    onAuthStateChanged,
    signOut
}
from "firebase/auth"
import {
    getFirestore,
    query,
    collection,
    onSnapshot,
    orderBy,
    setDoc,
    serverTimestamp,
    addDoc,
    deleteDoc,
    doc
}
from "firebase/firestore"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-chat-app-2efda.firebaseapp.com",
    projectId: "react-chat-app-2efda",
    storageBucket: "react-chat-app-2efda.appspot.com",
    messagingSenderId: "1004384494632",
    appId: "1:1004384494632:web:1163b0b1a79e8a9b96411d"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

function App() {
    const [user, setUser] = useState({});
    const [messages, setMessages] = useState([])
    const [textVal, setTextVal] = useState("")

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return unsubscribe;
    }, [])

    const logIn = async () => {
        const provider = new GoogleAuthProvider()
        try {
            await signInWithRedirect(auth, provider)
        } catch (e) {
            console.log(e)
        }
    }
 const logOut = async () => {
        try {
            await signOut(auth);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const docRef = query(collection(db, "messages"), orderBy("createdAt"));
        onSnapshot(docRef, (snapshot) => {
            const msg = []
            snapshot.forEach(doc => {
                msg.push({ ...doc.data(), id: doc.id })
            })
            setMessages(msg)
        })

    }, [db])

    const handleChange = (e) => {
        setTextVal(e)
    }

    const submitHandle = () => {
        if(textVal !== ""){
            const docRef = collection(db, "messages")
            addDoc(docRef, {
                uid: user.uid,
                name:user.displayName,
                text: textVal,
                createdAt: serverTimestamp(),
                photo: user.photoURL
            })
            setTextVal("")
       }
    }
    const remove = (id) => {
        const docRef = doc(db, "messages", id)
        deleteDoc(docRef)
    }
  if(messages.length === 0){
     return (
        <div className="full-container">
           <Loader />
        </div>
        )
  }else{
  return (
      <>
      <Header logout={logOut} user={user}/>
    <div className="full-home-container">
      <div className="container">
            {
               user === null ? <LogIn login={logIn}/> :<Home messages={messages} remove={remove} textVal={textVal} handleChange={handleChange} submitHandle={submitHandle} user={user}/>
            }
      </div>
    </div>
    </>
    )
}
}
export default App