'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkLogin } from '@/service/authService';


const withAuth = (WrappedComponent) => {
  return function ProtectedRoute(props) {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const verify = async () => {
        const result = await checkLogin();

        if (!result || !result.success) {
          router.push('/login');
        } else {
          setIsAuthenticated(true);
        }

        setLoading(false);
      };

      verify();
    }, []);

    if (loading) {
      return <div className='min-h-screen w-full flex items-center justify-center'><span>Loading... <div className='h-4 w-4 rounded-full border-t-2 animate-spin border-t-black bg-white'></div></span></div>; // You can style this better
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
