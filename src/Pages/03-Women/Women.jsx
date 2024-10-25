import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Women() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div>
        {/*<!-- Component: Testimonial carousel --> */}
        <div className="glide-09 relative w-full overflow-hidden">
          {/* <!-- Slides --> */}
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <img
                  src="https://blinkstore.in/wp-content/uploads/sites/29/2024/04/Blinkstore.png"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://blinkstore.in/wp-content/uploads/sites/29/2024/04/Louis-Philp.webp"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://blinkstore.in/wp-content/uploads/sites/29/2024/04/Allen-solly.webp"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://blinkstore.in/wp-content/uploads/sites/29/2024/04/Fab-India.webp"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://blinkstore.in/wp-content/uploads/sites/29/2024/05/levi-logo-600x315-1.webp"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
              <li>
                <img
                  src="https://blinkstore.in/wp-content/uploads/sites/29/2024/04/Calvin-Klein.png"
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                />
              </li>
            </ul>
          </div>
        </div>




        <div className="flex flex-row p-10 w-full bg-amber-200 text-center justify-center gap-3  ">
          <div className="overflow-hidden rounded bg-white text-slate-700 shadow-md shadow-slate-200 object-cover p-5 hover:bg-violet-950">
            {/*  <!--  Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/dd/bb/84/ddbb84ee6e8e985665a3a0ba98e0d52b.jpg"
                alt="card image"
                className="aspect-video w-[300px] h-[350px] object-cover"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="">
                <h3 className="text-xl font-medium text-slate-700">
                  Bumblebee threads
                </h3>
                <p className="text-sm text-slate-400 "> 10-20% off Shop now</p>
              </header>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 object-cover p-5 hover:bg-violet-950 ">
            {/*  <!--  Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/90/71/1b/90711b883326b4a4a883e589653dff26.jpg"
                alt="card image"
                className="aspect-video w-[300px] h-[350px] object-cover"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="">
                <h3 className="text-xl font-medium text-slate-700">Zara</h3>
                <p className="text-sm text-slate-400"> 10-20% off Shop now</p>
              </header>
            </div>
          </div>
          <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 object-cover p-5 hover:bg-violet-950">
            {/*  <!--  Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/01/af/25/01af25c5350e2a8aa8dfbead2ac50686.jpg"
                alt="card image"
                className="aspect-video w-[300px] h-[350px]  object-cover"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="">
                <h3 className="text-xl font-medium text-slate-700">
                  Couturecrescent
                </h3>
                <p className="text-sm text-slate-400"> 10-20% off Shop now</p>
              </header>
            </div>
          </div>
        </div>



<div className=" flex justify-center p-10 bg-amber-200">
        {/*<!-- End Testimonial carousel --> */}
        <div className="flex flex-wrap gap-10 w-[60%] align-middle">
          <div className="overflow-hidden rounded w-[200px] h-[300px]  hover:bg-violet-950 bg-white text-slate-500 shadow-md shadow-slate-200 ">
            {/*  <!-- Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/b0/c6/cf/b0c6cf67a2e59aca01ca0c1b1731aeea.jpg"
                alt="card image"
                className="aspect-video w-[150px] h-[200px] object-cover p-3"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-1">
              <header >
                <h3 className="text-xl font-medium text-slate-700">
                  30% OFF
                </h3>
                <p className=" text-slate-400"> $8.99</p>
              </header>
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-end p-1 pt-0">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Buy now!</span>
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded w-[200px] h-[300px] hover:bg-violet-950 bg-white text-slate-500 shadow-md shadow-slate-200 ">
            {/*  <!-- Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/32/f3/9c/32f39cfdd8f4be16e9de4647fe4ef0ec.jpg"
                alt="card image"
                className="aspect-video w-[150px] h-[200px] object-cover p-3"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-1">
              <header >
                <h3 className="text-xl font-medium text-slate-700">
                  30% OFF
                </h3>
                <p className=" text-slate-400"> $8.99</p>
              </header>
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-end p-1 pt-0">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Buy now!</span>
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded w-[200px] h-[300px] hover:bg-violet-950 bg-white text-slate-500 shadow-md shadow-slate-200 ">
            {/*  <!-- Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/5b/e7/6a/5be76a62c4948a57cd99c47daa7dbfc4.jpg"
                alt="card image"
                className="aspect-video w-[150px] h-[200px] object-cover p-3"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-1">
              <header >
                <h3 className="text-xl font-medium text-slate-700">
                  30% OFF
                </h3>
                <p className=" text-slate-400"> $8.99</p>
              </header>
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-end p-1 pt-0">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Buy now!</span>
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded w-[200px] h-[300px] hover:bg-violet-950 bg-white text-slate-500 shadow-md shadow-slate-200 ">
            {/*  <!-- Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/e0/af/9c/e0af9cc21755026c46d1f31e2083446b.jpg"
                alt="card image"
                className="aspect-video w-[150px] h-[200px] object-cover p-3"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-1">
              <header >
                <h3 className="text-xl font-medium text-slate-700">
                  30% OFF
                </h3>
                <p className=" text-slate-400"> $8.99</p>
              </header>
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-end p-1 pt-0">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Buy now!</span>
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded w-[200px] h-[300px] hover:bg-violet-950 bg-white text-slate-500 shadow-md shadow-slate-200 ">
            {/*  <!-- Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/2e/99/00/2e99007d06e0bd649390a5e7c5752858.jpg"
                alt="card image"
                className="aspect-video w-[150px] h-[200px] object-cover p-3"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-1">
              <header >
                <h3 className="text-xl font-medium text-slate-700">
                  30% OFF
                </h3>
                <p className=" text-slate-400"> $8.99</p>
              </header>
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-end p-1 pt-0">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Buy now!</span>
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded w-[200px] h-[300px] hover:bg-violet-950 bg-white text-slate-500 shadow-md shadow-slate-200 ">
            {/*  <!-- Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/31/12/f7/3112f7dcac6343353ec1ceae5c2ed9d8.jpg"
                alt="card image"
                className="aspect-video w-[150px] h-[200px] object-cover p-3"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-1">
              <header >
                <h3 className="text-xl font-medium text-slate-700">
                  30% OFF
                </h3>
                <p className=" text-slate-400"> $8.99</p>
              </header>
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-end p-1 pt-0">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Buy now!</span>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
