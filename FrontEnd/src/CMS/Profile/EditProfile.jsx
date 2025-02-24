import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

export default function EditProfile() {
     const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [description, setDescription] = useState("");
      const [avatar, setAvatar] = useState(null);
    
      const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setAvatar(URL.createObjectURL(file));
        }
      };
    return (
        <>
            <div className="flex flex-col items-center gap-3 w-full">
                <Avatar className="w-24 h-24 border-2 border-gray-300">
                    <AvatarImage src={avatar || "https://via.placeholder.com/150"} alt="Avatar" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                    id="avatar-upload"
                />
                <Label htmlFor="avatar-upload" className="text-blue-600 cursor-pointer text-sm">
                    Change Avatar
                </Label>
            </div>
            <div>
                <Label className="block text-gray-700">Username</Label>
                <Input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-2 shadow-lg border border-gray-300"
                />
            </div>
            <div>
                <Label className="block text-gray-700">Email</Label>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 shadow-lg border border-gray-300"
                />
            </div>
            <div>
                <Label className="block text-gray-700">Description</Label>
                <Textarea
                    placeholder="Write about yourself..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-2 shadow-lg border border-gray-300"
                />
            </div>
            <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:bg-indigo-700 focus-visible:shadow-indigo-300/10 font-semibold">
                Save Changes
            </Button>
        </>
    )
}
