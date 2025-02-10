import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrgFr5_C9KfKLV_Cd4X0FvcClwRjgdqh4",
    authDomain: "dev-meet-up-72d01.firebaseapp.com",
    projectId: "dev-meet-up-72d01",
    storageBucket: "dev-meet-up-72d01.firebasestorage.app",
    messagingSenderId: "949262918609",
    appId: "1:949262918609:web:01e2c891f04c64758bf6f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const LiveUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState('');

  useEffect(() => {
    // Query updates collection and order by timestamp (descending)
    const q = query(collection(db, 'updates'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatesList = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          text: data.text || "No content",
          timestamp: data.timestamp ? data.timestamp.toDate() : new Date() // Ensure timestamp is valid
        };
      });

      setUpdates(updatesList);
    });

    return () => unsubscribe();
  }, []);

  const addUpdate = async () => {
    if (!newUpdate.trim()) return;

    try {
      await addDoc(collection(db, 'updates'), {
        text: newUpdate,
        timestamp: serverTimestamp() // Auto-generated timestamp
      });
      setNewUpdate('');
    } catch (error) {
      console.error("Error adding update: ", error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Live Updates</h2>
      
      {/* Input Field to Add New Updates */}
      <div className="flex justify-center mb-6">
        <input 
          type="text" 
          value={newUpdate} 
          onChange={(e) => setNewUpdate(e.target.value)}
          placeholder="Enter new update..." 
          className="border p-2 rounded-l w-2/3"
        />
        <button 
          onClick={addUpdate} 
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          Post
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="h-96 overflow-y-auto">
          {updates.length === 0 ? (
            <p className="text-gray-500 text-center">No updates available.</p>
          ) : (
            updates.map((update) => (
              <div key={update.id} className="mb-4 p-4 border-b border-gray-200">
                <p className="text-gray-700">{update.text}</p>
                <p className="text-sm text-gray-500">
                  {update.timestamp.toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveUpdates;
