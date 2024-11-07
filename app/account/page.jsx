'use client'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import {auth} from '@/app/Firebase/config'
import logincss from './login.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function account() {
  const [email, setEmail] = useState('');
  cosnt [passwoord, setPassword] = ('');

  const [useCreateUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

  const handleSignUp = async () => {
    try{
      const res = await createUserWithEmailAndPassword(email, password)
      console.log({res})
      setEmail('')
      setPassword('')
    } catch(e){
      console.error(e)
    }
  };

  return (
    <main className={logincss.main}>
      <div className={logincss.wrapper}>
       <div className={logincss.btn__wrapper}>
         <input className={logincss.btn} onChange={(e) => setEmail(e.target.value)} type="text" autocomplete="off" name="text" class="input" placeholder="Username"></input>
         <input className={logincss.btn} onChange={(e) => setPassword(e.target.value)} type="text" autocomplete="off" name="text" class="input" placeholder="Password"></input>
         <button className={logincss.btn__login} onClick={handleSignUp}>Login</button>
        </div>
      </div>
    </main>
  )
}

