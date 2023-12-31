"use client";
import Image from "next/image";
import React from "react";
import errorMascot from "../../public/icons/error.png";

type Props = { error: Error };

const Error = ({ error }: Props) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorMascot} alt="error" className="w-56 mb-8"></Image>
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
        <p className="text-reg font-bold">{error.message}</p>
      </div>
    </div>
  );
};

export default Error;
