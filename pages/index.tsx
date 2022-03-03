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
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto p-0 md:p-10 space-y-4">
        {/* <button
          className="px-4 py-2 bg-yellow-300 hover:bg-yellow-400 shadow rounded"
          onClick={handlePrint}
        >
          Print CV
        </button> */}
        {/* mdx */}
        <div className="shadow">
          <CV ref={cvRef} />
        </div>
      </div>
    </div>
  );
}

const CV = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col md:flex-row mx-auto doc">
      {/* Left panel */}
      <div className="doc-side bg-blue-500">
        {/* Name */}
        <div className="px-4 py-6 pb-2">
          <h1 className="text-white text-4xl font-bold">Gabriel M. Linassi</h1>
          <div className="mt-1">
            <h2 className="text-white text-xl">Software Engieer</h2>
          </div>
        </div>
        {/* Contact */}
        <div className="mt-4 px-4 py-1 bg-blue-400">
          <h3 className="text-white font-bold text-base">Contact</h3>
        </div>
        <div className="py-4 px-4">
          <div>
            <h4 className="text-white font-bold">Address</h4>
            <p className="text-white text-sm">
              <div>RS, Brazil</div>
            </p>
          </div>
          <div className="mt-3">
            <h4 className="text-white font-bold">Email</h4>
            <p className="text-white text-sm">gabrielm.linassi@gmail.com</p>
          </div>
          <div className="mt-3">
            <h4 className="text-white font-bold">WWW</h4>
            <p className="text-white text-sm">https://gabrielmlinassi.com</p>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-4 px-4 py-1 bg-blue-400">
          <h3 className="text-white font-bold text-base">Skills</h3>
        </div>
        <div className="py-4 px-4">
          <div>
            <span className="text-xs text-white">React.js / Next.js</span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-full h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Excelent
            </span>
          </div>
          <div>
            <span className="text-xs text-white">
              HTML / CSS / CSS-in-JS / UI-UX
            </span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-full h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Excelent
            </span>
          </div>
          <div>
            <span className="text-xs text-white">JavaScript / TypeScript</span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-5/6 h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Very Good
            </span>
          </div>
          <div>
            <span className="text-xs text-white">
              Node.js / Express / Nest.js
            </span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-5/6 h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Very Good
            </span>
          </div>
          <div>
            <span className="text-xs text-white">React Native</span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-1/4 h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Beginner
            </span>
          </div>
        </div>
        {/* Languages */}
        <div className="mt-4 px-4 py-1 bg-blue-400">
          <h3 className="text-white font-bold text-base">Languages</h3>
        </div>
        <div className="py-4 px-4">
          <div>
            <span className="text-xs text-white">Portuguese</span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-full h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Excelent
            </span>
          </div>
          <div>
            <span className="text-xs text-white">English</span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-5/6 h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Very Good
            </span>
          </div>
        </div>
      </div>
      {/* Right panel */}
      <div className="p-6 bg-white">
        <p className="text-sm leading-relaxed text-gray-700 line-clamp-5">
          Ambitious Full-Stack Software Engineer with over 4 years of experience
          brings enthusiasm and detailed understanding of Web Stack to planning,
          development and maintenance of Web Apps. Develop modern and responsive
          interfaces for a wide range of businesses. Excellent grasp of React,
          Nextjs, TypeScript, Node and Express.
        </p>
        {/* Work history */}
        <div className="mt-4 py-1 border-t-2 border-b-2 border-gray-100">
          <h3 className="font-bold text-lg text-blue-500">Work History</h3>
        </div>
        <div className="grid grid-cols-4 gap-y-2 mt-4">
          {/* Work #1 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2019-09 - </div>
            <div>Current</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">
              Full-Stack Engineer
            </h4>
            <p className="italic text-gray-700 text-sm">
              UpWork, Remote, US (mainly)
            </p>
            <ul className="list-disc ml-4">
              <li className="text-gray-700 text-sm leading-normal">
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
            <p className="italic text-gray-700 text-sm">
              ThisDotSoftware, Remote, US
            </p>
            <ul className="list-disc ml-4">
              <li className="text-gray-700 text-sm leading-normal">
                Developed multiple landing pages, blogs and collaborated with
                other teams to build complex apps
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Join a team to develop a medical management software for
                managing the operations of a clinic
              </li>
              <li className="text-gray-700 text-sm leading-normal">
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
            <p className="italic text-gray-700 text-sm">
              Prevedello Sistems, RS, Brazil
            </p>
            <ul className="list-disc ml-4">
              <li className="text-gray-700 text-sm leading-normal">
                Maintenance and development of new features
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Model and perform database maintenance
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Integration with external APIs (warehouse stock management,
                e-commerce, etc)
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Testing and QA routines
              </li>
              <li className="text-gray-700 text-sm leading-normal">
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
            <p className="italic text-gray-700 text-sm">
              Prevedello Sistems, RS, Brazil
            </p>
            <ul className="list-disc ml-4">
              <li className="text-gray-700 text-sm leading-normal">
                Evaluate user problems
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Identify potential sales and cross-selling opportunities
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Respond to support requests and patiently walk individuals
                through basic troubleshooting tasks
              </li>
            </ul>
          </div>
        </div>
        {/* Education history */}
        <div className="mt-4 py-1 border-t-2 border-b-2 border-gray-100">
          <h3 className="font-bold text-lg text-blue-500">Education</h3>
        </div>
        <div className="grid grid-cols-4 mt-4">
          <div className="col-span-1 text-sm text-gray-700">
            <div>2014-06 - </div>
            <div>2017-05</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold">Bachelor of Computer Science</h4>
            <p className="italic text-gray-700 text-sm">
              URI - Frederico Westphalen, RS, Brazil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

CV.displayName = "Home";
