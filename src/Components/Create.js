import React from "react";

const Create = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[70%]">
        <h1 className="text-3xl pt-5">Create</h1>
        <form className="space-y-8 pt-5">
          <div className="space-y-1">
            <label htmlFor="">Name</label>
            <input className="w-[100%] border border-black" type="text" />
          </div>
          <div className="space-y-1">
            <label htmlFor="">Email</label>
            <input className="w-[100%] border border-black" type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
