const enterAccessTokenModal = `
    <div class="w-screen h-screen fixed top-0 left-0 z-[999] bg-[#00000080] center" id="enter_code_modal">
      <div
        class="bg-[#0D1621] rounded-[20px] w-[90%] sm:w-[520px] flex justify-start items-center flex-col p-[30px] relative"
      >
        <button 
        class="absolute top-[30px] right-[30px]"
       onclick="closeModal('enter_code_modal')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M11.6449 2.04935C12.1134 1.58082 12.1134 0.819928 11.6449 0.351398C11.1763 -0.117133 10.4154 -0.117133 9.9469 0.351398L6 4.30205L2.04935 0.355146C1.58082 -0.113384 0.819928 -0.113384 0.351398 0.355146C-0.117133 0.823676 -0.117133 1.58457 0.351398 2.0531L4.30205 6L0.355146 9.95065C-0.113384 10.4192 -0.113384 11.1801 0.355146 11.6486C0.823676 12.1171 1.58457 12.1171 2.0531 11.6486L6 7.69795L9.95065 11.6449C10.4192 12.1134 11.1801 12.1134 11.6486 11.6449C12.1171 11.1763 12.1171 10.4154 11.6486 9.9469L7.69795 6L11.6449 2.04935Z"
              fill="white"
            />
          </svg>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <g clip-path="url(#clip0_88_13750)">
            <path
              d="M70 35.0008C70 54.3323 54.3312 70.0005 35.0005 70C15.6688 70.0005 4.38357e-08 54.3323 4.38357e-08 35.0008C-0.000956987 15.6693 15.6688 0 35.0005 0C54.3312 0 70 15.6699 70 35.0008Z"
              fill="#F33F3F"
            />
            <path
              d="M70.0012 35.0009C70.0012 34.5213 69.9841 34.0457 69.965 33.5707C69.9446 33.5506 69.925 33.5297 69.9041 33.5099C69.8535 33.4564 69.8021 33.4051 69.7487 33.3544C69.6981 33.301 57.2055 20.8087 57.1524 20.7581C56.4235 19.9881 55.4061 19.4941 54.2925 19.4941H15.8619C13.6673 19.4941 11.7422 21.3528 11.7422 23.4709V46.5625C11.7422 47.6413 12.2542 48.6468 13.0451 49.375C13.0967 49.4276 13.1463 49.4804 13.2006 49.5304C13.2521 49.5831 33.5179 69.8522 33.5723 69.9022C33.5935 69.9238 33.6153 69.9445 33.6361 69.9659C34.0898 69.9834 34.5437 70.0004 35.0017 70.0004C54.3324 70.0008 70.0012 54.3324 70.0012 35.0009Z"
              fill="url(#paint0_linear_88_13750)"
            />
            <path
              d="M54.2923 19.4941H15.8619C13.6672 19.4941 11.7422 21.353 11.7422 23.471V46.5625C11.7422 48.6635 13.6672 50.5063 15.8619 50.5063H54.2923C56.4431 50.5063 58.2602 48.7007 58.2602 46.5625V23.471C58.2602 21.315 56.4431 19.4941 54.2923 19.4941ZM56.3221 46.5624C56.3221 47.6309 55.3736 48.5679 54.2925 48.5679H15.8619C14.7404 48.5679 13.6804 47.5931 13.6804 46.5624V23.471C13.6804 22.4423 14.7608 21.4324 15.8619 21.4324H54.2923C55.3548 21.4324 56.3219 22.4043 56.3219 23.471L56.3221 46.5624Z"
              fill="#F4F6F9"
            />
            <path
              d="M51.7957 25.7402C51.4981 25.2955 50.8971 25.1742 50.4519 25.4715L34.9987 35.7731L19.5457 25.4715C19.0994 25.1742 18.4988 25.2955 18.2019 25.7402C17.9051 26.1861 18.0254 26.7871 18.4707 27.084L34.4613 37.7444C34.624 37.8532 34.8114 37.9071 34.9989 37.9071C35.1863 37.9071 35.3736 37.8531 35.5365 37.7444L51.5271 27.084C51.9721 26.7871 52.0923 26.1861 51.7957 25.7402Z"
              fill="#F4F6F9"
            />
            <path
              d="M24.7447 35.1814L17.9608 40.027C17.5251 40.3375 17.4242 40.9432 17.7351 41.3785C17.9245 41.6435 18.2225 41.7846 18.5249 41.7846C18.7199 41.7846 18.9168 41.7259 19.0871 41.6037L25.871 36.7581C26.3067 36.4476 26.4076 35.8419 26.0967 35.4066C25.7854 34.9702 25.1788 34.869 24.7447 35.1814Z"
              fill="#F4F6F9"
            />
            <path
              d="M45.2551 35.1814C44.8206 34.869 44.214 34.9704 43.9031 35.4067C43.5922 35.842 43.693 36.4478 44.1288 36.7581L50.9127 41.6037C51.083 41.7258 51.2799 41.7846 51.4749 41.7846C51.7772 41.7846 52.0755 41.6437 52.2647 41.3786C52.5756 40.9432 52.4748 40.3374 52.039 40.0271L45.2551 35.1814Z"
              fill="#F4F6F9"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_88_13750"
              x1="40.8717"
              y1="8.67138"
              x2="40.8717"
              y2="93.4497"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F33F3F" />
              <stop offset="1" stop-color="#AC1717" />
            </linearGradient>
            <clipPath id="clip0_88_13750">
              <rect width="70" height="70" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div class="mt-[30px] center flex-col gap-[24px]">
          <h3 class="tanker uppercase text-[30px] text-white">
            enter Access Code
          </h3>
          <p
            class="font-[400] text-[16px] leading-[24px] text-[#E6DDDD] gilroy_sm text-center"
          >
            Please check your email for access code. Please enter a 4-digit
            access code to download material.
          </p>
        </div>
        <form class="mt-[40px] flex flex-col gap-[16px]" onsubmit="handleSubmitCode(event)">
          <h4 class="text-white gilroy_sm">Enter Access Code</h4>
          <div class="flex items-center gap-[12px]">
            <input
              type="number" 
              required
              class="text-center p-[12px] border-[0.8px] border-[#ffffff29] bg-[#ffffff0f] text-white w-[69px] h-[69px] md:w-[100px] md:h-[56px] rounded-[10px]"
              placeholder="-"
            />
            <input
              type="number"
               required
               class="text-center p-[12px] border-[0.8px] border-[#ffffff29] bg-[#ffffff0f] text-white w-[69px] h-[69px] md:w-[100px] md:h-[56px] rounded-[10px]"
              placeholder="-"
            />
            <span class="tanker text-[40px] text-white">-</span>
            <input
              type="number" 
              required
                  class="text-center p-[12px] border-[0.8px] border-[#ffffff29] bg-[#ffffff0f] text-white w-[69px] h-[69px] md:w-[100px] md:h-[56px] rounded-[10px]"
              placeholder="-"
            />
            <input
              type="number" 
              required
               class="text-center p-[12px] border-[0.8px] border-[#ffffff29] bg-[#ffffff0f] text-white w-[69px] h-[69px] md:w-[100px] md:h-[56px] rounded-[10px]"
              placeholder="-"
            />
          </div>
          <button
            class="ctaBtn py-[8px] px-[20px] text-white rounded-[10px] text-[16px] mt-[14px]"
          >
            Submit
          </button>
        </form>
        <p class="mt-[24px]">
          <span class="text-[#E6DDDD]">Didn’t get Access Code?</span>
          <a href="/" class="gilroy_sm text-white">Resend Code</a>
        </p>
      </div>
    </div>
`;
const downloadStartedModal = `   <div id="modal" class="w-screen h-screen fixed top-0 left-0 bg-[#00000080] center z-[999]">
      <div
        class="bg-[#0D1621] rounded-[20px] w-[90%] sm:w-[520px] flex justify-start items-center flex-col p-[30px] relative"
      >
        <button class="absolute top-[30px] right-[30px]"
                  onclick="closeModal('modal')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M11.6449 2.04935C12.1134 1.58082 12.1134 0.819928 11.6449 0.351398C11.1763 -0.117133 10.4154 -0.117133 9.9469 0.351398L6 4.30205L2.04935 0.355146C1.58082 -0.113384 0.819928 -0.113384 0.351398 0.355146C-0.117133 0.823676 -0.117133 1.58457 0.351398 2.0531L4.30205 6L0.355146 9.95065C-0.113384 10.4192 -0.113384 11.1801 0.355146 11.6486C0.823676 12.1171 1.58457 12.1171 2.0531 11.6486L6 7.69795L9.95065 11.6449C10.4192 12.1134 11.1801 12.1134 11.6486 11.6449C12.1171 11.1763 12.1171 10.4154 11.6486 9.9469L7.69795 6L11.6449 2.04935Z"
              fill="white"
            />
          </svg>
        </button>
        <div class="center flex-col gap-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <g clip-path="url(#clip0_88_13219)">
              <path
                d="M70 35.0008C70 54.3323 54.3312 70.0005 35.0005 70C15.6688 70.0005 4.38357e-08 54.3323 4.38357e-08 35.0008C-0.000956987 15.6693 15.6688 0 35.0005 0C54.3312 0 70 15.6699 70 35.0008Z"
                fill="#3BD238"
              />
              <path
                d="M69.9284 37.143C69.906 37.1206 69.8837 37.0979 69.8612 37.0757C69.8195 37.0337 51.499 18.7133 51.4568 18.6713C47.2512 14.4329 41.4282 11.8019 34.9999 11.8019C22.2087 11.8019 11.8018 22.2086 11.8018 35C11.8018 41.4279 14.4326 47.2506 18.6706 51.4563C18.7128 51.4989 18.7551 51.5411 18.7975 51.5832C18.8398 51.6257 37.0343 69.8203 37.077 69.8625C37.0988 69.8845 37.121 69.9067 37.143 69.9284C54.7659 68.8642 68.8637 54.7663 69.9284 37.143Z"
                fill="#32B537"
              />
              <path
                d="M34.9999 11.8019C22.2087 11.8019 11.8018 22.2088 11.8018 35C11.8018 47.7913 22.2087 58.1982 34.9999 58.1982C47.7912 58.1982 58.1981 47.7913 58.1981 35C58.1981 22.2088 47.7912 11.8019 34.9999 11.8019ZM34.9999 56.265C23.2744 56.265 13.735 46.7256 13.735 35C13.735 23.2745 23.2744 13.7351 34.9999 13.7351C46.7255 13.7351 56.2649 23.2745 56.2649 35C56.2649 46.7256 46.7255 56.265 34.9999 56.265Z"
                fill="#F4F6F9"
              />
              <path
                d="M44.9489 37.2163L35.9665 46.1988V21.4677C35.9665 20.9334 35.5336 20.5011 34.9999 20.5011C34.4661 20.5011 34.0333 20.9334 34.0333 21.4677V46.1989L25.0509 37.2165C24.6733 36.8389 24.0617 36.8389 23.6841 37.2165C23.3065 37.5941 23.3065 38.2056 23.6841 38.5832L34.3159 49.215C34.4052 49.3045 34.5122 49.3753 34.6308 49.4244C34.7489 49.4732 34.8741 49.4989 35 49.4989C35.1259 49.4989 35.2512 49.4732 35.3693 49.4244C35.4878 49.3753 35.5949 49.3045 35.6842 49.215L46.316 38.5832C46.6936 38.2056 46.6936 37.5941 46.316 37.2165C45.9384 36.8389 45.3267 36.8389 44.9489 37.2163Z"
                fill="#F4F6F9"
              />
            </g>
            <defs>
              <clipPath id="clip0_88_13219">
                <rect width="70" height="70" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h3 class="uppercase text-white tanker text-[30px]">
            Download Started!
          </h3>
          <p class="text-[#E6DDDD] text-[16px] gilroy_sm text-center">
            Your download has started successfully. Enjoy your exclusive
            marketing materials and resources for our games.
          </p>
          <button
          onclick="closeModal('modal')"
            class="ctaBtn py-[8px] px-[20px] text-white rounded-[10px] text-[16px] mt-[14px] w-full"
          >
            Close
          </button>
        </div>
      </div>

    </div>`;
const displayCodeModal = () => {
  document.body.innerHTML += enterAccessTokenModal;
};

const closeModal = (id) => {
  document.getElementById(id || "modal")?.remove();
};

const handleSubmitCode = (e) => {
  e.preventDefault();
  const form = e.target;
  document.getElementById("enter_code_modal")?.remove();

  document.body.innerHTML += downloadStartedModal;
};
