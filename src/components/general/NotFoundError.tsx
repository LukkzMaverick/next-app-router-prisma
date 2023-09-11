import React from "react";

type Props = { message: string };

const NotFoundError = ({ message }: Props) => {
  return <div className="text-black capitalize">{message}</div>;
};

export default NotFoundError;
