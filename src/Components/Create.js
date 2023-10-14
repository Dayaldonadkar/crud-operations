import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const header = { "Access-control-Allow-origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post("https://mockapi.io/projects/652a9ba54791d884f1fd21e6", {
      name: name,
      email: email,
      header,
    });
  };

  return (
    <div className="flex justify-center">
      <div className="w-[70%]">
        <h1 className="text-3xl pt-5">Create</h1>
        <form onSubmit={(e) => e.preventDefault} className="space-y-8 pt-5">
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

          <button
            className="py-1 px-2 bg-blue-500 text-black"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
