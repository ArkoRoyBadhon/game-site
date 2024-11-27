var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const play = () => {
  document.body.innerHTML += `
     <div class="w-screen h-screen fixed top-0 left-0 bg-[#00000080] center z-[999]" id="modal">
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
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
          >
            <path
              d="M22.3241 47.7966H22.6241V47.4966V24.7182V24.4182H22.3241H18.7309H18.6598L18.5962 24.4501L12.532 27.4964L12.2744 27.6258L12.3934 27.8884L13.7748 30.9347L13.9035 31.2185L14.1822 31.0791L17.5964 29.372V47.4966V47.7966H17.8964H22.3241ZM40.0531 35.5171C41.4755 34.4053 42.8666 32.6515 42.8666 30.2032C42.8666 28.4153 42.1473 26.8615 40.8042 25.7602C39.4663 24.6633 37.5326 24.0334 35.125 24.0334C32.7675 24.0334 30.84 24.6392 29.4959 25.746C28.1456 26.8579 27.4118 28.4534 27.4118 30.3652C27.4118 32.7342 28.515 34.3829 29.9447 35.5372C28.1449 36.7192 26.5773 38.6337 26.5773 41.4971V41.4975C26.5794 43.5042 27.3281 45.1905 28.7988 46.3681C30.2612 47.539 32.405 48.1814 35.1574 48.1814C37.8785 48.1814 40.0226 47.5546 41.4926 46.3788C42.9717 45.1958 43.7335 43.4844 43.7335 41.3999C43.7335 39.7657 43.2641 38.5056 42.5036 37.5161C41.8477 36.6627 40.9856 36.0239 40.0531 35.5171ZM38.6734 41.3392L38.6734 41.3398C38.6752 42.2522 38.3337 42.9754 37.7375 43.4756C37.1355 43.9806 36.247 44.2799 35.125 44.2799C34.0941 44.2799 33.2213 44.0261 32.6126 43.5365C32.0133 43.0544 31.6374 42.3183 31.6374 41.2743C31.6374 39.5571 32.6541 38.4057 33.8134 37.6304C34.1186 37.7432 34.4195 37.8494 34.7133 37.9531C35.638 38.2792 36.4922 38.5806 37.1862 38.9872C37.6515 39.2599 38.0208 39.568 38.2742 39.9416C38.5248 40.3112 38.6734 40.7611 38.6734 41.3392ZM56.1736 45.5524H56.4736V45.2524V39.9054H61.691H61.991V39.6054V36.397V36.097H61.691H56.4736V30.75V30.45H56.1736H52.9005H52.6005V30.75V36.097H47.3831H47.0831V36.397V39.6054V39.9054H47.3831H52.6005V45.2524V45.5524H52.9005H56.1736ZM36.1955 33.9759C35.045 33.5903 34.0226 33.2188 33.2749 32.694C32.516 32.1613 32.0587 31.4843 32.0587 30.4624C32.0587 29.6144 32.3697 28.9904 32.8931 28.5714C33.4254 28.1453 34.2093 27.9065 35.1898 27.9065C36.1575 27.9065 36.9254 28.1377 37.4453 28.555C37.9558 28.9647 38.2602 29.5799 38.2602 30.43C38.2602 32.0692 37.1751 33.2159 36.1955 33.9759Z"
              fill="url(#paint0_linear_88_15006)"
              stroke="url(#paint1_linear_88_15006)"
              stroke-width="0.6"
            />
            <path
              d="M71.3 36C71.3 16.5073 55.4926 0.7 36 0.7C16.5073 0.7 0.7 16.5073 0.7 36C0.7 55.4926 16.5073 71.3 36 71.3C55.4926 71.3 71.3 55.4926 71.3 36ZM7.13333 36C7.13333 20.0552 20.0552 7.13333 36 7.13333C51.9448 7.13333 64.8667 20.0552 64.8667 36C64.8667 51.9448 51.9448 64.8667 36 64.8667C20.0552 64.8667 7.13333 51.9448 7.13333 36Z"
              fill="url(#paint2_linear_88_15006)"
              stroke="url(#paint3_linear_88_15006)"
              stroke-width="0.6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_88_15006"
                x1="37.1788"
                y1="19.2874"
                x2="37.1788"
                y2="58.8144"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F33F3F" />
                <stop offset="1" stop-color="#AC1717" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_88_15006"
                x1="37.1788"
                y1="19.2874"
                x2="37.1788"
                y2="58.8144"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F33F3F" />
                <stop offset="1" stop-color="#AC1717" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_88_15006"
                x1="36"
                y1="-14"
                x2="36"
                y2="103.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F33F3F" />
                <stop offset="1" stop-color="#AC1717" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_88_15006"
                x1="36"
                y1="-14"
                x2="36"
                y2="103.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F33F3F" />
                <stop offset="1" stop-color="#AC1717" />
              </linearGradient>
            </defs>
          </svg>

          <h3 class="uppercase text-white tanker text-[30px]">
            Responsible gaming
          </h3>
          <p class="text-[#E6DDDD] text-[16px] gilroy_sm text-center">
            Before you try our games, please verify your age. Spearhead Studios
            adheres to responsable gaming principles. Please confirm you are of
            legal age to experience our games.
          </p>
          <div class="mt-[14px] flex-col md:flex-row flex items-center justify-center gap-[20px] w-full">
          <a
    href="game_details.html"
            class="ctaBtn center w-full py-[8px] px-[20px] text-white rounded-[10px] text-[16px] "
          >
         Yes, I’m over 18
          </a>
        <button
         onclick="closeModal('modal')"
                class="py-[8px] px-[20px] rounded-[10px] ctaNobg text-white w-full hover:bg-gradient-to-b from-[#F33F3F] to-[#AC1717] transition-all ease-in"
              >
              No take me back
              </button>
          </div>
        </div>
      </div>
    </div>
  `;
};
const closeModal = (id) => {
  document.getElementById(id || "modal")?.remove();
};
document
  .getElementById("user_acc_form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const form = e.target;
    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      company: form.company.value,
      email: form.email.value,
      skypeId: form.skypeId.value,
    };

    let errors = [];

    if (validator.isEmpty(formData.firstName)) {
      errors.push("* First name is required");
    }
    if (validator.isEmpty(formData.lastName)) {
      errors.push("* Last name is required");
    }
    if (validator.isEmpty(formData.company)) {
      errors.push("* Company is required");
    }
    if (!validator.isEmail(formData.email)) {
      errors.push("* Valid email is required");
    }
    if (validator.isEmpty(formData.skypeId)) {
      errors.push("* Skype ID is required");
    }

    if (errors.length > 0) {
      document.getElementById("errorMessages").style.color = "#ff8686";
      document.getElementById("errorMessages").innerHTML = errors.join("<br>");
    } else {
      document.getElementById("info_bob").innerHTML = `
      
          <div class="xl:w-[634px] p-[20px]" id="info_bob">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
  <g clip-path="url(#clip0_88_15358)">
    <path d="M70 35.5008C70 54.8323 54.3312 70.5005 35.0005 70.5C15.6688 70.5005 4.38357e-08 54.8323 4.38357e-08 35.5008C-0.000956987 16.1693 15.6688 0.5 35.0005 0.5C54.3312 0.5 70 16.1699 70 35.5008Z" fill="#F33F3F"/>
    <path d="M69.9907 35.8524C69.9229 35.7839 52.4902 18.3509 52.4214 18.2832C47.9753 13.7843 41.8097 10.9883 34.9998 10.9883C21.4844 10.9883 10.4883 21.9843 10.4883 35.4996C10.4883 42.3092 13.2842 48.4745 17.7829 52.9209C17.8506 52.9895 17.9185 53.0573 17.9872 53.1251C18.055 53.1938 35.0799 70.2185 35.1485 70.2866C35.2162 70.355 35.2839 70.4225 35.3525 70.4905C54.4025 70.3025 69.8022 54.9029 69.9907 35.8524Z" fill="url(#paint0_linear_88_15358)"/>
    <path d="M44.5159 27.6053L29.9184 41.2304L25.509 36.821C25.11 36.422 24.4638 36.422 24.0648 36.821C23.6659 37.2199 23.6659 37.8662 24.0648 38.2651L29.1713 43.3723C29.3708 43.5712 29.6322 43.6715 29.8934 43.6715C30.1438 43.6715 30.3941 43.5802 30.5907 43.3967L45.9104 29.0984C46.3224 28.7134 46.3442 28.0672 45.9603 27.6552C45.5751 27.2423 44.9298 27.2194 44.5159 27.6053Z" fill="white"/>
    <path d="M34.9996 10.9893C21.4843 10.9893 10.4883 21.9853 10.4883 35.5006C10.4883 49.0159 21.4843 60.012 34.9996 60.012C48.515 60.012 59.511 49.0159 59.511 35.5006C59.511 21.9853 48.515 10.9893 34.9996 10.9893ZM34.9996 57.9692C22.6103 57.9692 12.531 47.8898 12.531 35.5006C12.531 23.1114 22.6103 13.032 34.9996 13.032C47.3889 13.032 57.4683 23.1113 57.4683 35.5006C57.4683 47.8899 47.3889 57.9692 34.9996 57.9692Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_88_15358" x1="40.2395" y1="-1.76219" x2="40.2395" y2="98.1165" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F33F3F"/>
      <stop offset="1" stop-color="#AC1717"/>
    </linearGradient>
    <clipPath id="clip0_88_15358">
      <rect width="70" height="70" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
            <h6
              class="text-[#FFF] tanker_regular text-[30px] font-normal leading-[38px] tracking-[0.6px] capitalize self-stretch mb-[30px]"
            >
             Access Code Sent!
            </h6>
            <p
              class="text-[#E6DDDD] gilroy_regular text-[16px] font-normal leading-[24px] capitalize self-stretch mb-[30px]"
            >
              A 4-digit access code has been sent to your email address. Please check your email. Click on the "Download Marketing Assets" button and enter this code on the next screen to complete the process and enjoy free exclusive marketing materials and resources for our games.
            </p>
            
         
          </div>
      `;
    }
  });
