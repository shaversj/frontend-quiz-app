import React from "react";

const HomePage = ({ startQuizHandler }) => {
  return (
    <>
      <main className={"pt-6"}>
        <div className={"px-6"}>
          <h1 className={"text-[40px] font-light leading-[2.82rem] text-dark-navy"}>
            Welcome to the <strong className={"font-medium"}>Frontend Quiz!</strong>
          </h1>

          <p className={"pt-3 text-[14px] italic leading-none text-dark-navy"}>Pick a subject to get started</p>
        </div>

        <div className={"mx-6 space-y-3 pt-[40px]"}>
          <button onClick={() => startQuizHandler("HTML")} className={"flex w-full items-center gap-x-[16px] rounded-lg bg-white p-3"}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#FFF1E9" />
              <path
                d="M23.2188 11.1482C23.326 11.1958 23.4227 11.264 23.5035 11.349C23.5843 11.434 23.6476 11.5341 23.6897 11.6435C23.7318 11.753 23.752 11.8697 23.749 11.9869C23.746 12.1041 23.72 12.2196 23.6724 12.3268L16.5295 28.3982C16.4334 28.6146 16.2552 28.784 16.0342 28.8691C15.8131 28.9541 15.5674 28.9479 15.3509 28.8518C15.1345 28.7556 14.9651 28.5775 14.8801 28.3564C14.795 28.1354 14.8012 27.8896 14.8974 27.6732L22.0402 11.6018C22.0878 11.4946 22.1561 11.3979 22.241 11.3171C22.326 11.2363 22.4261 11.173 22.5356 11.1309C22.645 11.0887 22.7617 11.0686 22.8789 11.0716C22.9961 11.0746 23.1116 11.1006 23.2188 11.1482ZM13.4509 15.3143C13.5384 15.3924 13.6096 15.4869 13.6606 15.5925C13.7115 15.6982 13.7411 15.8128 13.7478 15.9298C13.7544 16.0469 13.7379 16.1641 13.6992 16.2748C13.6606 16.3855 13.6005 16.4875 13.5224 16.575L10.4813 20L13.5259 23.425C13.6038 23.5127 13.6636 23.6149 13.702 23.7257C13.7403 23.8365 13.7565 23.9538 13.7495 24.0709C13.7426 24.188 13.7126 24.3025 13.6614 24.408C13.6102 24.5135 13.5386 24.6079 13.4509 24.6857C13.3632 24.7636 13.2611 24.8234 13.1502 24.8617C13.0394 24.9001 12.9221 24.9163 12.805 24.9093C12.688 24.9023 12.5734 24.8724 12.4679 24.8212C12.3624 24.7699 12.2681 24.6984 12.1902 24.6107L8.61879 20.5929C8.47369 20.4295 8.39355 20.2185 8.39355 20C8.39355 19.7815 8.47369 19.5705 8.61879 19.4071L12.1902 15.3893C12.2681 15.3016 12.3624 15.23 12.4679 15.1788C12.5734 15.1275 12.688 15.0976 12.805 15.0906C12.9221 15.0836 13.0394 15.0998 13.1502 15.1382C13.2611 15.1766 13.3632 15.2364 13.4509 15.3143ZM26.5492 15.3143C26.6368 15.2364 26.739 15.1766 26.8498 15.1382C26.9607 15.0998 27.078 15.0836 27.195 15.0906C27.3121 15.0976 27.4267 15.1275 27.5322 15.1788C27.6377 15.23 27.732 15.3016 27.8099 15.3893L31.3813 19.4071C31.5264 19.5705 31.6065 19.7815 31.6065 20C31.6065 20.2185 31.5264 20.4295 31.3813 20.5929L27.8099 24.6107C27.732 24.6984 27.6376 24.7699 27.5322 24.8212C27.4267 24.8724 27.3121 24.9023 27.195 24.9093C27.078 24.9163 26.9607 24.9001 26.8499 24.8617C26.739 24.8234 26.6369 24.7636 26.5492 24.6857C26.4614 24.6079 26.3899 24.5135 26.3387 24.408C26.2875 24.3025 26.2575 24.188 26.2505 24.0709C26.2436 23.9538 26.2597 23.8365 26.2981 23.7257C26.3365 23.6149 26.3963 23.5127 26.4742 23.425L29.5188 20L26.4742 16.575C26.3963 16.4873 26.3364 16.3851 26.2981 16.2743C26.2597 16.1635 26.2435 16.0462 26.2505 15.9291C26.2574 15.812 26.2874 15.6975 26.3386 15.592C26.3899 15.4865 26.4614 15.3921 26.5492 15.3143Z"
                fill="#FF7E35"
              />
            </svg>
            <h1 className={"text-[18px] font-medium text-dark-navy"}>HTML</h1>
          </button>

          <button onClick={() => startQuizHandler("CSS")} className={"flex w-full items-center gap-x-[16px] rounded-lg bg-white p-3"}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#E0FDEF" />
              <path
                d="M12.8567 7.50357C12.6199 7.50357 12.3928 7.59764 12.2254 7.76508C12.0579 7.93253 11.9639 8.15963 11.9639 8.39643V20.8929C11.9639 21.8401 12.3401 22.7485 13.0099 23.4182C13.6797 24.088 14.5881 24.4643 15.5353 24.4643H16.4282V28.9286C16.4282 29.3973 16.5205 29.8615 16.6999 30.2946C16.8793 30.7277 17.1422 31.1212 17.4737 31.4527C17.8051 31.7842 18.1987 32.0471 18.6318 32.2265C19.0648 32.4059 19.529 32.4982 19.9978 32.4982C20.4666 32.4982 20.9307 32.4059 21.3638 32.2265C21.7969 32.0471 22.1904 31.7842 22.5219 31.4527C22.8534 31.1212 23.1163 30.7277 23.2957 30.2946C23.4751 29.8615 23.5674 29.3973 23.5674 28.9286V24.4643H24.4639C25.4111 24.4643 26.3195 24.088 26.9892 23.4182C27.659 22.7485 28.0353 21.8401 28.0353 20.8929V8.39643C28.0353 8.15963 27.9412 7.93253 27.7738 7.76508C27.6063 7.59764 27.3792 7.50357 27.1424 7.50357H12.8567ZM26.2496 18.2143H13.7496V9.28929H19.1067V11.9714C19.1067 12.2082 19.2008 12.4353 19.3682 12.6028C19.5357 12.7702 19.7628 12.8643 19.9996 12.8643C20.2364 12.8643 20.4635 12.7702 20.6309 12.6028C20.7984 12.4353 20.8924 12.2082 20.8924 11.9714V9.28929H22.6782V13.7464C22.6782 13.9832 22.7722 14.2103 22.9397 14.3778C23.1071 14.5452 23.3342 14.6393 23.571 14.6393C23.8078 14.6393 24.0349 14.5452 24.2024 14.3778C24.3698 14.2103 24.4639 13.9832 24.4639 13.7464V9.28929H26.2496V18.2143ZM13.7496 20.8929V20H26.2496V20.8929C26.2496 21.3665 26.0614 21.8207 25.7266 22.1555C25.3917 22.4904 24.9375 22.6786 24.4639 22.6786H22.6746C22.4378 22.6786 22.2107 22.7726 22.0432 22.9401C21.8758 23.1075 21.7817 23.3346 21.7817 23.5714V28.9286C21.7817 29.4017 21.5938 29.8554 21.2592 30.19C20.9247 30.5246 20.4709 30.7125 19.9978 30.7125C19.5247 30.7125 19.0709 30.5246 18.7364 30.19C18.4018 29.8554 18.2139 29.4017 18.2139 28.9286V23.5714C18.2139 23.3346 18.1198 23.1075 17.9524 22.9401C17.7849 22.7726 17.5578 22.6786 17.321 22.6786H15.5353C15.0617 22.6786 14.6075 22.4904 14.2726 22.1555C13.9377 21.8207 13.7496 21.3665 13.7496 20.8929Z"
                fill="#2FD887"
              />
            </svg>

            <h1 className={"text-[18px] font-medium text-dark-navy"}>CSS</h1>
          </button>

          <button onClick={() => startQuizHandler("JavaScript")} className={"flex w-full items-center gap-x-[16px] rounded-lg bg-white p-3"}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#EBF0FF" />
              <path
                d="M20.8923 19.1071C20.8923 18.3967 21.1745 17.7154 21.6768 17.2131C22.1792 16.7108 22.8605 16.4286 23.5709 16.4286H26.2494C26.4862 16.4286 26.7133 16.5226 26.8808 16.6901C27.0482 16.8575 27.1423 17.0846 27.1423 17.3214C27.1423 17.5582 27.0482 17.7853 26.8808 17.9528C26.7133 18.1202 26.4862 18.2143 26.2494 18.2143H23.5709C23.3341 18.2143 23.107 18.3084 22.9395 18.4758C22.7721 18.6432 22.678 18.8703 22.678 19.1071V20C22.678 20.2368 22.7721 20.4639 22.9395 20.6313C23.107 20.7988 23.3341 20.8929 23.5709 20.8929H24.4637C25.1741 20.8929 25.8554 21.1751 26.3578 21.6774C26.8601 22.1797 27.1423 22.861 27.1423 23.5714V24.4643C27.1423 25.1747 26.8601 25.856 26.3578 26.3583C25.8554 26.8607 25.1741 27.1429 24.4637 27.1429H21.7852C21.5484 27.1429 21.3213 27.0488 21.1538 26.8813C20.9864 26.7139 20.8923 26.4868 20.8923 26.25C20.8923 26.0132 20.9864 25.7861 21.1538 25.6187C21.3213 25.4512 21.5484 25.3571 21.7852 25.3571H24.4637C24.7005 25.3571 24.9276 25.2631 25.0951 25.0956C25.2625 24.9282 25.3566 24.7011 25.3566 24.4643V23.5714C25.3566 23.3346 25.2625 23.1075 25.0951 22.9401C24.9276 22.7726 24.7005 22.6786 24.4637 22.6786H23.5709C22.8605 22.6786 22.1792 22.3964 21.6768 21.894C21.1745 21.3917 20.8923 20.7104 20.8923 20V19.1071ZM19.9994 17.3214C19.9994 17.0846 19.9054 16.8575 19.7379 16.6901C19.5705 16.5226 19.3434 16.4286 19.1066 16.4286C18.8698 16.4286 18.6427 16.5226 18.4752 16.6901C18.3078 16.8575 18.2137 17.0846 18.2137 17.3214V24.4643C18.2137 24.7011 18.1197 24.9282 17.9522 25.0956C17.7848 25.2631 17.5577 25.3571 17.3209 25.3571H15.5352C15.2984 25.3571 15.0713 25.4512 14.9038 25.6187C14.7364 25.7861 14.6423 26.0132 14.6423 26.25C14.6423 26.4868 14.7364 26.7139 14.9038 26.8813C15.0713 27.0488 15.2984 27.1429 15.5352 27.1429H17.3209C18.0313 27.1429 18.7126 26.8607 19.2149 26.3583C19.7172 25.856 19.9994 25.1747 19.9994 24.4643V17.3214ZM9.28516 13.75C9.28516 12.566 9.7555 11.4305 10.5927 10.5933C11.4299 9.75606 12.5654 9.28572 13.7494 9.28572H26.2494C27.4334 9.28572 28.569 9.75606 29.4062 10.5933C30.2434 11.4305 30.7137 12.566 30.7137 13.75V26.25C30.7137 27.434 30.2434 28.5695 29.4062 29.4067C28.569 30.2439 27.4334 30.7143 26.2494 30.7143H13.7494C12.5654 30.7143 11.4299 30.2439 10.5927 29.4067C9.7555 28.5695 9.28516 27.434 9.28516 26.25V13.75ZM13.7494 11.0714C13.039 11.0714 12.3577 11.3536 11.8554 11.856C11.3531 12.3583 11.0709 13.0396 11.0709 13.75V26.25C11.0709 26.9604 11.3531 27.6417 11.8554 28.144C12.3577 28.6464 13.039 28.9286 13.7494 28.9286H26.2494C26.9598 28.9286 27.6411 28.6464 28.1435 28.144C28.6458 27.6417 28.928 26.9604 28.928 26.25V13.75C28.928 13.0396 28.6458 12.3583 28.1435 11.856C27.6411 11.3536 26.9598 11.0714 26.2494 11.0714H13.7494Z"
                fill="#306AFF"
              />
            </svg>
            <h1 className={"text-[18px] font-medium text-dark-navy"}>Javascript</h1>
          </button>

          <button onClick={() => startQuizHandler("Accessibility")} className={"flex w-full items-center gap-x-[16px] rounded-lg bg-white p-3"}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#F6E7FF" />
              <path
                d="M17.7678 11.5179C17.7678 10.9259 18.003 10.3581 18.4216 9.93949C18.8402 9.52089 19.408 9.28571 20 9.28571C20.592 9.28571 21.1597 9.52089 21.5783 9.93949C21.9969 10.3581 22.2321 10.9259 22.2321 11.5179C22.2321 12.1099 21.9969 12.6776 21.5783 13.0962C21.1597 13.5148 20.592 13.75 20 13.75C19.408 13.75 18.8402 13.5148 18.4216 13.0962C18.003 12.6776 17.7678 12.1099 17.7678 11.5179ZM20 7.5C19.394 7.50001 18.7959 7.63708 18.2504 7.90097C17.7049 8.16485 17.2261 8.5487 16.85 9.02379C16.4738 9.49888 16.21 10.0529 16.0783 10.6444C15.9465 11.2359 15.9503 11.8495 16.0893 12.4393L13.2107 11.2786C12.5123 10.9973 11.731 11.0031 11.0368 11.2946C10.3426 11.5862 9.79161 12.1401 9.50354 12.8357C9.36095 13.1802 9.28806 13.5496 9.28907 13.9224C9.29009 14.2953 9.36499 14.6642 9.50945 15.0079C9.65392 15.3516 9.86507 15.6633 10.1307 15.9249C10.3964 16.1866 10.7112 16.3929 11.0571 16.5321L14.6428 17.9804V22.2375L11.4053 28.3268C11.23 28.6563 11.1214 29.017 11.0855 29.3885C11.0496 29.76 11.0873 30.1349 11.1963 30.4918C11.3053 30.8488 11.4836 31.1807 11.7209 31.4687C11.9582 31.7568 12.25 31.9952 12.5794 32.1705C13.2448 32.5246 14.0236 32.5997 14.7445 32.3796C15.4653 32.1594 16.0692 31.6618 16.4232 30.9964L20 24.2679L23.5785 30.9964C23.9323 31.6618 24.5359 32.1595 25.2566 32.3798C25.9773 32.6002 26.756 32.5252 27.4214 32.1714C28.0868 31.8176 28.5844 31.214 28.8048 30.4934C29.0251 29.7727 28.9502 28.994 28.5964 28.3286L25.3571 22.2357V17.9804L28.9428 16.5321C29.2887 16.3929 29.6036 16.1866 29.8692 15.9249C30.1349 15.6633 30.346 15.3516 30.4905 15.0079C30.6349 14.6642 30.7099 14.2953 30.7109 13.9224C30.7119 13.5496 30.639 13.1802 30.4964 12.8357C30.2087 12.1397 29.6578 11.5855 28.9635 11.2936C28.2693 11.0016 27.4879 10.9956 26.7893 11.2768L23.9125 12.4393C24.0515 11.8493 24.0552 11.2355 23.9234 10.6439C23.7915 10.0523 23.5275 9.49821 23.1512 9.02309C22.7748 8.54796 22.2959 8.16415 21.7501 7.90038C21.2044 7.63662 20.6061 7.49974 20 7.5ZM11.1553 13.5161C11.2634 13.2563 11.4693 13.0494 11.7285 12.9402C11.9878 12.8309 12.2797 12.828 12.541 12.9321L18.6625 15.4054C19.5205 15.7519 20.4795 15.7519 21.3375 15.4054L27.4589 12.9321C27.7203 12.828 28.0121 12.8309 28.2714 12.9402C28.5307 13.0494 28.7366 13.2563 28.8446 13.5161C28.8975 13.6428 28.9247 13.7788 28.9245 13.9161C28.9244 14.0535 28.8969 14.1894 28.8438 14.3161C28.7906 14.4427 28.7127 14.5575 28.6148 14.6537C28.5168 14.75 28.4007 14.8258 28.2732 14.8768L24.6875 16.3232C24.3572 16.4568 24.0744 16.6862 23.8755 16.9818C23.6766 17.2775 23.5707 17.6258 23.5714 17.9821V22.2375C23.5712 22.5302 23.643 22.8184 23.7803 23.0768L27.0196 29.1679C27.1367 29.4136 27.1546 29.695 27.0694 29.9536C26.9842 30.2121 26.8025 30.4278 26.5622 30.5558C26.322 30.6837 26.0416 30.7141 25.7795 30.6405C25.5175 30.5669 25.2939 30.395 25.1553 30.1607L21.5768 23.4286C21.4246 23.1424 21.1975 22.9031 20.9198 22.7361C20.642 22.5692 20.324 22.481 20 22.481C19.6759 22.481 19.3579 22.5692 19.0802 22.7361C18.8024 22.9031 18.5753 23.1424 18.4232 23.4286L14.8464 30.1554C14.7813 30.2778 14.6928 30.3862 14.5858 30.4744C14.4788 30.5625 14.3556 30.6288 14.223 30.6693C14.0904 30.7099 13.9512 30.7239 13.8132 30.7106C13.6752 30.6974 13.5411 30.657 13.4187 30.592C13.2963 30.5269 13.1879 30.4383 13.0997 30.3314C13.0115 30.2244 12.9453 30.1011 12.9047 29.9686C12.8642 29.836 12.8502 29.6967 12.8634 29.5587C12.8767 29.4207 12.917 29.2867 12.9821 29.1643L16.2196 23.075C16.3567 22.8171 16.4284 22.5296 16.4285 22.2375V17.9804C16.4285 17.6247 16.3223 17.2771 16.1235 16.9821C15.9246 16.6872 15.6422 16.4584 15.3125 16.325L11.7268 14.875C11.5992 14.824 11.4831 14.7482 11.3851 14.6519C11.2872 14.5557 11.2094 14.4409 11.1562 14.3143C11.103 14.1876 11.0756 14.0517 11.0754 13.9144C11.0753 13.777 11.1024 13.6428 11.1553 13.5161Z"
                fill="#A729F5"
              />
            </svg>
            <h1 className={"text-[18px] font-medium text-dark-navy"}>Accessibility</h1>
          </button>
        </div>
      </main>
    </>
  );
};

export default HomePage;
