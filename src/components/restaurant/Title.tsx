import React from "react";

type Props = {
  title: string;
};

const Title = (props: Props) => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="font-bold text-6xl">{props.title}</h1>
    </div>
  );
};

export default Title;
