import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Dropdown() {
    return (
        <div className="relative inline-block text-left group">
            <button
                className="
                    px-4 py-2 rounded-lg flex items-center gap-2
                    bg-transparent
                    transition-colors duration-400
                    hover:bg-black hover:text-white
                "
            >
                <div>Menu</div>
                <ChevronDownIcon className="w-4 h-4" />
            </button>

            <div
                className="
                    invisible opacity-0
                    group-hover:visible group-hover:opacity-100
                    transition-all duration-200
                    absolute mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg
                "
            >
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Profile</a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="#">Settings</a>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Logout
                </button>
            </div>
        </div>
    );
}
