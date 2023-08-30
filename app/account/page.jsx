"use client";
import LoginCSS from "./login.module.css";
import React from "react";
import { auth } from "../firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";

function login() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }
  return (
    <div>
      <div className={LoginCSS.form__wrapper}>
        <form className={LoginCSS.login__wrapper}>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            className={LoginCSS.email__input}
            placeholder="Enter email"
            required
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            className={LoginCSS.password__input}
            placeholder="Password"
            required
          />
          <button onClick={register} className={LoginCSS.login__btn}>
            Register
          </button>
        </form>
        <form className={LoginCSS.login__wrapper}>
          <input
            value={signInEmail}
            onChange={(event) => setSignInEmail(event.target.value)}
            type="email"
            className={LoginCSS.email__input}
            placeholder="Enter email"
            required
          />
          <input
            value={signInPassword}
            onChange={(event) => setSignInPassword(event.target.value)}
            type="password"
            className={LoginCSS.password__input}
            placeholder="Password"
            required
          />
          <button onClick={login} className={LoginCSS.login__btn}>
            Login
          </button>
        </form>
      </div>
      <div className={LoginCSS.logout__wrapper}>
        <button
          onClick={logout}
          id={LoginCSS.logout__btn}
          className={LoginCSS.login__btn}
        >
          Logout
        </button>
        {loading ? "loading..." : user.email}
      </div>
    </div>
  );
}

export default login;
