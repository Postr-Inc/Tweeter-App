import React from "react";
import Bottomnav from "../../../components/Bottomnav";
import { api } from "../..";

export default function Settings_account_information() {
  return (
    <div className="p-5 flex flex-col  gap-8 mb-24">
      <div className="flex   flex-row justify-between">
        <span
          className="flex flex-row items-center gap-2 cursor-pointer
           
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={() => {
              window.history.back();
            }}
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <div className="flex flex-col hero">
          <span className="font-semibold text-lg">Account</span>
          <span className="text-[12px] text-base-900">
            @
            {api.authStore.model.username +
              "_" +
              api.authStore.model.id.substring(0, 7)}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <ul className="flex flex-col gap-5">
          <li className="flex justify-between">
            <p className="text-md">Username</p>
            <div className="flex gap-2">
              <p className="text-lg">@{api.authStore.model.username}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </li>
          <li className="flex justify-between">
            <p className="text-md">Phone</p>
            <div className="flex gap-2  ">
              <p className="text-lg">
                {api.authStore.model.phone_number
                  ? api.authStore.model.phone_number
                  : "Not set"}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </li>
          <li className="flex justify-between">
            <p className="text-md">Email</p>
            <div className="flex gap-2">
              <p className="text-lg">{api.authStore.model.email}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </li>
        </ul>
        <button className=" mt-8 text-red-500 capitalize font-bold text-[18px]"
        onClick={()=>{
            api.authStore.clear()
            window.location.href = "/"
        }}
        >
          Logout
        </button>
      </div>
      <Bottomnav />
    </div>
  );
}