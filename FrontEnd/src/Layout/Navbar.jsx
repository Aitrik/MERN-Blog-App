import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { MenuSquare, NewspaperIcon, Search, LogOut, User, LayoutDashboard } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [popoverOpen, setPopoverOpen] = useState(false);

    return (
        <header className="flex h-20 w-full items-center px-6 md:px-10 shadow-md border border-gray-300 sticky top-0 z-50 bg-white">
            {/* Mobile Drawer */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden mr-1">
                        <MenuSquare className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col w-64">
                    <Link to="/" className="flex items-center mb-6">
                        <NewspaperIcon className="h-6 w-6 mr-2" />
                        <h1 className="text-lg font-semibold">The Daily Prism</h1>
                    </Link>
                    <nav className="grid gap-5 py-6">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </nav>
                </SheetContent>
            </Sheet>

            {/* Desktop Logo */}
            <Link to="/" className="mr-8 hidden lg:flex items-center">
                <NewspaperIcon className="h-6 w-6 mr-2" />
                <span className="text-lg font-semibold">The Daily Prism</span>
            </Link>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg mx-auto">
                <input
                    className="appearance-none border border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                    type="text"
                    placeholder="Search..."
                />
                <div className="absolute right-2 inset-y-0 flex items-center">
                    <Search className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="ml-auto hidden lg:flex gap-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/feed">Feed</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>

            {/* Avatar with Dropdown Menu */}
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                    <Avatar className="ml-6 cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-2 bg-white shadow-xl border border-gray-300 rounded-md">
                    <Link to="/edit_profile" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setPopoverOpen(false)}>
                        <User className="h-4 w-4 mr-2" /> Profile
                    </Link>
                    <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-100 rounded-md" onClick={() => setPopoverOpen(false)}>
                        <LayoutDashboard className="h-4 w-4 mr-2" /> Dashboard
                    </Link>
                    <Separator />
                    <button className="flex items-center p-2 w-full hover:bg-gray-100 rounded-md text-red-600" onClick={() => setPopoverOpen(false)}>
                        <LogOut className="h-4 w-4 mr-2" /> Logout
                    </button>
                </PopoverContent>
            </Popover>
        </header>
    );
}

function NavLink({ to, children }) {
    return (
        <Link to={to} className="text-gray-700 hover:text-gray-900 font-medium">
            {children}
        </Link>
    );
}
