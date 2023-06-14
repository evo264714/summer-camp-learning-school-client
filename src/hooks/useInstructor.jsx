import { useEffect, useState } from "react";

const useInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch('https://summer-camp-learning-school-server-evo264714.vercel.app/instructor')
        .then(res => res.json())
        .then(data => {
            setInstructor(data);
            setLoading(false);
        });
    }, [])
    return [instructor, loading]
};

export default useInstructor;