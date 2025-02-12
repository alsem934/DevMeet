import React, { useState, useEffect } from 'react';
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";

const LiveUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'updates'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setUpdates(snapshot.docs.map(doc => ({
        id: doc.id,
        text: doc.data().text,
        timestamp: doc.data().timestamp?.toDate().toLocaleString(),
      })));
    });
    return unsubscribe;
  }, []);

  const addUpdate = async () => {
    if (!newUpdate.trim()) return;
    await addDoc(collection(db, 'updates'), {
      text: newUpdate,
      timestamp: serverTimestamp(),
    });
    setNewUpdate('');
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Live Updates</h2>
      <div className="flex justify-center mb-4">
        <input type="text" value={newUpdate} onChange={e => setNewUpdate(e.target.value)} placeholder="Enter new update..." className="border p-2 rounded-l w-2/3" />
        <button onClick={addUpdate} className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">Post</button>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 max-h-96 overflow-y-auto">
        {updates.length === 0 ? <p className="text-gray-500 text-center">No updates available.</p> : updates.map(update => (
          <div key={update.id} className="mb-4 p-4 border-b border-gray-200">
            <p className="text-gray-700">{update.text}</p>
            <p className="text-sm text-gray-500">{update.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveUpdates;
