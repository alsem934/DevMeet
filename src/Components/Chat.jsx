import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import ClipLoader from "react-spinners/ClipLoader";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrgFr5_C9KfKLV_Cd4X0FvcClwRjgdqh4",
  authDomain: "dev-meet-up-72d01.firebaseapp.com",
  projectId: "dev-meet-up-72d01",
  storageBucket: "dev-meet-up-72d01.firebasestorage.app",
  messagingSenderId: "949262918609",
  appId: "1:949262918609:web:01e2c891f04c64758bf6f0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signInLoading, setSignInLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  

  const signInWithEmail = async () => {
    setSignInLoading(true);//loading spinner
    setError('');
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      setError('');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('No user found with this email address.')
      }
      setError('Error signing in: ' + error.message);
    } finally{
      setSignInLoading(false) //stopper loading spinner
    }
  };

  const registerWithEmail = async () => {
    setRegisterLoading(true);//loading spinner
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: email.split('@')[0] });
      setUser(auth.currentUser);
      setError('');
    } catch (error) {
      setError('Error registering: ' + error.message);
    } finally{
      setRegisterLoading(false); //stopper loading spinner
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '' || !user) return;

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      timestamp: serverTimestamp(),
      user: {
        uid: user.uid,
        displayName: user.displayName || 'Anonymous',
      },
    });
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <header className="bg-blue-800 p-4 shadow-lg text-center text-lg font-semibold">
        Community Chat
      </header>
      <main className="flex-grow p-6 overflow-y-auto flex flex-col items-center">
        {!user ? (
          <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg mt-0">
            <p className="text-gray-400 mb-4">register to start chatting.</p>
            {error && <p className="text-red-400 mb-4">{error}</p>}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="mb-2 p-2 w-full bg-gray-700 text-white rounded" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mb-2 p-2 w-full bg-gray-700 text-white rounded" />
            <button 
  onClick={signInWithEmail} 
  className="bg-blue-600 w-full py-2 rounded-lg hover:bg-blue-700 mb-2 flex justify-center items-center"
  disabled={signInLoading}
>
  {signInLoading ? <ClipLoader size={20} color="#ffffff" /> : "Sign in"}
</button>
           
<button 
  onClick={registerWithEmail} 
  className="bg-green-600 w-full py-2 rounded-lg hover:bg-green-700 flex justify-center items-center"
  disabled={registerLoading}
>
  {registerLoading ? <ClipLoader size={20} color="#ffffff" /> : "Register"}
</button>

          </div>
        ) : (
          <div className="flex flex-col-reverse gap-4 overflow-auto max-h-[80vh] w-full max-w-full">
            {messages.map((message) => (
              <div key={message.id} className="p-3 rounded-lg bg-gray-800 max-w-lg w-full shadow-md">
                <p className="text-sm text-blue-400 font-bold">{message.user?.displayName || 'Anonymous'}</p>
                <p className="text-lg">{message.text}</p>
                <p className="text-xs text-gray-400">{new Date(message.timestamp?.toDate()).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      {user && (
        <form onSubmit={sendMessage} className="flex p-4 bg-gray-800 w-full">
          <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="w-full p-2 rounded-l-lg bg-gray-700 text-white focus:outline-none" />
          <button type="submit" className="bg-blue-600 px-6 py-2 rounded-r-lg hover:bg-blue-700">Send</button>
        </form>
      )}
    </div>
  );
};

export default Chat;
