import Link from "next/link";

const LogSignBtn = () => {
  return (
    <div className="bg-blue-800 flex justify-end text-xs pr-5 content-around flex-wrap">
      <span className="border-black mr-2 search-bar mr-10">
        <input className="bg-blue-800 m-2" type="text" name="" id="" />
        <i className="fas fa-search cursor-pointer mr-2"></i>
      </span>
      <span className="p-2 pt-2 pb-0 cursor-pointer">
        Login
        <span className="ml-1 mr-2 ">
          <i className="fas fa-chevron-down text-xs "></i>
        </span>
      </span>
      <span className="p-2 pt-2 pb-0 cursor-pointer">Sign up</span>
    </div>
  );
};

export default LogSignBtn;
