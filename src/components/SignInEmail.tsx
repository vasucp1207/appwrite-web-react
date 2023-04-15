import React, { useEffect, useState } from 'react';
import { useCreateAccount } from '../helpers/useCreateAccount';
import { useCreateEmailSession } from '../helpers/useCreateEmailSession';
import { toast, ToastContainer } from 'react-toastify';
import { ForgotPassword } from './ForgotPassword';
import { useUpdateVerification } from '../helpers/useUpdateVerification';
import { getElement } from '../utils/utils';
import '../tailwind.css';

export function SignInEmail({ account, theme, routePush, routeSign, routeRst }: {
  account: any,
  theme: string,
  routePush: string,
  routeSign: string,
  routeRst: string
}) {

  const [method, setMethod] = useState<'in' | 'up'>('in');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [forgotPass, setForgotPass] = useState<boolean>(false);

  const warning = (
    <p className="flex gap-2 items-center helper u-color-text-warning u-margin-block-start-8">
      <span>⚠️</span>
      <span className="text">This field is required</span>
    </p>
  );

  const passLen = (
    <p className="flex gap-2 items-center helper u-color-text-warning u-margin-block-start-8">
      <span>⚠️</span>
      <span className="text">Password should contain at least 8 characters</span>
    </p>
  )

  const emailValid = (
    <p className="flex gap-2 items-center helper u-color-text-warning u-margin-block-start-8">
      <span>⚠️</span>
      <span className="text">Your email should be formatted as: name@example.com</span>
    </p>
  )

  useEffect(() => {
    if (theme === 'dark') {
      let allDiv = document.querySelectorAll('div');
      allDiv.forEach((div) => {
        div.style.color = '#f2f2f7';
      });
      let allInp = document.querySelectorAll('input');
      allInp.forEach((inp) => {
        inp.style.background = '#14141f';
        inp.style.border = '1px solid #27293a';
      });
    }
  }, []);

  const setUser = (e: any) => {
    let nameWar = getElement('name');
    setName(e.target?.value);
    if (nameWar) nameWar.style.display = 'none';
  }

  const setPass = (e: any) => {
    let passWar = getElement('password');
    let valEmailWar = document.getElementById('pass-len');
    setPassword(e.target?.value);
    if (passWar) passWar.style.display = 'none';
    if (valEmailWar) valEmailWar.style.display = 'none';
  }

  const setMail = (e: any) => {
    let emailWar = getElement('email');
    let valEmailWar = document.getElementById('email-valid');
    setEmail(e.target?.value);
    if (emailWar) emailWar.style.display = 'none';
    if (valEmailWar) valEmailWar.style.display = 'none';
  }

  const handleCreateAccount = useCreateAccount(email, password, name, account, routeSign);

  const signUpEmail = async () => {
    let nameWar = getElement('name');
    let emailWar = getElement('email');
    let passWar = getElement('password');
    if (name === '') {
      if (nameWar) nameWar.style.display = 'block';
      if (email === '') {
        if (emailWar) emailWar.style.display = 'block';
      }
      if (password === '') {
        if (passWar) passWar.style.display = 'block';
      }
      return;
    }

    let valPass = true;
    let valEmail = true;
    if (password.length < 8) {
      valPass = false;
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let valid = emailRegex.test(email);
    if (!valid) {
      valEmail = false;
    }

    if(!valPass || !valEmail) {
      if(!valPass) {
        let valPassWar = document.getElementById('pass-len');
        if (valPassWar) valPassWar.style.display = 'block';
      }
      if(!valEmail) {
        let valEmailWar = document.getElementById('email-valid');
        if (valEmailWar) valEmailWar.style.display = 'block';
      }
      return ;
    }

    const res = await handleCreateAccount();
    if (res) toast(res);
    else toast('❌ Sign up failed');

    setName('');
    setPassword('');
    setEmail('');
  }

  const signInEmail = async () => {
    let emailWar = getElement('email');
    let passWar = getElement('password');
    if (email === '') {
      if (emailWar) emailWar.style.display = 'block';
      if (password === '') {
        if (passWar) passWar.style.display = 'block';
      }
      return;
    }
    let res = await useCreateEmailSession(email, password, account);
    if (res) window.location.href = routePush;
    else toast('❌ Invalid credentials');

    setPassword('');
    setEmail('');
  };

  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const secret = urlParams.get('secret');

    if (userId) {
      const verify = async () => {
        let res = await useUpdateVerification(userId, secret, account);
        if (res) window.location.href = routePush;
        else toast('Something went wrong try again.')
      }
      verify();
    }
  }

  const changePassVisiblity = () => {
    const x = document.getElementById('pass-field') as HTMLInputElement;;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const changeMethod = () => {
    if (method === 'in') setMethod('up');
    else setMethod('in');
  }

  if (forgotPass) {
    return (
      // route of the reset
      <ForgotPassword theme={theme} onChange={() => setForgotPass(false)} account={account} routeRst={routeRst} />
    )
  }

  return (
    <div className={`relative flex justify-center items-center w-[100vw] h-[100vh] ${theme === 'dark' ? 'bg-[#14141f] text-white' : 'bg-[#fafaff] text-[#373b4d]'}`}>

      <div className='absolute top-2 text-black'>
        <ToastContainer
          position="top-center"
          autoClose={2000}
        />
      </div>

      <div className='w-[450px]'>
        <div className={`text-3xl font-bold text-[#373b4d] ${method === 'up' ? 'mb-0' : 'mb-9'}`}>Sign in</div>

        {method === 'up' && <div>
          <div className='label flex -gap-1 is-required mt-9'>
            Name
            <img className='w-5 h-5' src='https://cdn-icons-png.flaticon.com/512/8631/8631583.png' />
          </div>
          <input
            value={name}
            className={`w-full h-10 mb-5 pl-[12px] pr-[12px] text-sm rounded border-[1px] border-[#e9eaf1] focus:outline-none focus:border-[#c5c7d7]`} type='text' placeholder='Name' required
            onChange={e => setUser(e)}
          />

          <div id='name-warning' className='hidden -mt-3 mb-5 text-[#f38800]'>
            {warning}
          </div>
        </div>}

        <div className='label flex -gap-1 is-required'>
          Email
          <img className='w-5 h-5' src='https://cdn-icons-png.flaticon.com/512/8631/8631583.png' />
        </div>

        <input
          value={email}
          className={`w-full h-10 pl-[12px] pr-[12px] text-sm rounded border-[1px] border-[#e9eaf1] focus:outline-none focus:border-[#c5c7d7]`} type='text' placeholder='Email' required
          onChange={e => setMail(e)}
        />

        <div id='email-warning' className='hidden text-[#f38800]'>
          {warning}
        </div>

        <div id='email-valid' className='hidden text-[#f38800]'>
          {emailValid}
        </div>

        <div className='label flex -gap-1 is-required mt-6'>
          Password
          <img className='w-5 h-5' src='https://cdn-icons-png.flaticon.com/512/8631/8631583.png' />
        </div>
        <div className='relative h-fit flex items-center'>
          <input
            value={password}
            id='pass-field'
            className={`w-full h-10 pl-[12px] pr-[12px] text-sm rounded border-[1px] border-[#e9eaf1] focus:outline-none focus:border-[#c5c7d7]`} type='password' placeholder='Password' required
            onChange={e => setPass(e)}
          />
          {theme !== 'dark' && <img onClick={changePassVisiblity} className='absolute right-3 w-5 h-5 cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/709/709724.png' alt='eye' />}
          {theme === 'dark' && <img onClick={changePassVisiblity} className='absolute right-3 w-5 h-5 cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/709/709724.png' alt='eye' />}
        </div>

        <div id='password-warning' className='hidden text-[#f38800]'>
          {warning}
        </div>

        <div id='pass-len' className='hidden text-[#f38800]'>
          {passLen}
        </div>

        {method === 'in' && <button onClick={signInEmail} className="flex items-center justify-center mt-5 w-full rounded bg-[#f02d64] text-white h-10 p-2">
          Sign in
        </button>}

        {method === 'up' && <button onClick={signUpEmail} className="flex items-center justify-center mt-5 w-full rounded bg-[#f02d64] text-white h-10 p-2">
          Sign up
        </button>}

        <div className='text-center mt-6'>
          {method === 'in' && <div className='flex justify-center gap-5'> <span className='cursor-pointer' onClick={() => setForgotPass(true)}>Forgot Password?</span> <span>|</span> <span className='cursor-pointer underline' onClick={changeMethod}>Sign up</span> </div>}
          {method === 'up' && <span> <span>Already got an account?</span> <span className='cursor-pointer underline' onClick={changeMethod}>Sign in</span> </span>}
        </div>
      </div>
    </div>
  )
}