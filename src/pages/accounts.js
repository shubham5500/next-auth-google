import React from 'react';
import {useSession, signOut, signIn} from 'next-auth/react';

function Accounts(props) {

  const {status} = useSession({required: true})
  return (
    status === 'authenticated' ? <div  onClick={()=> signOut()}>
      Welecom
    </div> : <button>away</button>
  );
}

export default Accounts;
