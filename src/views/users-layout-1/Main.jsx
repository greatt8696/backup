import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Tippy,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

function Main() {
  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Users Information</h2>
      <div className="grid grid-cols-20 gap-4 mt-6">
        {/* BEGIN: Users Layout */}
        {/* {$_.take($f(), 10).map((faker, fakerKey) => (
          <div key={fakerKey} className="intro-y col-span-12 md:col-span-6">
            <div className="box">
              <div className="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={faker.photos[0]}
                  />
                </div>
                <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                  <a href="" className="font-medium">
                    {faker.users[0].name}
                  </a>
                  <div className="text-slate-500 text-xs mt-0.5">
                    {faker.jobs[0]}
                  </div>
                </div>
                <div className="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Facebook"
                  >
                    <Lucide icon="Facebook" className="w-3 h-3 fill-current" />
                  </Tippy>
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Twitter"
                  >
                    <Lucide icon="Twitter" className="w-3 h-3 fill-current" />
                  </Tippy>
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Linked In"
                  >
                    <Lucide icon="Linkedin" className="w-3 h-3 fill-current" />
                  </Tippy>
                </div>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                  <div className="flex text-slate-500 text-xs">
                    <div className="mr-auto">Progress</div>
                    <div>20%</div>
                  </div>
                  <div className="progress h-1 mt-2">
                    <div
                      className="progress-bar w-1/4 bg-primary"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <button className="btn btn-primary py-1 px-2 mr-2">
                  Message
                </button>
                <button className="btn btn-outline-secondary py-1 px-2">
                  Profile
                </button>
              </div>
            </div>
          </div>
        ))} */}
        <div className="intro-y col-span-12 md:col-span-12" style={{height:"300px"}}>
            <div className="box" style={{height:"300px"}}>
              <div className="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400" style={{height:"220px"}}>
                <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={"/src/assets/images/food-beverage-15.jpg"}
                  />
                </div>
                <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                  <a href="" className="font-medium">
                    주병현
                  </a>
                  <div className="text-slate-500 text-xs mt-0.5">
                    직업임??
                  </div>
                </div>
                <div className="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Facebook"
                  >
                    <Lucide icon="Facebook" className="w-3 h-3 fill-current" />
                  </Tippy>
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Twitter"
                  >
                    <Lucide icon="Twitter" className="w-3 h-3 fill-current" />
                  </Tippy>
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Linked In"
                  >
                    <Lucide icon="Linkedin" className="w-3 h-3 fill-current" />
                  </Tippy>
                </div>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                <div className="w-full lg:w-1/1 mb-4 lg:mb-0 mr-auto">
                  <div className="flex text-slate-500 text-xs">
                    <div className="mr-auto">Progress</div>
                    <div>20%</div>
                  </div>
                  <div className="progress h-1 mt-2">
                    <div
                      className="progress-bar w-1/4 bg-primary"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <button className="btn btn-primary py-1 px-2 mr-2">
                  Message
                </button>
                <button className="btn btn-outline-secondary py-1 px-2">
                  Profile
                </button>
              </div>
            </div>
          </div>
          <div className="intro-y col-span-12 md:col-span-6" style={{height:"600px"}}>
            <div className="box"style={{height:"600px"}}>
              <div className="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400" style={{height:"520px"}}>
                <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={"/src/assets/images/food-beverage-15.jpg"}
                  />
                </div>
                <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                  <a href="" className="font-medium">
                    주병현
                  </a>
                  <div className="text-slate-500 text-xs mt-0.5">
                    직업임??
                  </div>
                </div>
                <div className="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Facebook"
                  >
                    <Lucide icon="Facebook" className="w-3 h-3 fill-current" />
                  </Tippy>
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Twitter"
                  >
                    <Lucide icon="Twitter" className="w-3 h-3 fill-current" />
                  </Tippy>
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Linked In"
                  >
                    <Lucide icon="Linkedin" className="w-3 h-3 fill-current" />
                  </Tippy>
                </div>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                <div className="w-full lg:w-1/1 mb-4 lg:mb-0 mr-auto">
                  <div className="flex text-slate-500 text-xs">
                    <div className="mr-auto">Progress</div>
                    <div>20%</div>
                  </div>
                  <div className="progress h-1 mt-2">
                    <div
                      className="progress-bar w-1/4 bg-primary"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <button className="btn btn-primary py-1 px-2 mr-2">
                  Message
                </button>
                <button className="btn btn-outline-secondary py-1 px-2">
                  Profile
                </button>
              </div>
            </div>
          </div>
          <div className="intro-y col-span-12 md:col-span-6" style={{height:"600px"}}>
            <div className="box" style={{height:"600px"}}>
              <div className="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400"style={{height:"520px"}}>
                <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={"/src/assets/images/food-beverage-15.jpg"}
                  />
                </div>
                <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                  <a href="" className="font-medium">
                    주병현
                  </a>
                  <div className="text-slate-500 text-xs mt-0.5">
                    직업임??
                  </div>
                </div>
                <div className="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Facebook"
                  >
                    <Lucide icon="Facebook" className="w-3 h-3 fill-current" />
                  </Tippy>
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Twitter"
                  >
                    <Lucide icon="Twitter" className="w-3 h-3 fill-current" />
                  </Tippy>
                  <Tippy
                    tag="a"
                    href=""
                    className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
                    content="Linked In"
                  >
                    <Lucide icon="Linkedin" className="w-3 h-3 fill-current" />
                  </Tippy>
                </div>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                <div className="w-full lg:w-1/1 mb-4 lg:mb-0 mr-auto">
                  <div className="flex text-slate-500 text-xs">
                    <div className="mr-auto">Progress</div>
                    <div>20%</div>
                  </div>
                  <div className="progress h-1 mt-2">
                    <div
                      className="progress-bar w-1/4 bg-primary"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <button className="btn btn-primary py-1 px-2 mr-2">
                  Message
                </button>
                <button className="btn btn-outline-secondary py-1 px-2">
                  Profile
                </button>
              </div>
            </div>
          </div>
        {/* END: Pagination */}
      </div>
    </>
  );
}

export default Main;
