/**
 * TODO: Load font-face
 * Century-Gothic 400,700 & italic 400
 *
 * TODO: Replace custom classes
 * by theme customazation
 *
 */

import { forwardRef, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const cvRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-end px-2">
          <button
            className="flex items-center space-x-2 rounded bg-yellow-300 px-4 py-2 transition-colors duration-200 hover:bg-yellow-400"
            onClick={handlePrint}
          >
            <span className="font-bold text-white">Print CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/*  */}
      <div className="mx-auto max-w-4xl space-y-4 p-0 py-4 px-2 md:py-10">
        <div className="shadow">
          <CV ref={cvRef} />
        </div>
      </div>
    </div>
  );
}

const CV = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="doc">
      {/* Left panel */}
      <div className="doc-side bg-blue-500">
        {/* Name */}
        <div className="px-4 py-6 pb-2">
          <h1 className="text-4xl font-bold text-white">Gabriel M. Linassi</h1>
          <div className="mt-1">
            <h2 className="text-xl text-white">Software Engieer</h2>
          </div>
        </div>
        {/* Contact */}
        <div className="mt-4 bg-blue-400 px-4 py-1">
          <h3 className="text-base font-bold text-white">Contact</h3>
        </div>
        <div className="py-4 px-4">
          <div>
            <h4 className="font-bold text-white">Address</h4>
            <p className="text-sm text-white">
              <span>RS, Brazil</span>
            </p>
          </div>
          <div className="mt-3">
            <h4 className="font-bold text-white">Email</h4>
            <p className="text-sm text-white">gabrielm.linassi@gmail.com</p>
          </div>
          <div className="mt-3">
            <h4 className="font-bold text-white">WWW</h4>
            <p className="text-sm text-white">https://gabrielmlinassi.com</p>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-4 bg-blue-400 px-4 py-1">
          <h3 className="text-base font-bold text-white">Skills</h3>
        </div>
        <div className="py-4 px-4">
          <div>
            <span className="text-xs text-white">React.js / Next.js</span>
            <div className="relative">
              <div className="absolute h-2 w-full bg-blue-400"></div>
              <div className="absolute h-2 w-full bg-white"></div>
            </div>
            <span className="mt-3 inline-block w-full text-right text-xs text-white">
              Excelent
            </span>
          </div>
          <div>
            <span className="text-xs text-white">
              HTML / CSS / CSS-in-JS / UI-UX
            </span>
            <div className="relative">
              <div className="absolute h-2 w-full bg-blue-400"></div>
              <div className="absolute h-2 w-full bg-white"></div>
            </div>
            <span className="mt-3 inline-block w-full text-right text-xs text-white">
              Excelent
            </span>
          </div>
          <div>
            <span className="text-xs text-white">JavaScript / TypeScript</span>
            <div className="relative">
              <div className="absolute h-2 w-full bg-blue-400"></div>
              <div className="absolute h-2 w-5/6 bg-white"></div>
            </div>
            <span className="mt-3 inline-block w-full text-right text-xs text-white">
              Very Good
            </span>
          </div>
          <div>
            <span className="text-xs text-white">
              Node.js / Express / Nest.js
            </span>
            <div className="relative">
              <div className="absolute h-2 w-full bg-blue-400"></div>
              <div className="absolute h-2 w-5/6 bg-white"></div>
            </div>
            <span className="mt-3 inline-block w-full text-right text-xs text-white">
              Very Good
            </span>
          </div>
          <div>
            <span className="text-xs text-white">React Native</span>
            <div className="relative">
              <div className="absolute h-2 w-full bg-blue-400"></div>
              <div className="absolute h-2 w-1/4 bg-white"></div>
            </div>
            <span className="mt-3 inline-block w-full text-right text-xs text-white">
              Beginner
            </span>
          </div>
        </div>
        {/* Languages */}
        <div className="mt-4 bg-blue-400 px-4 py-1">
          <h3 className="text-base font-bold text-white">Languages</h3>
        </div>
        <div className="py-4 px-4">
          <div>
            <span className="text-xs text-white">Portuguese</span>
            <div className="relative">
              <div className="absolute h-2 w-full bg-blue-400"></div>
              <div className="absolute h-2 w-full bg-white"></div>
            </div>
            <span className="mt-3 inline-block w-full text-right text-xs text-white">
              Excelent
            </span>
          </div>
          <div>
            <span className="text-xs text-white">English</span>
            <div className="relative">
              <div className="absolute h-2 w-full bg-blue-400"></div>
              <div className="absolute h-2 w-5/6 bg-white"></div>
            </div>
            <span className="mt-3 inline-block w-full text-right text-xs text-white">
              Very Good
            </span>
          </div>
        </div>
      </div>
      {/* Right panel */}
      <div className="bg-white p-6">
        <p className="text-sm leading-relaxed text-gray-700 line-clamp-5">
          Ambitious Full-Stack Software Engineer with over 4 years of experience
          brings enthusiasm and detailed understanding of Web Stack to planning,
          development and maintenance of Web Apps. Develop modern and responsive
          interfaces for a wide range of businesses. Excellent grasp of React,
          Nextjs, TypeScript, Node and Express.
        </p>
        {/* Work history */}
        <div className="mt-4 border-t-2 border-b-2 border-gray-100 py-1">
          <h3 className="text-lg font-bold text-blue-500">Work History</h3>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-y-2">
          {/* Work #1 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2019-09 - </div>
            <div>Current</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">
              Full-Stack Engineer
            </h4>
            <p className="text-sm italic text-gray-700">
              UpWork, Remote, US (mainly)
            </p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Collaborated on multiple projects from landing pages to robust
                systems with authentication, payment integration, and complex
                state modeling
              </li>
            </ul>
          </div>
          {/* Work #1 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2019-09 - </div>
            <div>Current</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">
              Full-Stack Engineer
            </h4>
            <p className="text-sm italic text-gray-700">
              ThisDotSoftware, Remote, US
            </p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Developed multiple landing pages, blogs and collaborated with
                other teams to build complex apps
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Join a team to develop a medical management software for
                managing the operations of a clinic
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Collaborated to develop a video-focused social networking to
                share your favorite places
              </li>
            </ul>
          </div>
          {/* Work #2 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2017-06 - </div>
            <div>2018-10</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">
              Full Stack Engineer
            </h4>
            <p className="text-sm italic text-gray-700">
              Prevedello Sistems, RS, Brazil
            </p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Maintenance and development of new features
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Model and perform database maintenance
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Integration with external APIs (warehouse stock management,
                e-commerce, etc)
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Testing and QA routines
              </li>
              <li className="text-sm leading-normal text-gray-700">
                System migration scripts
              </li>
            </ul>
          </div>
          {/* Work #3 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2016-03 - </div>
            <div>2018-06</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">
              IT Support Analyst
            </h4>
            <p className="text-sm italic text-gray-700">
              Prevedello Sistems, RS, Brazil
            </p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Evaluate user problems
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Identify potential sales and cross-selling opportunities
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Respond to support requests and patiently walk individuals
                through basic troubleshooting tasks
              </li>
            </ul>
          </div>
        </div>
        {/* Education history */}
        <div className="mt-4 border-t-2 border-b-2 border-gray-100 py-1">
          <h3 className="text-lg font-bold text-blue-500">Education</h3>
        </div>
        <div className="mt-4 grid grid-cols-4">
          <div className="col-span-1 text-sm text-gray-700">
            <div>2014-06 - </div>
            <div>2017-05</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold">Bachelor of Computer Science</h4>
            <p className="text-sm italic text-gray-700">
              URI - Frederico Westphalen, RS, Brazil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

CV.displayName = "Home";
