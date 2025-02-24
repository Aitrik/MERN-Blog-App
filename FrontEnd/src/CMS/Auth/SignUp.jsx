import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SignUp({ open, onClose }) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader >
                    <DialogTitle className="text-center text-xl font-semibold">Sign Up</DialogTitle>
                    <DialogDescription className="text-center">
                        Sign up to post your interests.
                    </DialogDescription>
                </DialogHeader>
                <Separator/>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center justify-start gap-4">
                        <Label htmlFor="name" className="text-left">
                            Email:
                        </Label>
                        <Input id="name" placeholder="Enter your email"  className="col-span-3 shadow-lg border border-gray-300" />
                    </div>
                    <div className="grid grid-cols-4 items-center justify-start gap-4">
                        <Label htmlFor="username" className="text-left">
                            Username:
                        </Label>
                        <Input id="username" placeholder="Enter your username" className="col-span-3 shadow-lg border border-gray-300 " />
                    </div>
                    <div className="grid grid-cols-4 items-center justify-start gap-4">
                        <Label htmlFor="username" className="text-left">
                            Password:
                        </Label>
                        <Input id="username" placeholder="Enter your password" className="col-span-3 shadow-lg border border-gray-300 " />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:bg-indigo-700 focus-visible:shadow-indigo-300/10 " onClick={onClose}>
                       Sign Up
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
