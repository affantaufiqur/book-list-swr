import { useQuery } from "@tanstack/react-query";
import { TypeBooks } from "../utils/types/books.type";
import { getDataFromApi } from "../utils/common";

export function useFetchAllBooks() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["fetch-all-books"],
        queryFn: async () => await getDataFromApi<TypeBooks>("books"),
    });
    return { data, error, isLoading };
}
