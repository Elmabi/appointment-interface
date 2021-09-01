import React from "react";
import swal from "@sweetalert/with-react";
import { MdDoneAll } from "react-icons/md";

export function SuccessMessage() {
  swal(
    <div className="grid justify-items-center">
      <MdDoneAll className=" text-green-400 self-center text-7xl" />
      <p className="text-3xl font-bold antialiased">
        Your appointment have be added successfully!
      </p>
    </div>
  );
}
