import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import "../styles/css/main.css";
const BottomNavbar = () => {
  const router = useRouter();
  const routes = [
    {
      name: "Home",
      path: "/",
      icon: "fal fa-home",
    },
    {
      name: "Coaching",
      path: "/coaching",
      icon: "fad fa-comments-alt",
    },
    {
      name: "Users",
      path: "/users",
      icon: "fad fa-users",
    },
    {
      name: "Appraisal",
      path: "/appraisal",
      icon: "fal fa-ballot-check",
    },
    {
      name: "Site Setting",
      path: "/site-setting",
      icon: "fas fa-globe",
    },
    {
      name: "Attainment",
      path: "/attainments",
      icon: "star",
    },
    {
      name: "Progress",
      path: "/progress",
      icon: "progress",
    },
  ];
  return (
    <>
      <Head>
        <title>Teaching App</title>
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html" charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="YOUR_INTEGRITY_HASH"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        /> */}

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
          async
        ></script>

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
          async
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
          async
        ></script>

        <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          async
          crossOrigin="anonymous"
        />

        <script
          src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"
          async
          crossOrigin="anonymous"
        />
      </Head>
      <div className="mb-5"></div>

      <div className="sticky_bottom_bar_section">
        <div className="sticky_container">
          <div className="sticky_bottom_bar_box">
            {routes.map((item, key) => {
              return (
                <a
                  key={key}
                  className={router.pathname === item.path ? "active" : ""}
                  onClick={() => {
                    router.push(item.path);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {item.icon === "progress" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.3em"
                      viewBox="0 0 512 512"
                      fill={
                        router.pathname === item.path ? "#1f854b66" : "#8fa3c7"
                      }
                    >
                      <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
                    </svg>
                  ) : item.icon === "star" ? (
                    // <Image
                    //   height={25}
                    //   width={25}
                    //   src="/images/star.svg"
                    //   alt="info"
                    //   style={{ objectFit: "contain" }}
                    // />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={
                        router.pathname === item.path ? "#1f854b66" : "#8fa3c7"
                      }
                      height="1.3em"
                      viewBox="0 0 576 512"
                    >
                      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                    </svg>
                  ) : (
                    <i className={item.icon}></i>
                  )}

                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
