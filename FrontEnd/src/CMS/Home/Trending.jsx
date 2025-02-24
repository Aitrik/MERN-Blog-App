import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { MoreVertical } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Trending() {
    return (
        <div className="flex flex-col items-center w-full mt-10">
            <h2 className="text-2xl font-bold text-left w-full mb-4">Top Stories</h2>

            <div className="relative w-full overflow-hidden">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/5">
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
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 border border-gray-200 p-2 rounded-full hover:bg-gray-100" />
                    <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 border border-gray-200 p-2 rounded-full hover:bg-gray-100" />
                </Carousel>
            </div>
        </div>
    );
}