import React from "react";
import Link from "next/link";
import DropdownDefault from "./Dropdowns/DropdownDefault";

interface LinkListType {
  icon: any;
  title: string;
  link: string;
}

const linkList: LinkListType[] = [
  {
    icon: (
      <svg
        width="21"
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 2.86363V20.8636C15 22.8793 16.3892 24 17.8636 24C19.2273 24 20.7273 23.0454 20.7273 20.8636V2.99999C20.7273 1.15483 19.3636 0 17.8636 0C16.3636 0 15 1.27415 15 2.86363Z"
          fill="#F8AB00"
        />
        <path
          d="M7.5 11.9999V20.8635C7.5 22.8791 8.8892 23.9999 10.3636 23.9999C11.7273 23.9999 13.2273 23.0453 13.2273 20.8635V12.1362C13.2273 10.2911 11.8636 9.13623 10.3636 9.13623C8.86364 9.13623 7.5 10.4104 7.5 11.9999Z"
          fill="#E37300"
        />
        <path
          d="M5.72727 21.1366C5.72727 22.7176 4.4446 24.0002 2.86364 24.0002C1.28267 24.0002 0 22.7176 0 21.1366C0 19.5556 1.28267 18.2729 2.86364 18.2729C4.4446 18.2729 5.72727 19.5556 5.72727 21.1366Z"
          fill="#E37300"
        />
      </svg>
    ),
    title: "Google Analytics",
    link: "#",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1643_5788)">
          <path
            d="M12 0.375C5.55 0.375 0.375 5.55 0.375 12C0.375 18.45 5.55 23.625 12 23.625C18.45 23.625 23.625 18.45 23.625 12C23.625 5.55 18.45 0.375 12 0.375ZM15.075 7.4625C14.6625 7.4625 14.325 7.4625 13.9125 7.4625C13.3875 7.4625 13.05 7.725 13.05 8.2125C13.0125 8.625 13.05 9.075 13.05 9.4125C13.05 9.5625 13.0875 9.5625 13.2 9.5625C13.7625 9.5625 14.3625 9.5625 14.925 9.5625C15.075 9.5625 15.15 9.6 15.15 9.7875C15.1125 10.4625 15 11.175 15 11.85C15 12 14.9625 12 14.775 12C14.2875 12 13.875 12 13.3875 12C13.0875 12 13.125 11.9625 13.125 12.2625C13.125 14.4375 13.125 16.5 13.125 18.675C13.125 18.9 13.0875 18.9375 12.8625 18.9375C12.075 18.9375 11.2875 18.9375 10.5 18.9375C10.275 18.9375 10.2375 18.9 10.2375 18.675C10.2375 17.55 10.2375 16.5 10.2375 15.45C10.2375 14.4 10.2375 13.275 10.2375 12.1875C10.2375 12.0375 10.2 11.925 10.0125 11.9625C9.7125 11.9625 9.3375 11.9625 9 11.9625C8.775 12.075 8.775 12 8.775 11.85C8.775 11.175 8.775 10.5375 8.775 9.7875C8.775 9.6375 8.8125 9.6375 8.925 9.6375C9.3 9.6375 9.6 9.6375 9.975 9.6375C10.2 9.6375 10.2375 9.6 10.2375 9.375C10.2375 8.85 10.2375 8.3625 10.2375 7.8C10.2375 7.1625 10.3875 6.6 10.7625 6.075C11.25 5.4375 11.925 5.1375 12.675 5.0625C13.4625 5.025 14.25 5.0625 15.0375 5.025C15.15 5.025 15.1875 5.0625 15.1875 5.175C15.1875 5.85 15.1875 6.5625 15.1875 7.2375C15.225 7.3875 15.1875 7.4625 15.075 7.4625Z"
            fill="#4285F4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1643_5788">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Facebook Ads",
    link: "#",
  },
  {
    icon: (
      <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1.55217C0 0.694956 0.695478 0 1.55374 0H18.8723C19.7301 0 20.4261 0.697565 20.4261 1.55217V16.4478C20.4261 17.305 19.7306 18 18.8723 18H1.55374C0.696 18 0 17.3024 0 16.4478V1.55217ZM1.4087 2.18296V15.817C1.4087 16.2355 1.76087 16.5913 2.19548 16.5913H18.2306C18.6678 16.5913 19.0174 16.2449 19.0174 15.817V2.18296C19.0174 1.76452 18.6652 1.4087 18.2306 1.4087H2.19548C1.75826 1.4087 1.4087 1.75513 1.4087 2.18296ZM2.11304 9.23113C2.11304 8.8007 2.43652 8.45217 2.84035 8.45217H6.31565C6.71739 8.45217 7.04296 8.79861 7.04296 9.23113V15.887H2.11252V9.23113H2.11304ZM7.74783 6.41687C7.74783 5.98487 8.0713 5.63478 8.47513 5.63478H11.9504C12.3522 5.63478 12.6777 5.98122 12.6777 6.41687V15.887H7.7473V6.41687H7.74783ZM13.3826 3.5953C13.3826 3.16539 13.7061 2.81687 14.1099 2.81687H17.5852C17.987 2.81687 18.3125 3.16644 18.3125 3.5953V15.8864H13.3821V3.5953H13.3826Z"
          fill="#0080F7"
        />
      </svg>
    ),
    title: "Seranking",
    link: "#",
  },
  {
    icon: (
      <svg
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.2212 6.37406C20.2212 5.56306 19.5748 4.90822 18.7801 4.90822C17.9854 4.90822 17.3384 5.56306 17.3384 6.37406C17.3384 7.18207 17.9854 7.83691 18.7801 7.83691C19.5748 7.83691 20.2212 7.18207 20.2212 6.37406Z"
          fill="url(#paint0_linear_2252_15939)"
        />
        <path
          d="M22.1416 17.8165C22.0882 19.0062 21.8925 19.6526 21.73 20.0819C21.5117 20.6511 21.2514 21.0581 20.8292 21.485C20.4117 21.912 20.0114 22.1761 19.4515 22.3955C19.0293 22.5632 18.3911 22.7628 17.2211 22.8195C15.9561 22.8761 15.5813 22.8882 12.3735 22.8882C9.1687 22.8882 8.7909 22.8761 7.52594 22.8195C6.35589 22.7628 5.72073 22.5632 5.29845 22.3955C4.73567 22.1761 4.33834 21.912 3.91847 21.485C3.49561 21.0581 3.23528 20.6511 3.02 20.0819C2.85748 19.6526 2.65884 19.0062 2.6084 17.8165C2.54675 16.5303 2.53545 16.1432 2.53545 12.8883C2.53545 9.62677 2.54675 9.24264 2.6084 7.95647C2.65884 6.76682 2.85748 6.12102 3.02 5.68805C3.23528 5.11945 3.49561 4.71483 3.91847 4.28792C4.33834 3.86164 4.73567 3.5969 5.29845 3.37503C5.72073 3.2068 6.35589 3.01021 7.52594 2.95354C8.7909 2.89684 9.1687 2.88236 12.3735 2.88236C15.5813 2.88236 15.9561 2.89684 17.2211 2.95354C18.3911 3.01021 19.0293 3.2068 19.4515 3.37503C20.0114 3.5969 20.4117 3.86164 20.8292 4.28792C21.2514 4.71483 21.5117 5.11945 21.73 5.68805C21.8925 6.12102 22.0882 6.76682 22.1416 7.95647C22.2003 9.24264 22.2145 9.62677 22.2145 12.8883C22.2145 16.1432 22.2003 16.5303 22.1416 17.8165ZM24.3021 7.8564C24.2433 6.55635 24.0417 5.66815 23.7422 4.89455C23.4374 4.09196 23.0288 3.4118 22.3598 2.73163C21.6938 2.0545 21.0249 1.63902 20.2355 1.32549C19.4717 1.02398 18.6011 0.81654 17.3219 0.759874C16.0427 0.697147 15.6341 0.685705 12.3735 0.685705C9.11591 0.685705 8.70435 0.697147 7.42515 0.759874C6.14888 0.81654 5.27888 1.02398 4.5115 1.32549C3.72512 1.63902 3.05616 2.0545 2.39019 2.73163C1.72123 3.4118 1.31261 4.09196 1.00482 4.89455C0.708277 5.66815 0.506656 6.55635 0.444965 7.8564C0.389233 9.15703 0.375 9.57309 0.375 12.8883C0.375 16.2005 0.389233 16.6159 0.444965 17.9166C0.506656 19.2142 0.708277 20.1018 1.00482 20.879C1.31261 21.6786 1.72123 22.3618 2.39019 23.0389C3.05616 23.7161 3.72512 24.1346 4.5115 24.4475C5.27888 24.749 6.14888 24.954 7.42515 25.0137C8.70435 25.0734 9.11591 25.0879 12.3735 25.0879C15.6341 25.0879 16.0427 25.0734 17.3219 25.0137C18.6011 24.954 19.4717 24.749 20.2355 24.4475C21.0249 24.1346 21.6938 23.7161 22.3598 23.0389C23.0288 22.3618 23.4374 21.6786 23.7422 20.879C24.0417 20.1018 24.2433 19.2142 24.3021 17.9166C24.3608 16.6159 24.375 16.2005 24.375 12.8883C24.375 9.57309 24.3608 9.15703 24.3021 7.8564Z"
          fill="url(#paint1_linear_2252_15939)"
        />
        <path
          d="M12.3736 16.9517C10.1657 16.9517 8.37408 15.133 8.37408 12.8881C8.37408 10.6396 10.1657 8.81863 12.3736 8.81863C14.5821 8.81863 16.3761 10.6396 16.3761 12.8881C16.3761 15.133 14.5821 16.9517 12.3736 16.9517ZM12.3736 6.61894C8.97009 6.61894 6.21362 9.42761 6.21362 12.8881C6.21362 16.3457 8.97009 19.1514 12.3736 19.1514C15.7771 19.1514 18.5365 16.3457 18.5365 12.8881C18.5365 9.42761 15.7771 6.61894 12.3736 6.61894Z"
          fill="url(#paint2_linear_2252_15939)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2252_15939"
            x1="0.591382"
            y1="24.8354"
            x2="22.738"
            y2="3.05391"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD521" />
            <stop offset="0.05" stopColor="#FFD521" />
            <stop offset="0.501119" stopColor="#F50000" />
            <stop offset="0.95" stopColor="#B900B4" />
            <stop offset="0.950079" stopColor="#B900B4" />
            <stop offset="1" stopColor="#B900B4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2252_15939"
            x1="0.591477"
            y1="24.866"
            x2="22.7562"
            y2="3.06654"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD521" />
            <stop offset="0.05" stopColor="#FFD521" />
            <stop offset="0.501119" stopColor="#F50000" />
            <stop offset="0.95" stopColor="#B900B4" />
            <stop offset="0.950079" stopColor="#B900B4" />
            <stop offset="1" stopColor="#B900B4" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2252_15939"
            x1="0.597198"
            y1="24.8664"
            x2="22.7566"
            y2="3.07224"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD521" />
            <stop offset="0.05" stopColor="#FFD521" />
            <stop offset="0.501119" stopColor="#F50000" />
            <stop offset="0.95" stopColor="#B900B4" />
            <stop offset="0.950079" stopColor="#B900B4" />
            <stop offset="1" stopColor="#B900B4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Instagram Ads",
    link: "#",
  },
];

