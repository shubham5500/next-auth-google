import React, {useEffect} from 'react';
import {useSession, signIn, signOut} from 'next-auth/react'

function Login(props) {

  useEffect(() => {
    fetch('/api/hello').then(res => {
      return res.json();
    }).then(res => {
      console.log({res})
    })
  }, [])
  const {data: session} = useSession();
  return (
    session ? <div>
    <p>
      welcome {session.user.email}
    </p>
      <button onClick={() => signOut()}>
        Sign out
      </button>
  </div> : <div>
      <button onClick={() => signIn()}>
        Login
      </button>
    </div>

  );
}

export default Login;
