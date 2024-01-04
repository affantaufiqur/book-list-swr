import { useQuery } from "@tanstack/react-query";
import { getDataFromApi } from "../utils/common";

export function useFetch<T>(endpoint: string) {
    const { data, error, isLoading } = useQuery({
        queryKey: [`fetch-${endpoint}`],
        queryFn: async () => await getDataFromApi<T>(endpoint),
    });
    return { data, error, isLoading };
}
