import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Rocket, LogIn, UserPlus, LayoutDashboard, LogOut, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');
  
  // In a real application, this would come from a context or auth hook.
  // We simulate it here for demonstration purposes.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/'); // Redirect to login page on logout
  };
  
  const handleToggleAuth = () => {
    setIsAuthenticated(prev => !prev);
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold">QuickAccess</span>
        </Link>
        
        <div className="flex items-center gap-2">
           {/* This button is for demonstration purposes to toggle auth state */}
           <Button variant="outline" size="sm" onClick={handleToggleAuth}>
              {isAuthenticated ? "Simulate Logout" : "Simulate Login"}
           </Button>

          {isAuthenticated ? (
            // Authenticated user links
            <>
              <Button variant="ghost" asChild>
                <Link to="/dashboard">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            // Unauthenticated user links
            <>
              <Button variant="ghost" asChild>
                <Link to="/">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button asChild>
                <Link to="/sign-up">
                  Sign Up
                  <UserPlus className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;