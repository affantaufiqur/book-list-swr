import Header from "../components/header";
import { useRouter } from "@tanstack/react-router";

export default function Search() {
	const router = useRouter();
	const query = router.state.location.search.query;

	return (
		<div className="container mx-auto">
			<div className="py-12">
				<Header highlightedText="Search For" text={`Search For ${query}`} />
			</div>
		</div>
	);
}
