"use client";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState, useTransition } from "react";
import AuthModalInputs, { input } from "./AuthModalInputs";
import { CreateAccount } from "@/services/actions/auth.action";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type Props = { isSignin: boolean };

export default function AuthModal({ isSignin }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setInputs({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      password: "",
    });
    setOpen(false);
  };
  let [isPending, startTransition] = useTransition();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const [inputs, setInputs] = useState<input>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${
          isSignin ? "bg-blue-400 text-white" : ""
        } border p-1 px-4 rounded mr-3`}
      >
        {isSignin ? "Sign in" : "Sign up"}
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">
                {isSignin ? "Sign in" : "Create Account"}
              </p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center">
                {isSignin
                  ? "Log Into Your Account"
                  : "Create Your OpenTable Account"}
              </h2>
              <AuthModalInputs
                isSignin={isSignin}
                inputs={inputs}
                handleChangeInput={handleChangeInput}
              />
              <button
                onClick={async () => {
                  const responseAccount = await CreateAccount(inputs);
                  if (responseAccount.errors.length > 0) {
                    console.log(responseAccount.errors);
                  } else {
                    setOpen(false);
                  }
                }}
                className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
              >
                {isSignin ? "Sign in" : "Create Account"}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
