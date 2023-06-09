import React from 'react';

export function SignInOauth({ account, theme, routePush }: {
  account: any,
  theme: string,
  routePush: string
}) {
  const signInOauth = (provider: string) => {
    account.createOAuth2Session(provider, routePush, '/');
  }

  return (
    <div className={`h-[100vh] w-[100vw] flex justify-center items-center ${theme === 'dark' ? 'bg-[#14141f]' : ' bg-[#fafaff]'}`}>
      <div className='flex flex-col gap-4 font-semibold text-white text-sm'>
        <div onClick={() => signInOauth('google')} className='relative flex justify-center p-2 items-center gap-3 h-10 bg-white text-black shadow-3xl hover:shadow-2xl rounded-sm w-60'>
          <div className='w-[24px] h-[24px] flex items-center justify-self-center left-4 absolute'>
            <svg width="124px" height="124px" viewBox="0 0 124 124" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>google_buttn</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard-1" transform="translate(-332.000000, -639.000000)">
                  <g id="google_buttn" transform="translate(332.000000, 639.000000)">
                    <g id="logo_googleg_48dp">
                      <path d="M117.6,61.3636364 C117.6,57.1090909 117.218182,53.0181818 116.509091,49.0909091 L60,49.0909091 L60,72.3 L92.2909091,72.3 C90.9,79.8 86.6727273,86.1545455 80.3181818,90.4090909 L80.3181818,105.463636 L99.7090909,105.463636 C111.054545,95.0181818 117.6,79.6363636 117.6,61.3636364 L117.6,61.3636364 Z" id="Shape" fill="#4285F4"></path>
                      <path d="M60,120 C76.2,120 89.7818182,114.627273 99.7090909,105.463636 L80.3181818,90.4090909 C74.9454545,94.0090909 68.0727273,96.1363636 60,96.1363636 C44.3727273,96.1363636 31.1454545,85.5818182 26.4272727,71.4 L6.38181818,71.4 L6.38181818,86.9454545 C16.2545455,106.554545 36.5454545,120 60,120 L60,120 Z" id="Shape" fill="#34A853"></path>
                      <path d="M26.4272727,71.4 C25.2272727,67.8 24.5454545,63.9545455 24.5454545,60 C24.5454545,56.0454545 25.2272727,52.2 26.4272727,48.6 L26.4272727,33.0545455 L6.38181818,33.0545455 C2.31818182,41.1545455 0,50.3181818 0,60 C0,69.6818182 2.31818182,78.8454545 6.38181818,86.9454545 L26.4272727,71.4 L26.4272727,71.4 Z" id="Shape" fill="#FBBC05"></path>
                      <path d="M60,23.8636364 C68.8090909,23.8636364 76.7181818,26.8909091 82.9363636,32.8363636 L100.145455,15.6272727 C89.7545455,5.94545455 76.1727273,0 60,0 C36.5454545,0 16.2545455,13.4454545 6.38181818,33.0545455 L26.4272727,48.6 C31.1454545,34.4181818 44.3727273,23.8636364 60,23.8636364 L60,23.8636364 Z" id="Shape" fill="#EA4335"></path>
                      <path d="M0,0 L120,0 L120,120 L0,120 L0,0 Z" id="Shape"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <button>Sign in with Google</button>
        </div>
        <div onClick={() => signInOauth('twitter')} className='relative flex justify-center p-2 items-center gap-3 h-10 shadow-3xl hover:shadow-2xl rounded-sm w-60 bg-[#55acee]'>
          <div className='w-[24px] h-[24px] flex items-center justify-self-center left-4 top-[11px] absolute'>
            <svg width="124px" height="124px" viewBox="0 0 124 124" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>twitter_buttn</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard-1" transform="translate(-332.000000, -286.000000)">
                  <g id="twitter_buttn" transform="translate(332.000000, 273.000000)">
                    <path d="M0,0 L120,0 L120,120 L0,120 L0,0 Z" id="Shape"></path>
                    <path d="M120,24.8777205 C115.584769,26.8358023 110.839899,28.1591865 105.859761,28.7543802 C110.943048,25.7073046 114.846483,20.8825487 116.684736,15.1338381 C111.928015,17.954863 106.659058,20.0038041 101.051245,21.1081605 C96.560079,16.3233476 90.161747,13.3333333 83.0808735,13.3333333 C69.4840338,13.3333333 58.4606606,24.3562676 58.4606606,37.9522294 C58.4606606,39.8817806 58.6788105,41.7608545 59.0984308,43.562676 C38.6371118,42.5360108 20.4964337,32.7346282 8.35378031,17.8398625 C6.2346099,21.4759867 5.02052014,25.7051099 5.02052014,30.2169063 C5.02052014,38.7581111 9.36727752,46.2937196 15.9732251,50.7085117 C11.9372325,50.580782 8.14133655,49.4733531 4.82168331,47.6293939 C4.81992758,47.7321043 4.81992758,47.8352537 4.81992758,47.9388419 C4.81992758,59.8672958 13.3062658,69.8179158 24.5688577,72.0793006 C22.5027982,72.6420132 20.3278832,72.9426826 18.0823,72.9426826 C16.4959947,72.9426826 14.9535828,72.788617 13.4506749,72.5011156 C16.5833425,82.2823073 25.6754088,89.4000512 36.4485899,89.598888 C28.0228245,96.201763 17.4072205,100.137679 5.87292878,100.137679 C3.88587732,100.137679 1.92603972,100.021361 0,99.7939939 C10.8952047,106.77918 23.8362778,110.854676 37.739493,110.854676 C83.0233732,110.854676 107.786239,73.3403563 107.786239,40.8070522 C107.786239,39.7395662 107.762537,38.6777863 107.715132,37.6221515 C112.524964,34.1510662 116.699221,29.8148433 120,24.8777205" id="Fill-1" fill="#FFFFFF"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <button>Sign in with Twitter</button>
        </div>
        <div onClick={() => signInOauth('facebook')} className='relative flex justify-center p-2 items-center gap-3 h-10 shadow-3xl hover:shadow-2xl rounded-sm w-60 bg-[#3c5997]'>
          <div className='w-[24px] h-[24px] flex items-center justify-self-center left-4 absolute'>
            <svg width="124px" height="124px" viewBox="0 0 124 124" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>facebook_buttn</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard-1" transform="translate(-332.000000, -456.000000)">
                  <g id="facebook_buttn" transform="translate(332.000000, 456.000000)">
                    <path d="M0,0 L120,0 L120,120 L0,120 L0,0 Z" id="Shape"></path>
                    <path d="M113.377146,0 L6.62285402,0 C2.96477253,0 0,2.96432291 0,6.62285402 L0,113.377146 C0,117.034778 2.96477253,120 6.62285402,120 L64.0955585,120 L64.0955585,73.5298658 L48.45744,73.5298658 L48.45744,55.419305 L64.0955585,55.419305 L64.0955585,42.0634409 C64.0955585,26.5638044 73.5622382,18.1240492 87.388851,18.1240492 C94.011705,18.1240492 99.7043021,18.6172788 101.362938,18.837591 L101.362938,35.0354823 L91.7735131,35.0399784 C84.2536737,35.0399784 82.7978149,38.6130823 82.7978149,43.8565123 L82.7978149,55.419305 L100.731676,55.419305 L98.3963671,73.5298658 L82.7978149,73.5298658 L82.7978149,120 L113.377146,120 C117.034778,120 120,117.034778 120,113.377146 L120,6.62285402 C120,2.96432291 117.034778,0 113.377146,0" id="Imported-Layers-Copy" fill="#FFFFFF"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <button>Sign in with Facebook</button>
        </div>
        <div onClick={() => signInOauth('github')} className='relative flex justify-center p-2 items-center gap-3 h-10 shadow-3xl hover:shadow-2xl rounded-sm w-60 bg-[#333333]'>
          <div className='w-[24px] h-[24px] flex items-center justify-self-center left-4 absolute'>
            <svg width="124px" height="124px" viewBox="0 0 124 124" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>github_buttn</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard-1" transform="translate(-332.000000, -120.000000)">
                  <g id="github_buttn" transform="translate(332.000000, 120.000000)">
                    <path d="M0,60 C0,71.0416667 2.6875,81.0625 8.0625,90.0625 C13.4375,99.3541667 20.7291667,106.666667 29.9375,112 C39.1458333,117.333333 49.1666667,120 60,120 C70.875,120 80.9375,117.333333 90.1875,112 C99.4375,106.625 106.71875,99.3229167 112.03125,90.09375 C117.34375,80.8645833 120,70.8333333 120,60 C120,49 117.333333,38.9375 112,29.8125 C106.625,20.5625 99.3229167,13.28125 90.09375,7.96875 C80.8645833,2.65625 70.8333333,0 60,0 C48.9583333,0 38.9375,2.6875 29.9375,8.0625 C20.6458333,13.4375 13.3333333,20.7291667 8,29.9375 C2.66666667,39.1458333 1.33469435e-14,49.1666667 1.4560302e-14,60 L0,60 Z M10,60 C10,53.3333333 11.3125,46.8958333 13.9375,40.6875 C16.5625,34.4791667 20.1458333,29.125 24.6875,24.625 C29.2291667,20.0833333 34.5833333,16.5104167 40.75,13.90625 C46.9166667,11.3020833 53.3333333,10 60,10 C66.6666667,10 73.1041667,11.3020833 79.3125,13.90625 C85.5208333,16.5104167 90.8958333,20.0833333 95.4375,24.625 C99.9375,29.125 103.489583,34.4791667 106.09375,40.6875 C108.697917,46.8958333 110,53.3333333 110,60 C110,67.1666667 108.53125,74 105.59375,80.5 C102.65625,87 98.53125,92.6145833 93.21875,97.34375 C87.90625,102.072917 81.8333333,105.5 75,107.625 L75,90 C75,85.625 73.2083333,82.2083333 69.625,79.75 C78.4166667,78.9583333 84.84375,76.7291667 88.90625,73.0625 C92.96875,69.3958333 95,63.5833333 95,55.625 C95,49.4583333 93.1041667,44.2708333 89.3125,40.0625 C90.0625,37.8125 90.4375,35.6458333 90.4375,33.5625 C90.4375,30.4791667 89.7291667,27.6458333 88.3125,25.0625 C85.5208333,25.0625 83.0208333,25.5208333 80.8125,26.4375 C78.6041667,27.3541667 75.8958333,28.9375 72.6875,31.1875 C68.8125,30.3125 64.8125,29.875 60.6875,29.875 C55.9791667,29.875 51.5833333,30.3541667 47.5,31.3125 C44.375,29.0208333 41.6770833,27.40625 39.40625,26.46875 C37.1354167,25.53125 34.5625,25.0625 31.6875,25.0625 C30.3125,27.6875 29.625,30.5208333 29.625,33.5625 C29.625,35.7291667 29.9791667,37.9166667 30.6875,40.125 C26.8958333,44.2083333 25,49.375 25,55.625 C25,63.5833333 27.0208333,69.375 31.0625,73 C35.1041667,76.625 41.5833333,78.8541667 50.5,79.6875 C48.125,81.2708333 46.4791667,83.5833333 45.5625,86.625 C43.5208333,87.3333333 41.3958333,87.6875 39.1875,87.6875 C37.5208333,87.6875 36.0833333,87.3125 34.875,86.5625 C34.5,86.3541667 34.15625,86.1354167 33.84375,85.90625 C33.53125,85.6770833 33.2083333,85.3958333 32.875,85.0625 C32.5416667,84.7291667 32.2708333,84.46875 32.0625,84.28125 C31.8541667,84.09375 31.5833333,83.7708333 31.25,83.3125 C30.9166667,82.8541667 30.6979167,82.5625 30.59375,82.4375 C30.4895833,82.3125 30.2395833,81.9791667 29.84375,81.4375 C29.4479167,80.8958333 29.2291667,80.6041667 29.1875,80.5625 C27.2291667,77.9791667 24.8958333,76.6875 22.1875,76.6875 C20.7291667,76.6875 20,77 20,77.625 C20,77.875 20.3541667,78.2916667 21.0625,78.875 C22.3958333,80.0416667 23.1041667,80.6666667 23.1875,80.75 C24.1875,81.5416667 24.75,82.0416667 24.875,82.25 C26.0833333,83.75 27,85.3958333 27.625,87.1875 C29.9583333,92.3958333 33.9583333,95 39.625,95 C40.5416667,95 42.3333333,94.7916667 45,94.375 L45,107.625 C38.1666667,105.5 32.09375,102.072917 26.78125,97.34375 C21.46875,92.6145833 17.34375,87 14.40625,80.5 C11.46875,74 10,67.1666667 10,60 L10,60 Z" id="Shape" fill="#FFFFFF"></path>
                    <path d="M0,0 L120,0 L120,120 L0,120 L0,0 Z" id="Shape"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <button>Sign in with Github</button>
        </div>

        <div onClick={() => signInOauth('gitlab')} className='relative flex justify-center p-2 items-center gap-3 h-10 shadow-3xl hover:shadow-2xl rounded-sm w-60 bg-white text-black'>
          <img className='left-4 absolute w-6 h-5' src='https://www.outsourcing-web.com/wp-content/uploads/2018/09/520px-GitLab_Logo.svg_-300x277.png' alt='gitlab-icon' />
          <button>Sign in with Gitlab</button>
        </div>

        <div onClick={() => signInOauth('microsoft')} className='relative flex justify-center p-2 items-center gap-3 h-10 shadow-3xl hover:shadow-2xl rounded-sm w-60 bg-[#2f2f2f]'>
          <div className='w-[24px] h-[24px] flex items-center justify-self-center left-4 absolute'>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><title>MS-SymbolLockup</title><rect x="1" y="1" width="9" height="9" fill="#f25022" /><rect x="1" y="11" width="9" height="9" fill="#00a4ef" /><rect x="11" y="1" width="9" height="9" fill="#7fba00" /><rect x="11" y="11" width="9" height="9" fill="#ffb900" /></svg>
          </div>
          <button>Sign in with Microsoft</button>
        </div>
        <div onClick={() => signInOauth('apple')} className='relative flex justify-center p-2 items-center gap-3 h-10 shadow-3xl hover:shadow-2xl rounded-sm w-60 bg-black'>
          <img className='left-4 absolute w-6 h-5' src='https://tse4.mm.bing.net/th?id=OIP.-l5nN2AY4GvY_7BrMSmnFwHaGG&pid=Api&P=0' alt='apple-icon' />
          <button>Sign in with Apple</button>
        </div>
      </div>
    </div>
  )
}
