'use client';

import { signup } from '@/service/authService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const data = await signup(email, password); // returns { success, message, ... }
      console.log('Signup response:', response); 
      if (data.success) {
        toast.success('Signup successful! You can now log in.');
        router.push('/login'); // redirect to login page
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (errorMessage) {
      alert(errorMessage || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-purple-300 outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-purple-300 outline-none"
              placeholder="At least 8 characters"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </form>
        <h1 className='text-blue-600 mx-auto'>alleady hav a account, <Link href={"/login"}>Login</Link></h1>
      </div>
    </div>
  );
};

export default Signup;
