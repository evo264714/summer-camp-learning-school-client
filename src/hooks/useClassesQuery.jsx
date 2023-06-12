
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useClassesQuery = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxios();

    const { refetch, data: singleUserClass = [] } = useQuery({
        queryKey: ['singleuserclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/singleuserclass?email=${user?.email}`)
            return res.data
        },
    })
    return [singleUserClass, refetch]
};

export default useClassesQuery;