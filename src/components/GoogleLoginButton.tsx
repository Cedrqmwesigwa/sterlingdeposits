
"use client"; // Mark this component as a Client Component

import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
    // Handle successful login, e.g., send token to backend
  };

  const handleLoginError = () => {
    console.log('Login Failed');
    // Handle login failure
  };

  return (
    <div className="flex justify-center mt-8 mb-8">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </div>
  );
};

export default GoogleLoginButton;
