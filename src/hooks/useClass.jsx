

import { useQuery } from "@tanstack/react-query";

const useClass = () => {
  const { data: classes = [], isLoading: loading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-learning-school-server-six.vercel.app/classes");
      return res.json();
    },
  });

  return [classes, loading];
};

export default useClass;
