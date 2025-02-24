import React from 'react';

export default function MyProfile() {
    return (
        <div className="relative flex justify-center items-center  p-6">
            
            {/* Main Card */}
            <div className="relative bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full text-center border border-gray-200">
        
                
                {/* Profile Image */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full blur-md opacity-50" />
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="w-32 h-32 mx-auto rounded-full object-cover shadow-md transition-transform duration-500 hover:scale-105"
                        alt="Profile"
                    />
                </div>
                
                {/* Profile Info */}
                <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                <p className="text-sm text-gray-500 mt-1">Creative Technologist</p>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    Crafting digital experiences at the intersection of design and code.
                </p>
                
                {/* Stats Section */}
                <div className="flex justify-around mt-6">
                    <div className="text-center">
                        <p className="text-xl font-semibold text-gray-800">1.2k</p>
                        <p className="text-xs text-gray-500">FOLLOWERS</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-semibold text-gray-800">86</p>
                        <p className="text-xs text-gray-500">POSTS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
