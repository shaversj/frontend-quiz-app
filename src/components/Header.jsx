import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const Header = ({ iconPath, text }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className={"flex h-[72px] px-6 md:px-[64px] md:pt-[60px] lg:pl-[140px] lg:pr-[143px] lg:pt-[110px]"}>
      {iconPath && (
        <div className={"flex items-center gap-x-4"}>
          <img className={"h-[40px] w-[40px] md:h-[56px] md:w-[56px]"} src={iconPath} alt={""} />
          <h1 className={"text-left font-Rubik-Medium text-[18px] leading-6 text-dark-navy md:text-[28px] dark:text-white"}>{text}</h1>
        </div>
      )}

      <div className={"ml-auto flex items-center gap-x-2 md:gap-x-[14px]"}>
        <svg className={"h-4 w-4 md:h-6 md:w-6"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 1C8.13261 1 8.25979 1.05268 8.35355 1.14645C8.44732 1.24021 8.5 1.36739 8.5 1.5V2.5C8.5 2.63261 8.44732 2.75979 8.35355 2.85355C8.25979 2.94732 8.13261 3 8 3C7.86739 3 7.74021 2.94732 7.64645 2.85355C7.55268 2.75979 7.5 2.63261 7.5 2.5V1.5C7.5 1.36739 7.55268 1.24021 7.64645 1.14645C7.74021 1.05268 7.86739 1 8 1ZM8 11C8.79565 11 9.55871 10.6839 10.1213 10.1213C10.6839 9.55871 11 8.79565 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79565 5 8 5C7.20435 5 6.44129 5.31607 5.87868 5.87868C5.31607 6.44129 5 7.20435 5 8C5 8.79565 5.31607 9.55871 5.87868 10.1213C6.44129 10.6839 7.20435 11 8 11ZM8 10C7.46957 10 6.96086 9.78929 6.58579 9.41421C6.21071 9.03914 6 8.53043 6 8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10ZM14.5 8.5C14.6326 8.5 14.7598 8.44732 14.8536 8.35355C14.9473 8.25979 15 8.13261 15 8C15 7.86739 14.9473 7.74021 14.8536 7.64645C14.7598 7.55268 14.6326 7.5 14.5 7.5H13.5C13.3674 7.5 13.2402 7.55268 13.1464 7.64645C13.0527 7.74021 13 7.86739 13 8C13 8.13261 13.0527 8.25979 13.1464 8.35355C13.2402 8.44732 13.3674 8.5 13.5 8.5H14.5ZM8 13C8.13261 13 8.25979 13.0527 8.35355 13.1464C8.44732 13.2402 8.5 13.3674 8.5 13.5V14.5C8.5 14.6326 8.44732 14.7598 8.35355 14.8536C8.25979 14.9473 8.13261 15 8 15C7.86739 15 7.74021 14.9473 7.64645 14.8536C7.55268 14.7598 7.5 14.6326 7.5 14.5V13.5C7.5 13.3674 7.55268 13.2402 7.64645 13.1464C7.74021 13.0527 7.86739 13 8 13ZM2.5 8.5C2.63261 8.5 2.75979 8.44732 2.85355 8.35355C2.94732 8.25979 3 8.13261 3 8C3 7.86739 2.94732 7.74021 2.85355 7.64645C2.75979 7.55268 2.63261 7.5 2.5 7.5H1.5C1.36739 7.5 1.24021 7.55268 1.14645 7.64645C1.05268 7.74021 1 7.86739 1 8C1 8.13261 1.05268 8.25979 1.14645 8.35355C1.24021 8.44732 1.36739 8.5 1.5 8.5H2.5ZM3.146 3.146C3.19245 3.09944 3.24762 3.06249 3.30837 3.03729C3.36911 3.01208 3.43423 2.99911 3.5 2.99911C3.56577 2.99911 3.63089 3.01208 3.69163 3.03729C3.75238 3.06249 3.80755 3.09944 3.854 3.146L4.854 4.146C4.90049 4.19249 4.93736 4.24768 4.96252 4.30842C4.98768 4.36916 5.00063 4.43426 5.00063 4.5C5.00063 4.56574 4.98768 4.63084 4.96252 4.69158C4.93736 4.75232 4.90049 4.80751 4.854 4.854C4.80751 4.90049 4.75232 4.93736 4.69158 4.96252C4.63084 4.98768 4.56574 5.00063 4.5 5.00063C4.43426 5.00063 4.36916 4.98768 4.30842 4.96252C4.24768 4.93736 4.19249 4.90049 4.146 4.854L3.146 3.854C3.09944 3.80755 3.06249 3.75238 3.03729 3.69163C3.01208 3.63089 2.99911 3.56577 2.99911 3.5C2.99911 3.43423 3.01208 3.36911 3.03729 3.30837C3.06249 3.24762 3.09944 3.19245 3.146 3.146ZM3.854 12.854C3.80758 12.9005 3.75245 12.9374 3.69177 12.9626C3.6311 12.9877 3.56605 13.0007 3.50035 13.0008C3.43466 13.0008 3.36959 12.9879 3.30888 12.9628C3.24816 12.9377 3.19299 12.9009 3.1465 12.8545C3.10001 12.8081 3.06312 12.753 3.03794 12.6923C3.01275 12.6316 2.99977 12.5666 2.99972 12.5009C2.99968 12.4352 3.01257 12.3701 3.03767 12.3094C3.06277 12.2487 3.09958 12.1935 3.146 12.147L4.146 11.147C4.19242 11.1005 4.24755 11.0636 4.30823 11.0384C4.3689 11.0133 4.43395 11.0003 4.49965 11.0002C4.56534 11.0002 4.63041 11.0131 4.69112 11.0382C4.75184 11.0633 4.80701 11.1001 4.8535 11.1465C4.89999 11.1929 4.93688 11.248 4.96206 11.3087C4.98725 11.3694 5.00023 11.4344 5.00028 11.5001C5.00032 11.5658 4.98743 11.6309 4.96233 11.6916C4.93723 11.7523 4.90042 11.8075 4.854 11.854L3.854 12.854ZM12.854 3.146C12.8076 3.09944 12.7524 3.06249 12.6916 3.03729C12.6309 3.01208 12.5658 2.99911 12.5 2.99911C12.4342 2.99911 12.3691 3.01208 12.3084 3.03729C12.2476 3.06249 12.1924 3.09944 12.146 3.146L11.146 4.146C11.0521 4.23989 10.9994 4.36722 10.9994 4.5C10.9994 4.63278 11.0521 4.76011 11.146 4.854C11.2399 4.94789 11.3672 5.00063 11.5 5.00063C11.6328 5.00063 11.7601 4.94789 11.854 4.854L12.854 3.854C12.9006 3.80755 12.9375 3.75238 12.9627 3.69163C12.9879 3.63089 13.0009 3.56577 13.0009 3.5C13.0009 3.43423 12.9879 3.36911 12.9627 3.30837C12.9375 3.24762 12.9006 3.19245 12.854 3.146ZM12.146 12.854C12.2398 12.9479 12.367 13.0007 12.4996 13.0008C12.6323 13.0009 12.7596 12.9483 12.8535 12.8545C12.9474 12.7607 13.0002 12.6335 13.0003 12.5009C13.0004 12.3682 12.9478 12.2409 12.854 12.147L11.854 11.147C11.7602 11.0531 11.633 11.0003 11.5004 11.0002C11.3677 11.0001 11.2404 11.0527 11.1465 11.1465C11.0526 11.2403 10.9998 11.3675 10.9997 11.5001C10.9996 11.6328 11.0522 11.7601 11.146 11.854L12.146 12.854Z"
            fill="#626C7F"
          />
        </svg>

        <Switch checked={darkMode} onChange={toggleDarkMode} className={"relative inline-flex h-5 w-8 items-center rounded-full bg-secondary-purple md:h-7 md:w-12"}>
          <span className="sr-only">Enable notifications</span>
          <span className={`${darkMode ? "translate-x-4 md:translate-x-6" : "translate-x-1"} inline-block h-3 w-3 transform rounded-full bg-white transition md:h-5 md:w-5`} />
        </Switch>

        <svg className={"h-4 w-4 md:h-6 md:w-6"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.85002 3.01501C8.69701 3.08205 9.51295 3.36382 10.2208 3.83372C10.9287 4.30362 11.5051 4.94615 11.8958 5.70067C12.2864 6.45519 12.4783 7.29681 12.4534 8.14608C12.4284 8.99536 12.1875 9.82427 11.7533 10.5546C11.3191 11.2849 10.706 11.8925 9.97179 12.3201C9.23758 12.7477 8.40652 12.9811 7.55706 12.9984C6.70759 13.0156 5.86774 12.8162 5.11678 12.4187C4.36582 12.0213 3.72851 11.4391 3.26502 10.727C4.66802 10.347 6.58102 9.42501 7.42502 7.17601C7.97702 5.70201 8.00902 4.23701 7.85002 3.01501ZM13.456 8.00001C13.456 7.19443 13.2937 6.39711 12.9789 5.65559C12.6641 4.91407 12.2032 4.24353 11.6236 3.68398C11.0441 3.12442 10.3578 2.68729 9.60573 2.39866C8.85363 2.11003 8.05111 1.97582 7.24602 2.00401C7.17396 2.00638 7.10327 2.0243 7.03879 2.05655C6.97431 2.08879 6.91756 2.1346 6.87245 2.19083C6.82733 2.24706 6.7949 2.31239 6.7774 2.38232C6.75989 2.45226 6.75771 2.52516 6.77102 2.59601C7.00102 3.81001 7.05102 5.32401 6.48802 6.82401C5.68802 8.95801 3.68602 9.66401 2.41102 9.89501C2.33512 9.90874 2.26342 9.93984 2.20154 9.98588C2.13965 10.0319 2.08926 10.0917 2.0543 10.1604C2.01934 10.2292 2.00077 10.3051 2.00002 10.3822C1.99928 10.4593 2.01639 10.5356 2.05002 10.605C2.63978 11.8299 3.62803 12.8182 4.85289 13.408C6.07775 13.9978 7.46661 14.1542 8.79195 13.8515C10.1173 13.5488 11.3006 12.805 12.1479 11.7419C12.9953 10.6788 13.4565 9.35948 13.456 8.00001Z"
            fill="#626C7F"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
