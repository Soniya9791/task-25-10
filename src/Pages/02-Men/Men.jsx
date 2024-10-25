import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Men() {
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

        <div className="flex flex-row p-10 w-full bg-slate-500 text-center justify-center gap-3  ">
          <div className="overflow-hidden rounded bg-white text-slate-700 shadow-md shadow-slate-200 object-cover p-5 hover:bg-violet-950">
            {/*  <!--  Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/fa/06/28/fa062885c8bc63a55c04142f2b326f1f.jpg"
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
                src="https://i.pinimg.com/474x/ca/9a/e7/ca9ae71f705f6ddf6ff405b3becc8324.jpg"
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
                src="https://i.pinimg.com/474x/22/d8/2f/22d82fb653304e8c7216bfdb742238e8.jpg"
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



<div className=" flex justify-center p-10 bg-slate-500">
        {/*<!-- End Testimonial carousel --> */}
        <div className="flex flex-wrap gap-10 w-[60%] align-middle">
          <div className="overflow-hidden rounded w-[200px] h-[300px] hover:bg-violet-950 bg-white text-slate-500 shadow-md shadow-slate-200 ">
            {/*  <!-- Image --> */}
            <figure>
              <img
                src="https://i.pinimg.com/474x/81/5a/54/815a5445285c90652371212db0a631bc.jpg"
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
                src="https://i.pinimg.com/474x/18/18/29/181829981c794815725c07f0044275d6.jpg"
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
                src="https://i.pinimg.com/474x/78/3c/43/783c435e990f252d975b02f12ba4fd61.jpg"
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
                src="https://i.pinimg.com/474x/f3/c4/4f/f3c44f323f6ed91aebb36aaf2160b1b7.jpg"
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
                src="https://i.pinimg.com/474x/da/bf/04/dabf04f64fb95ccf9799d7fe93c9ab1a.jpg"
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
                src="https://i.pinimg.com/474x/34/3b/77/343b778a1484861d78f866451ce22e3d.jpg"
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
