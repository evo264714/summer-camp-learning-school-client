import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClassesQuery = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: singleUserClass = [] } = useQuery({
        queryKey: ['singleuserclass', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/singleuserclass?email=${user?.email}`)
            return res.json()
        },
    })
    return [singleUserClass, refetch]
};

export default useClassesQuery;