import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useCreateRecovery } from '../helpers/useCreateRecovery';
import { getElement } from '../utils/utils';

export function ForgotPassword({ theme, onChange, account, routeRst }: {
  theme: string,
  onChange: () => void,
  account: any,
  routeRst: string
}) {
  const warning = (
    <p className="flex gap-2 items-center helper u-color-text-warning u-margin-block-start-8">
      <span>⚠️</span>
      <span className="text">This field is required</span>
    </p>
  );

  const emailValid = (
    <p className="flex gap-2 items-center helper u-color-text-warning u-margin-block-start-8">
      <span>⚠️</span>
      <span className="text">Your email should be formatted as: name@example.com</span>
    </p>
  )

  const [email, setEmail] = useState<string>('');

  const forgotPassword = async () => {
    let forgotWar = getElement('forgot');
    if (email === '') {
      if (forgotWar) forgotWar.style.display = 'block';
      return;
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let valid = emailRegex.test(email);
    if(!valid) {
      let valEmailWar = document.getElementById('email-valid');
      if (valEmailWar) valEmailWar.style.display = 'block';
      return ;
    }

    const res = await useCreateRecovery(email, account, routeRst);
    if (res) toast('✅ Recovery email sent.');
    else toast('❌ Not a valid email address.');
    setEmail('');
  }

  const setMail = (e: any) => {
    let forgotWar = getElement('forgot');
    let valEmailWar = document.getElementById('email-valid');
    setEmail(e.target?.value);
    if (forgotWar) forgotWar.style.display = 'none';
    if (valEmailWar) valEmailWar.style.display = 'none';
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
        <div className='text-3xl font-bold mb-9'>Password Recovery</div>

        <div className='label flex -gap-1 is-required'>
          Email
          <img className='w-5 h-5' src='https://cdn-icons-png.flaticon.com/512/8631/8631583.png' />
        </div>

        <input
          value={email}
          className={`w-full h-10 pl-[12px] pr-[12px] text-sm rounded border-[1px] border-[#e9eaf1] focus:outline-none focus:border-[#c5c7d7]`} type='text' placeholder='Email'
          onChange={setMail}
        />

        <div id='forgot-warning' className='hidden text-[#f38800]'>
          {warning}
        </div>

        <div id='email-valid' className='hidden text-[#f38800]'>
          {emailValid}
        </div>

        <button
          onClick={forgotPassword}
          className="flex items-center justify-center mt-5 w-full rounded bg-[#f02d64] text-white h-10 p-2">
          Recover
        </button>

        <div onClick={onChange} className='flex justify-center cursor-pointer mt-6'>Sign in</div>
      </div>
    </div>
  )
}
