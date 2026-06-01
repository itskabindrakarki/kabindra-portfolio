import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { Briefcase, FileText, MessageSquare, Star } from "lucide-react";

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  
  // Fetch stats concurrently
  const [projectCount, postCount, messageCount, testimonialCount] = await Promise.all([
    prisma.project.count(),
    prisma.post.count(),
    prisma.message.count(),
    prisma.testimonial.count(),
  ]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-heading mb-2">Welcome back, {session?.user?.name || "Admin"}</h1>
        <p className="text-muted-foreground">Here's an overview of your portfolio metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard title="Total Projects" value={projectCount} icon={<Briefcase size={24} />} />
        <StatCard title="Blog Posts" value={postCount} icon={<FileText size={24} />} />
        <StatCard title="Messages" value={messageCount} icon={<MessageSquare size={24} />} />
        <StatCard title="Testimonials" value={testimonialCount} icon={<Star size={24} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Messages Widget */}
        <div className="bg-secondary/20 border border-border/50 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4 font-heading flex items-center gap-2">
            <MessageSquare size={20} className="text-accent" /> Recent Messages
          </h2>
          <div className="text-sm text-muted-foreground">
            {messageCount > 0 ? (
              <p>You have {messageCount} messages.</p>
            ) : (
              <p>No new messages at the moment.</p>
            )}
          </div>
        </div>

        {/* Quick Actions Widget */}
        <div className="bg-secondary/20 border border-border/50 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4 font-heading">Quick Actions</h2>
          <div className="flex flex-col gap-3">
            <button className="text-left px-4 py-3 bg-background rounded-xl hover:bg-secondary border border-border/50 transition-colors">
              + Add New Project
            </button>
            <button className="text-left px-4 py-3 bg-background rounded-xl hover:bg-secondary border border-border/50 transition-colors">
              + Write Blog Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: number; icon: React.ReactNode }) {
  return (
    <div className="bg-secondary/20 border border-border/50 rounded-2xl p-6 flex items-center gap-4 hover:border-accent/50 transition-colors">
      <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}
