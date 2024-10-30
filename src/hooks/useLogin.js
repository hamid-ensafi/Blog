
'use client';
import { useRouter } from "next/navigation";

import { login } from "@/service/authApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export  function useLogin() {
    const router = useRouter();



  const { mutate: loginMutate } = useMutation({
    mutationFn: ({ username, password }) => login(username, password),
    onError: (error) => {
      toast.error(error.message);
    },
      onSuccess: () => {
      toast.success("ورود  موفقیت امیز");
      router.replace("/blog");
    },
  });
  return { loginMutate };
}
