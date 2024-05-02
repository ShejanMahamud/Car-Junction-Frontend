
import { useQuery } from '@tanstack/react-query';

const useServices = () => {

const {data,isLoading,refetch,isPending} = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
        const res = await fetch(`https://car-junction-backend.vercel.app/services`)
        const data = await res.json()
        return data;
    }
})
    return {data,isLoading,refetch,isPending}
};

export default useServices;
