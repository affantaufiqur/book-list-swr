import { Loader } from "lucide-react";

export default function Spinner() {
    return (
        <div className="flex items-center justify-center py-12">
            <Loader className="size-6 animate-spin" />
        </div>
    );
}
