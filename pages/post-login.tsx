import { useRouter } from "next/router";
import React, { useState } from "react";

const PostLogin = () => {
  const [selectSchoolAdmin, setSchoolAdmin] = useState(false);
  const router = useRouter();
  return (
    <>
      <section className="post-login-wrapper">
        <div className="border-b d-flex justify-content-between align-items-end pb-2 mb-3">
          <div>
            <h2 className="font-bold text-[16px]">Hello, Miss Mackay</h2>
            <h6>Welcome back to Progress Teaching!</h6>
          </div>

          <div className="d-flex align-items-end flex-column logout-header">
            <span className="cursor-pointer">
              <Logout />
            </span>

            <span className="cursor-pointer">Log out</span>
            <span className="cursor-pointer">(Miss Mackay)</span>
          </div>
        </div>

        <div>
          <p className="mb-3">
            Your trust user id has both trust admin permissions and school admin
            permissions for one or more schools. Please choose whether you would
            like to use the app as a trust admin or school admin.
          </p>
          <p>
            If you use the Settings app as a trust admin, the changes you make
            apply to, and override the existing settings at, all schools. If you
            use the app as admin for one school, the changes you make apply only
            to that school.
          </p>

          <form action="" className="mt-4">
            <div className="mb-1">
              <label
                className="cursor-pointer d-flex align-items-center"
                htmlFor="trust-admin"
              >
                <input
                  onChange={(e) => setSchoolAdmin(false)}
                  type="radio"
                  name="admin-radio"
                  id="trust-admin"
                />

                <span className="ml-2">Trust admin</span>
              </label>
            </div>
            <div className="mb-1">
              <label
                className="cursor-pointer d-flex align-items-center"
                htmlFor="school-admin"
              >
                <input
                  onChange={(e) => setSchoolAdmin(e.target.checked)}
                  type="radio"
                  name="admin-radio"
                  id="school-admin"
                />

                <span className="ml-2">School admin</span>
              </label>
            </div>
          </form>

          {selectSchoolAdmin && (
            <>
              <h2 className="my-3">Select school:</h2>

              <form action="">
                <div>
                  <label
                    className="cursor-pointer d-flex align-items-center"
                    htmlFor="School-1"
                  >
                    <input
                      type="radio"
                      name="select-school-radio"
                      id="School-1"
                    />

                    <span className="ml-2">School 1</span>
                  </label>
                </div>
                <div>
                  <label
                    className="cursor-pointer d-flex align-items-center"
                    htmlFor="School-2"
                  >
                    <input
                      type="radio"
                      name="select-school-radio"
                      id="School-2"
                    />

                    <span className="ml-2">School 2</span>
                  </label>
                </div>
                <div>
                  <label
                    className="cursor-pointer d-flex align-items-center"
                    htmlFor="School-3"
                  >
                    <input
                      type="radio"
                      name="select-school-radio"
                      id="School-3"
                    />

                    <span className="ml-2">School 3</span>
                  </label>
                </div>
              </form>
            </>
          )}

          <button
            onClick={() => router.push("/")}
            className="btn-style-post-login mt-4"
          >
            Begin using app
          </button>
        </div>
      </section>
    </>
  );
};

export default PostLogin;

export const Logout = () => {
  return (
    <svg
      width="25"
      height="19"
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2676 10.2061L16.0645 18.4092C15.332 19.1417 14.0625 18.629 14.0625 17.5792V12.8917H7.42188C6.77246 12.8917 6.25 12.3692 6.25 11.7198V7.03229C6.25 6.38287 6.77246 5.86041 7.42188 5.86041H14.0625V1.17291C14.0625 0.127992 15.3271 -0.389587 16.0645 0.342835L24.2676 8.54596C24.7217 9.00494 24.7217 9.74713 24.2676 10.2061ZM9.375 18.1651V16.212C9.375 15.8897 9.11133 15.626 8.78906 15.626H4.6875C3.82324 15.626 3.125 14.9278 3.125 14.0635V4.68854C3.125 3.82428 3.82324 3.12604 4.6875 3.12604H8.78906C9.11133 3.12604 9.375 2.86237 9.375 2.5401V0.586976C9.375 0.26471 9.11133 0.0010385 8.78906 0.0010385H4.6875C2.09961 0.0010385 0 2.10065 0 4.68854V14.0635C0 16.6514 2.09961 18.751 4.6875 18.751H8.78906C9.11133 18.751 9.375 18.4874 9.375 18.1651Z"
        fill="#1f854b"
      />
    </svg>
  );
};
