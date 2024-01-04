import { useRouter } from "@tanstack/react-router";
export default function BookById() {
    const router = useRouter();
    return (
        <div className="container mx-auto py-12">
            <p>{router.state.location.href.split("/").at(-1)}</p>
        </div>
    );
}
