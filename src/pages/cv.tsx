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
import { PrinterIcon } from "@heroicons/react/solid";
import SkillsSection from "components/cv/Skills";
import { SKILLS } from "data/Skills";
import { LANGUAGES } from "data/Languages";

export default function Home() {
  const cvRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="border-b bg-white">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-end px-2">
          <button
            className="flex items-center space-x-2 rounded bg-blue-500 py-2 px-4 font-bold text-white transition-colors duration-200 hover:bg-blue-600"
            onClick={handlePrint}
          >
            <span>Print CV</span>
            <PrinterIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>

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
      <div className="doc-side bg-blue-500">
        {/* Name */}
        <div className="px-4 py-6 pb-2">
          <h1 className="text-4xl font-bold text-white">Gabriel M. Linassi</h1>
          <div className="mt-1">
            <h2 className="text-xl text-white">Software Engineer</h2>
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
            <p className="text-sm text-white">gabrielmlinassi.com</p>
            <p className="text-sm text-white">github.com/gabrielmlinassi</p>
            <p className="text-sm text-white">
              linkedin.com/in/gabrielmlinassi
            </p>
          </div>
        </div>
        <div className="mt-4 bg-blue-400 px-4 py-1">
          <h3 className="text-base font-bold text-white">Skills</h3>
        </div>
        <SkillsSection skills={SKILLS} />
        <div className="mt-4 bg-blue-400 px-4 py-1">
          <h3 className="text-base font-bold text-white">Languages</h3>
        </div>
        <SkillsSection skills={LANGUAGES} />
      </div>

      <div className="bg-white p-6">
        <p className="line-clamp-5 text-sm leading-relaxed text-gray-700">
          Front-End Engineer with 5 years of experience with detailed
          understanding in developing modern and responsive interfaces for a
          wide range of businesses. Excellent grasp of React, Nextjs, TS, Redux,
          Best Practices, Testing, REST and GraphQL. Also starting to get more
          familiarized with ReactNative and Python
        </p>
        {/* Work history */}
        <div className="mt-4 border-t-2 border-b-2 border-gray-100 py-1">
          <h3 className="text-lg font-bold text-blue-500">Work History</h3>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-y-2">
          {/* Work #1 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2019-07 - </div>
            <div>Present</div>
            <div className="mt-1 text-xs text-gray-500">3yrs</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">
              Front-End Engineer
            </h4>
            <p className="text-sm italic text-gray-700">
              UpWork, Freelancer, Remote
            </p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Already collaborated on multiple projects ranging from
                responsive landing page creation to robust systems with
                authentication, payment integration, and complex state modeling
              </li>
            </ul>
          </div>
          {/* Work #1 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2020-04 - </div>
            <div>2022-05</div>
            <div className="mt-1 text-xs text-gray-500">2yrs 2 mos</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">
              Front-End JavaScript Engineer
            </h4>
            <p className="text-sm italic text-gray-700">
              SweetRush Inc. Remote, US
            </p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Involved in the development of various multi-page sites, and
                landing pages for small and mid-sized businesses. Worked with
                React, Next.js, HubSpot, WordPress and Shopify
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Also worked as a in the development of a health care web app
                with offline capability and complex architecture
              </li>
            </ul>
          </div>
          {/* Work #2 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2017-04 - </div>
            <div>2019-07</div>
            <div className="mt-1 text-xs text-gray-500">2yrs 4 mos</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">
              Full Stack Engineer
            </h4>
            <p className="text-sm italic text-gray-700">
              Prevedello Sistems, Brazil
            </p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Worked along with the team in the maintenance and development of
                new features for the company&apos;s ERP (Enterprise resource
                planning) and database modeling
              </li>
              <li className="text-sm leading-normal text-gray-700">
                Performed integration with 3rd party APIs (warehouse, stock
                management, e-commerce, etc) and Testing/QA routines
              </li>
            </ul>
          </div>
          {/* Work #3 */}
          <div className="col-span-1 text-sm text-gray-700">
            <div>2016-03 - </div>
            <div>2017-04</div>
            <div className="mt-1 text-xs text-gray-500">1yr 2 mos</div>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-bold text-gray-800">
              Technical Support Analyst
            </h4>
            <p className="text-sm italic text-gray-700">
              Prevedello Sistems, Brazil
            </p>
            <ul className="ml-4 list-disc">
              <li className="text-sm leading-normal text-gray-700">
                Evaluate user problems, respond to support requests and
                patiently walk individuals through basic troubleshooting tasks
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
