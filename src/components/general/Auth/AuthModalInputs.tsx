import React from "react";

export interface input {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  password: string;
}

type Props = {
  inputs: input;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean;
};

const AuthModalInputs = ({ inputs, isSignin, handleChangeInput }: Props) => {
  return (
    <div>
      {!isSignin ? (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="input border p-2 py-3 w-[49%]"
            placeholder="First Name"
            value={inputs.firstName}
            name="firstName"
            onChange={(e) => handleChangeInput(e)}
          />
          <input
            type="text"
            className="input border p-2 py-3 w-[49%]"
            placeholder="Last Name"
            value={inputs.lastName}
            name="lastName"
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
      ) : (
        ""
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="input border p-2 py-3 w-full"
          placeholder="Email"
          value={inputs.email}
          name="email"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      {!isSignin ? (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="input border p-2 py-3 w-[49%]"
            placeholder="Phone"
            value={inputs.phone}
            name="phone"
            onChange={(e) => handleChangeInput(e)}
          />
          <input
            type="text"
            className="input border p-2 py-3 w-[49%]"
            placeholder="City"
            value={inputs.city}
            name="city"
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
      ) : (
        ""
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="input border p-2 py-3 w-full"
          placeholder="Password"
          value={inputs.password}
          name="password"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
    </div>
  );
};

export default AuthModalInputs;
