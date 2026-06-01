import { PrismaClient } from "@prisma/client";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const prisma = new PrismaClient();

export default async function ProjectsAdmin() {
  const projects = await prisma.project.findMany({
    orderBy: { order: 'asc' }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading mb-2">Projects</h1>
          <p className="text-muted-foreground">Manage your portfolio case studies.</p>
        </div>
        <Button className="bg-accent text-white hover:bg-accent/90 gap-2 rounded-xl">
          <Plus size={18} /> Add Project
        </Button>
      </div>

      <div className="bg-secondary/20 border border-border/50 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/50 bg-secondary/50">
              <th className="p-4 font-medium text-muted-foreground">Title</th>
              <th className="p-4 font-medium text-muted-foreground">Tech Stack</th>
              <th className="p-4 font-medium text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-8 text-center text-muted-foreground">
                  No projects found. Click "Add Project" to create one.
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr key={project.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="p-4 font-medium">{project.title}</td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {project.techStack}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg">
                        <Edit size={14} />
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-lg text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/20">
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
