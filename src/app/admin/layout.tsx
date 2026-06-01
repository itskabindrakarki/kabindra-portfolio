import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { LayoutDashboard, FileText, Briefcase, MessageSquare, LogOut } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/50 bg-secondary/20 hidden md:block">
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-border/50">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tighter">
              KK. Admin
            </Link>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            <NavItem href="/admin" icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem href="/admin/projects" icon={<Briefcase size={20} />} label="Projects" />
            <NavItem href="/admin/posts" icon={<FileText size={20} />} label="Blog Posts" />
            <NavItem href="/admin/messages" icon={<MessageSquare size={20} />} label="Messages" />
          </nav>

          <div className="p-4 border-t border-border/50">
            <Link 
              href="/api/auth/signout"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut size={20} />
              <span className="font-medium">Sign Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <header className="md:hidden p-4 border-b border-border/50 flex justify-between items-center bg-secondary/20">
          <Link href="/" className="font-heading font-bold text-xl tracking-tighter">
            KK. Admin
          </Link>
          <Link href="/api/auth/signout" className="text-muted-foreground">
            <LogOut size={20} />
          </Link>
        </header>

        <div className="p-6 md:p-10 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}
