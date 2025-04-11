
import { useState } from "react";
import { Link } from "react-router-dom";
import { Building, ChevronDown, Menu, User, Settings, LayoutDashboard, FileText, Users, FileBox } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Tasks", href: "/tasks", icon: FileText },
    { label: "Documents", href: "/documents", icon: FileBox },
    { label: "Team", href: "/team", icon: Users },
    { label: "Resources", href: "/resources", icon: FileText },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building className="h-8 w-8 text-brand-500" />
              <span className="ml-2 text-xl font-semibold text-gray-800">LaunchPad</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center text-gray-600 hover:text-brand-500 hover:bg-brand-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">John Doe</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex cursor-pointer items-center">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="flex cursor-pointer items-center">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {isMobile && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="ml-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "md:hidden bg-white border-t",
          mobileMenuOpen ? "block animate-fade-in" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-500 hover:bg-brand-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.label}
            </Link>
          ))}
          <Link 
            to="/profile"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-500 hover:bg-brand-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <User className="h-5 w-5 mr-2" />
            Profile
          </Link>
          <Link 
            to="/settings"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-500 hover:bg-brand-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
