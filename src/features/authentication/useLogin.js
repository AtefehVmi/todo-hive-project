import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),

    onError: () => {
      toast.error("Password is wrong. Recheck your username and password");
    },
  });

  return { login, isLoading };
}
