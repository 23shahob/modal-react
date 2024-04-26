import React, { useState } from "react";

import { RiDeleteBinLine } from "react-icons/ri";

const App = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-slate-400">
      <div>
        <button
          onClick={() => {
            setModal(true);
          }}
          className="flex items-center gap-2 rounded-lg border-none bg-red-600 px-4 py-3 outline-none"
        >
          <RiDeleteBinLine className="h-6 w-6 text-white" />
          <p className="text-xl font-semibold text-white">Delete</p>
        </button>
      </div>
      {modal && (
        <div className="fixed flex h-80 w-96 flex-col items-center justify-center rounded-xl bg-white p-8 shadow-2xl">
          <span
            onClick={() => {
              setModal(false);
            }}
            className="absolute right-5 top-2 cursor-pointer text-4xl text-gray-600"
          >
            ×
          </span>
          <RiDeleteBinLine className="mb-2 h-10 w-10 text-red-600" />
          <h4 className="mb-3 text-[24px] font-bold">Confirm Delete</h4>
          <p className="mb-5 text-center text-[18px] text-gray-400">
            Are you sure you want to delete this item?
          </p>
          <div className="flex gap-3">
            <button className="rounded-xl bg-red-600 px-8 py-3 text-[20px] font-semibold text-white shadow-2xl">
              Delete
            </button>
            <button
              onClick={() => {
                setModal(false);
              }}
              className="rounded-xl px-8 py-3 text-[20px] font-semibold text-gray-500 shadow-2xl"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
