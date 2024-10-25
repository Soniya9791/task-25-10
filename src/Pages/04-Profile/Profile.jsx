import React from "react"
import { useState } from "react"

export default function Profile() {
   
  return (
    <>
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col p-12     overflow-hidden bg-white rounded shadow-md text-gray-700 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src="https://i.pinimg.com/474x/a8/b8/b4/a8b8b4897f83d693665e3aaeb2d0da65.jpg"
            alt="card image"
            className="object-cover h-[900px] w-full aspect-auto "
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
        
            <div className="pt-10 px-10">
              <h3 className="text-xl font-medium text-violet-950 font-display">
                Create a Profile...!
              </h3>
            </div>
          </header>
          <div className="w-[100%] flex justify-center">
          <div className="w-[80%]">
            <div className="w-[100%] flex justify-between">
              <div className="w-[47%]">
                <div className="relative my-6">
                  <input
                    id="id-b02"
                    type="text"
                    name="id-b02"
                    placeholder="your name"
                    className="peer relative h-10 w-full border-b border-slate-200 px-4 text-xl text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  <label
                    htmlFor="id-b02"
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-xl peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    First Name
                  </label>
                </div>
              </div>
              <div className="w-[47%]">
                <div className="relative my-6">
                  <input
                    id="id-b02"
                    type="text"
                    name="id-b02"
                    placeholder="your name"
                    className="peer relative h-10 w-full border-b border-slate-200 px-4 text-xl text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  <label
                    htmlFor="id-b02"
                    className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-xl peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Last Name
                  </label>
                </div>
              </div>
            </div>
            <div className="w-[100%]">
              <div className="relative my-6 pt-2
              ">
                <input
                  id="id-b02"
                  type="text"
                  name="id-b02"
                  placeholder="your name"
                  className="peer relative h-10 w-full border-b border-slate-200 px-4 text-xl text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b02"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-xl peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  email
                </label>
              </div>
            </div>


<div className="relative my-6 pt-3">
  <input id="id-b14" type="password" value="123456" name="id-b14" placeholder="your password" class="relative w-full h-10 px-4 pr-12 text-xl placeholder-transparent transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
  <label for="id-b14" class="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-xl peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
    Your password
  </label>
  <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-labelledby="title-2 description-2" role="graphics-symbol">
    <title id="title-2">Check mark icon</title>
    <desc id="description-2">Icon description here</desc>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>

  <div className="relative my-6 pt-3">
                <input
                  id="id-b02"
                  type="text"
                  name="id-b02"
                  placeholder="your name"
                  className="peer relative h-10 w-full border-b border-slate-200 px-4 text-xl text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b02"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-xl peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                Phone number
                </label>
              </div>
              <button class="inline-flex items-center justify-center h-12 gap-2 px-10 text-xl font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
  <span>Submit</span>
</button>
</div>
          </div>
        </div>
       
        </div>
        

      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  )
}