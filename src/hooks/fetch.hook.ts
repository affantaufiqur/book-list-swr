import { useQuery } from "@tanstack/react-query";
import { TypeBooks, TypeSingleBook } from "../utils/types/books.type";
import { getDataFromApi } from "../utils/common";

export function useFetchAllBooks() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["fetch-all-books"],
        queryFn: async () => await getDataFromApi<TypeBooks>("books"),
    });
    return { data, error, isLoading };
}

export function useFetchBookById(id: number) {
    const { data, error, isLoading } = useQuery({
        queryKey: ["fetch-book-by-id"],
        queryFn: async () =>
            await getDataFromApi<TypeSingleBook>(`books/${id}`),
    });
    return { data, error, isLoading };
}

export function useFetch<T>(endpoint: string) {
    const { data, error, isLoading } = useQuery({
        queryKey: [`fetch-${endpoint}`],
        queryFn: async () => await getDataFromApi<T>(endpoint),
    });
    return { data, error, isLoading };
}