const ExternalLink: React.FC = () => {
  return (
    <div className="col-span-12 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="flex items-start justify-between border-b border-stroke px-6 pb-4.5 pt-5 dark:border-dark-3">
        <div>
          <h2 className="mb-1.5 text-body-2xlg font-bold text-dark dark:text-white">
            External Links
          </h2>
          <p className="text-body-sm font-medium">Most used resources</p>
        </div>
        <DropdownDefault />
      </div>

      <div className="px-3 py-5">
        {linkList.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between rounded-md p-4.5 hover:bg-gray-1 dark:hover:bg-dark-2"
          >
            <div className="flex items-center gap-4">
              {item.icon}

              <Link href={item.link}>
                <h4 className="font-medium text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                  {item.title}
                </h4>
              </Link>
            </div>

            <Link href={item.link} className="inline-block hover:text-primary">
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1643_5802)">
                  <path
                    d="M14.4339 9.44965C14.4339 9.03428 14.7719 8.69704 15.1883 8.69704C15.6046 8.69704 15.9426 9.03428 15.9426 9.44965V13.7713C15.9426 14.3845 15.692 14.9418 15.2874 15.3455C14.8829 15.7491 14.3243 15.9991 13.7096 15.9991H2.23295C1.61827 15.9991 1.05971 15.7491 0.655139 15.3455C0.250571 14.9418 0 14.3845 0 13.7713V2.23741C0 1.62413 0.250571 1.06683 0.655139 0.663188C1.05971 0.259543 1.61827 0.00954267 2.23295 0.00954267H6.53703C6.95334 0.00954267 7.29135 0.346782 7.29135 0.762147C7.29135 1.17751 6.95334 1.51475 6.53703 1.51475H2.23295C2.03458 1.51475 1.85449 1.59678 1.72268 1.72699C1.59086 1.8585 1.50995 2.03819 1.50995 2.23611V13.77C1.50995 13.9679 1.59217 14.1476 1.72268 14.2791C1.85449 14.4106 2.03458 14.4913 2.23295 14.4913H13.7109C13.9093 14.4913 14.0894 14.4093 14.2212 14.2791C14.353 14.1489 14.4339 13.9679 14.4339 13.77V9.44965ZM14.6715 2.27256L7.04861 9.97308C6.75759 10.2687 6.27993 10.2726 5.98369 9.9822C5.68744 9.69183 5.68352 9.21527 5.97455 8.9197L13.3038 1.51475H10.2525C9.83622 1.51475 9.49821 1.17751 9.49821 0.762147C9.49821 0.346782 9.83622 0.00954267 10.2525 0.00954267H13.7109C14.3791 0.00954267 15.2405 -0.103739 15.7533 0.413188C16.077 0.740011 16.0052 3.34548 15.9635 4.85459C15.953 5.24522 15.9439 5.5434 15.9439 5.75694C15.9439 6.1723 15.6059 6.50954 15.1896 6.50954C14.7732 6.50954 14.4352 6.1723 14.4352 5.75694C14.4352 5.71657 14.4457 5.32465 14.46 4.81423C14.4809 4.02777 14.6075 2.9861 14.6715 2.27256Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1643_5802">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExternalLink;
