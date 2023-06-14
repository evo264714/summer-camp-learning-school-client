import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const usePayment = () => {
    const {user} = useAuth();
  const { data: payments = [], isLoading: loading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/payments/${user?.email}`);
      return res.json();
    },
  });

  return [payments, loading];
};

export default usePayment;
