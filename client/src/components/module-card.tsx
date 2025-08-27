import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { LucideIcon, CheckIcon } from "lucide-react";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  blurb: string;
  bullets: string[];
}

export default function ModuleCard({ icon: Icon, title, blurb, bullets }: ModuleCardProps) {
  return (
    <Card className="card-hover rounded-xl border">
      <CardHeader className="pb-4">
        <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{blurb}</p>
        <ul className="space-y-2 text-sm">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
