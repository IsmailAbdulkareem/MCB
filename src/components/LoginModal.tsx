// components/LoginModal.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ClerkProvider, RedirectToSignIn } from '@clerk/nextjs';

const LoginModal = ({ showModal, setShowModal }: { showModal: boolean; setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const router = useRouter();

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Please Log In</h2>
        <ClerkProvider>
          <RedirectToSignIn
            afterSignInUrl="/"  // Redirect to home page after sign-in
          />
        </ClerkProvider>
        <button
          onClick={() => setShowModal(false)}
          className="mt-4 w-full py-2 px-4 bg-gray-800 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
