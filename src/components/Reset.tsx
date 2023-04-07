import React, { useState, useEffect } from 'react';
import { useUpdateRecovery } from '../helpers/useUpdateRecovery';
import { getElement } from '../utils/utils';
// import { toast, ToastContainer } from 'react-toastify';

export function Reset({ theme, account }: {
  theme: string,
  account: any
}) {
  const warning = (
    <p className="flex gap-2 items-center helper u-color-text-warning u-margin-block-start-8">
      <span>⚠️</span>
      <span className="text">This field is required</span>
    </p>
  );

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

  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const updatePassword = (e: any) => {
    e.preventDefault();

    let newWar = getElement('new');
    let confirmWar = getElement('confirm');
    if (newPassword === '') {
      if (newWar) newWar.style.display = 'block';
      if (confirmPassword === '') {
        if (confirmWar) confirmWar.style.display = 'block';
      }
      return;
    }

    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get('userId');
      const secret = urlParams.get('secret');

      if (userId) {
        const update = async () => {
          let res = await useUpdateRecovery(
            userId,
            secret,
            newPassword,
            confirmPassword,
            account
          )

          if (res) window.location.href = '/room';
          // else toast('❌ Something went wrong try again.');

          setNewPassword('');
          setConfirmPassword('');
        }
        update();
      }
    }
  }

  const setNew = (e: any) => {
    let newWar = getElement('new');
    setNewPassword(e.target?.value);
    if (newWar) newWar.style.display = 'none';
  }

  const setConfirm = (e: any) => {
    let confirmWar = getElement('confirm');
    setConfirmPassword(e.target?.value);
    if (confirmWar) confirmWar.style.display = 'none';
  }

  const changePassVisiblity = () => {
    const x = document.getElementById('pass-field') as HTMLInputElement;;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const changePassVisiblity1 = () => {
    const y = document.getElementById('pass-field1') as HTMLInputElement;;
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }

  return (
    <div className={`relative flex justify-center items-center w-[100vw] h-[100vh] ${theme === 'dark' ? 'bg-[#14141f] text-white' : 'bg-[#fafaff] text-[#373b4d]'}`}>

      <div className='absolute top-2 text-black'>
        {/* <ToastContainer
          position="top-center"
          autoClose={2000}
        /> */}
      </div>

      <div className='w-96'>
        <div className='text-3xl font-bold text-[#373b4d] mb-9'>Password Recovery</div>

        <div className='label is-required'>New password</div>

        <div className='relative h-fit flex flex-col'>
          <div className='flex items-center'>
            <input
              id='pass-field'
              className={`w-full h-10 p-1 pl-[12px] pr-[12px] text-sm rounded border-[1px] border-[#e9eaf1] focus:outline-none focus:border-[#c5c7d7]`} type='password' placeholder='Enter password' required
              onChange={setNew}
            />

            {theme !== 'dark' && <img onClick={changePassVisiblity} className='absolute right-3 w-5 h-5 cursor-pointer' src='eye-solid.svg' alt='eye' />}
            {theme === 'dark' && <img onClick={changePassVisiblity} className='absolute right-3 w-5 h-5 cursor-pointer' src='eye-solid-dark.svg' alt='eye' />}
          </div>

          <div id='new-warning' className='hidden text-[#f38800]'>
            {warning}
          </div>
        </div>

        <div className='label is-required mt-6'>Confirm password</div>

        <div className='relative h-fit flex flex-col'>
          <div className='flex items-center'>
            <input
              id='pass-field1'
              className={`w-full h-10 p-1 pl-[12px] pr-[12px] text-sm rounded border-[1px] border-[#e9eaf1] focus:outline-none focus:border-[#c5c7d7]`} type='password' placeholder='Comfirm password' required
              onChange={setConfirm}
            />

            {theme !== 'dark' && <img onClick={changePassVisiblity1} className='absolute right-3 w-5 h-5 cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/709/709724.png' alt='eye' />}
            {theme === 'dark' && <img onClick={changePassVisiblity1} className='absolute right-3 w-5 h-5 cursor-pointer' src='https://cdn-icons-png.flaticon.com/512/709/709724.png' alt='eye' />}
          </div>

          <div id='confirm-warning' className='hidden text-[#f38800]'>
            {warning}
          </div>
        </div>

        <button
          onClick={updatePassword}
          className="flex items-center justify-center mt-5 w-full rounded bg-[#f02d64] text-white h-10 p-2">
          Update
        </button>

        {/* <div onClick={() => navigate('/')} className='flex justify-center cursor-pointer mt-6'>Sign in</div> */}
      </div>
    </div>
  )
}
