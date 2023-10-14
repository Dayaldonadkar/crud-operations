import React, { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center">
      <div className="w-[70%]">
        <h1 className="text-3xl pt-5">Create</h1>
        <form className="space-y-8 pt-5">
          <div className="space-y-1">
            <label htmlFor="">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-[100%] border border-black"
              type="text"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-[100%] border border-black"
              type="text"
            />
          </div>

          <button className="py-1 px-2 bg-blue-500 text-black">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
