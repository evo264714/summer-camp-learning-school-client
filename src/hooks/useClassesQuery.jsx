import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useClassesQuery = () => {
    const { user } = useContext(AuthContext)
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxios();

    const { refetch, data: singleUserClass = [] } = useQuery({
        queryKey: ['singleuserclass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/singleuserclass?email=${user?.email}`)
            return res.data
        },
    })
    return [singleUserClass, refetch]
};

export default useClassesQuery;