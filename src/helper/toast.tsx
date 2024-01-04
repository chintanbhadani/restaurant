import { toast } from "react-toastify";

export const successToast = (message: string) => {
  return toast.success(message);
};

export const errorToast = (message: string) => {
  return toast.error(message, {
    style: {
      animationName: "-moz-initial",
      borderBottom: "none",
    },
  });
};
