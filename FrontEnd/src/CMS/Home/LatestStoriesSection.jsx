import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function LatestStoriesSection() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Latest Stories Column */}
                <div>
                    <h2 className="text-xl font-semibold mb-6">Latest Stories</h2>
                    <div className="space-y-4">
                        {/* Story Item */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-start gap-3 group cursor-pointer">
                                <Avatar className="h-8 w-8">
                                    <img src="/api/placeholder/32/32" alt="Author" />
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm font-medium">Martin santos</p>
                                            <h3 className="text-base font-semibold mt-1 group-hover:text-blue-600">
                                                I enjoy hard work I love setting goals and achieving them.
                                            </h3>
                                        </div>
                                        <button className="text-gray-500 hover:text-gray-700">
                                            <MoreHorizontal className="h-5 w-5" />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                                        <span>Nov 25, 2023</span>
                                        <span>•</span>
                                        <span>2 min read</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Streaming Column */}
                <div>
                    <h2 className="text-xl font-semibold mb-6">Upcoming Streaming</h2>
                    <div className="space-y-4">
                        {/* Streaming Item */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex gap-3 group cursor-pointer">
                                <div className="w-24 h-16 overflow-hidden rounded-lg flex-shrink-0">
                                    <img 
                                        src="/api/placeholder/96/64" 
                                        alt="Thumbnail" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-semibold group-hover:text-blue-600 line-clamp-2">
                                        The Top 10 Best Computer Speakers in the Market
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                                        <span>Nov 25, 2023</span>
                                        <span>•</span>
                                        <span>5 min watch</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}