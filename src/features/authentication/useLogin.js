import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      // console.log(user);
      toast.success("Welcome!");
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Password is wrong. Recheck your username and password");
    },
  });

  return { login, isLoading };
}
