import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";

import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
    onError: (err) => {
      console.log("Error: ", err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { signup, isPending };
}
