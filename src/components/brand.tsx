import Logo from "../assets/logo.png";

export default function Brand() {
    return (
        <div className="flex flex-row items-center space-x-2">
            <img src={Logo} alt="logo" className="h-10" />
            <div className="flex flex-col ">
                <h1 className="text-lg">Bookoe</h1>
                <h3 className="text-sm text-gray-800">Rekomendasi Bukumu</h3>
            </div>
        </div>
    );
}
