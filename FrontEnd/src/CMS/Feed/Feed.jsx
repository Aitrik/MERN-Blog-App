import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Menu, X, MoreVertical } from "lucide-react";

const Feed = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const categories = ['Navigation', 'Header', 'Pricing', 'Footer', 'FAQ', 'Testimonial'];
    const collections = ['FlowUI', 'Breeze', 'Matter', 'Midas', 'Polka', 'Gully'];

    return (
        <div className="h-screen bg-gray-50">
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <aside className={`
          fixed lg:relative w-64 h-screen bg-white border-r
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          z-40
        `}>
                    <div className="sticky top-0 p-4">
                        {/* Search Bar */}
                        <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search..."
                                className="pl-9"
                            />
                        </div>

                        <ScrollArea className="h-[calc(100vh-120px)] pr-4">
                            <div className="space-y-8">
                                {/* Categories Section */}
                                <div>
                                    <h3 className="text-sm font-medium mb-3 text-gray-900">Categories</h3>
                                    <div className="space-y-1">
                                        {categories.map((category) => (
                                            <Button
                                                key={category}
                                                variant="ghost"
                                                className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                            >
                                                {category}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                {/* Collections Section */}
                                <div>
                                    <h3 className="text-sm font-medium mb-3 text-gray-900">Collections</h3>
                                    <div className="space-y-1">
                                        {collections.map((collection) => (
                                            <Button
                                                key={collection}
                                                variant="ghost"
                                                className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                            >
                                                {collection}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-h-screen p-4 lg:p-6">

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div className="bg-white rounded-lg overflow-hidden w-full border border-gray-200">
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
                                        alt="Mountain"
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
                                        <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">
                                            John Smith
                                        </span>
                                        <button className="text-white bg-black/50 p-1 rounded-full hover:bg-black/60">
                                            <MoreVertical className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                                        At Value-Focused Hotels the Free Breakfast Gets...
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-600">

                                        <span>•</span>
                                        <span>2K Views</span>
                                        <span>•</span>
                                        <span>2 Days ago</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Feed;