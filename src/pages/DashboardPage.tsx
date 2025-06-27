import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from 'lucide-react';

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  // Show a welcome toast message on component mount
  useEffect(() => {
    toast.success("Login Successful!", {
      description: "Welcome back to your dashboard.",
    });
  }, []);

  const handleLogout = () => {
    // In a real app, you would clear auth tokens here.
    console.log("User logging out.");
    toast.info("You have been successfully logged out.");
    navigate('/'); // Navigate to the login page as per App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Dashboard</CardTitle>
            <CardDescription>You are successfully logged in.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="text-xl font-semibold">Welcome, User!</p>
              <p className="text-muted-foreground">This is your protected dashboard area.</p>
            </div>
            <Button onClick={handleLogout} className="w-full max-w-xs">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;