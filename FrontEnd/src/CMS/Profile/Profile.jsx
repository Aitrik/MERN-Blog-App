import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { User, Edit, Key, Sun, Image } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import EditProfile from "./EditProfile";
import MyProfile from "./MyProfile";

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState("Edit Profile");


  const renderContent = () => {
    switch (selectedTab) {
      case "My Profile":
        return (
          <MyProfile />
        );


      case "Edit Profile":
        return <EditProfile />;
      case "Reset Password":
        return <div className="text-center text-gray-700">Reset Password Content</div>;
      case "Appearance":
        return <div className="text-center text-gray-700">Appearance Settings</div>;
        case "My Posts":
          return <div className="text-center text-gray-700">My Posts</div>;
      default:
        return null;
    }
  };


  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4 gap-6">
      <div className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-2xl border border-gray-300">
        <nav className="space-y-4">
          <Button variant="ghost" className="w-full text-left flex items-center gap-2" onClick={() => setSelectedTab("My Profile")}>
            <User size={18} /> My Profile
          </Button>
          <Separator />
          <Button variant="ghost" className="w-full text-left flex items-center gap-2" onClick={() => setSelectedTab("Edit Profile")}>
            <Edit size={18} /> Edit Profile
          </Button>
          <Separator />
          <Button variant="ghost" className="w-full text-left flex items-center gap-2" onClick={() => setSelectedTab("Reset Password")}>
            <Key size={18} /> Reset Password
          </Button>
          <Separator />
          <Button variant="ghost" className="w-full text-left flex items-center gap-2" onClick={() => setSelectedTab("Appearance")}>
            <Sun size={18} /> Appearance
          </Button>
          <Separator />
          <Button variant="ghost" className="w-full text-left flex items-center gap-2" onClick={() => setSelectedTab("My Posts")}>
            <Image size={18} /> My Posts
          </Button>
        </nav>
      </div>
      <div className="w-full md:w-3/4 flex justify-center items-center">
        <Card className="w-full max-w-lg shadow-lg bg-white p-6 rounded-2xl border border-gray-300">
          <CardHeader className="text-xl font-semibold text-gray-700 text-center">
            {selectedTab}
          </CardHeader>
          <CardContent className="space-y-4">
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
