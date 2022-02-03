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
          <h1 className="text-white text-4xl font-bold">Gabriel M Linassi</h1>
          <div className="mt-1">
            <h2 className="text-white text-xl">Front-End Web Developer</h2>
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
              <div>Frederico Westphalen,</div>
              <div>98400-000, RS, Brazil</div>
            </p>
          </div>
          <div className="mt-3">
            <h4 className="text-white font-bold">Phone</h4>
            <p className="text-white text-sm">(55) 9 9932-5639</p>
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
            <span className="text-xs text-white">HTML</span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-full h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Excelent
            </span>
          </div>
          <div>
            <span className="text-xs text-white">CSS</span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-full h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Excelent
            </span>
          </div>
          <div>
            <span className="text-xs text-white">ReactJS</span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-5/6 h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Very Good
            </span>
          </div>
          <div>
            <span className="text-xs text-white">Javascript</span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-5/6 h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Very Good
            </span>
          </div>
          <div>
            <span className="text-xs text-white">Figma</span>
            <div className="relative">
              <div className="absolute w-full h-2 bg-blue-400"></div>
              <div className="absolute w-5/6 h-2 bg-white"></div>
            </div>
            <span className="inline-block w-full mt-3 text-xs text-right text-white">
              Very Good
            </span>
          </div>
        </div>
        {/* Languages */}
        <div className="mt-4 px-4 py-1 bg-blue-400">
          <h3 className="text-white font-bold text-base">Languages</h3>
        </div>
        <div className="py-4 px-4">
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
        </div>
      </div>
      {/* Right panel */}
      <div className="p-6 bg-white">
        <p className="text-sm leading-relaxed text-gray-700 line-clamp-5">
          Ambitious Freelancer Web Developer with over 4 years of experience
          brings enthusiasm and detailed understanding of Front-End Development
          to webpage planning, development and maintenance. Design and develop
          modern and responsive interfaces for a wide range of niches. Excellent
          grasp of ReactJS, UX design, SEO and performance optimizations.
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
              Front-End Web Developer
            </h4>
            <p className="italic text-gray-700 text-sm">UpWork, Remote</p>
            <ul className="list-disc ml-4">
              <li className="text-gray-700 text-sm leading-normal">
                Coded websites, landing pages and worked on solving complex
                problems using HTML, CSS, JavaScript and ReactJS.
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Collaborated with marketing department to determine
                organizational need and design pages to meet goals.
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Effectively coded software changes and alterations based on
                specific design specifications
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Made technology recommendations by staying up-to-date on new
                development and platforms, keeping an eye out for the right tool
                for the job, and taking the lead in setting up those tools.
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
              Desktop Developer
            </h4>
            <p className="italic text-gray-700 text-sm">
              Prevedello Sistemas, Frederico Westphalen, RS, Brazil
            </p>
            <ul className="list-disc ml-4">
              <li className="text-gray-700 text-sm leading-normal">
                Collaborated with other developers to identify and alleviate
                software errors and inefficiencies.
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Worked on multiple software projects simultaneously and
                participated in the whole software development process from
                design to implementation and delivery.
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                {`Developed new software functionalities, ensuring that clients\'
                vision and requirements were met.`}
              </li>
            </ul>
          </div>
          {/* Work #3 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2016-03 - </div>
            <div>2018-06</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">Help Desk</h4>
            <p className="italic text-gray-700 text-sm">
              Prevedello Sistemas, Frederico Westphalen, RS, Brazil
            </p>
            <ul className="list-disc ml-4">
              <li className="text-gray-700 text-sm leading-normal">
                Broke down and evaluated user problems, using test scripts,
                personal expertise and probing questions.
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Identified potential sales and cross-selling opportunities in
                course of delivery of support services.
              </li>
              <li className="text-gray-700 text-sm leading-normal">
                Responded to support requests from end users and patiently
                walked individuals through basic troubleshooting tasks.
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
