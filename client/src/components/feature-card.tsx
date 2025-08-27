import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { LucideIcon, CheckIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  moreFeatures?: number;
}

export default function FeatureCard({ icon: Icon, title, description, features, moreFeatures }: FeatureCardProps) {
  return (
    <Card className="card-hover rounded-xl border bg-white shadow-sm">
      <CardHeader className="pb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="font-display text-xl font-semibold text-gray-900">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <CheckIcon className="w-3 h-3 text-blue-600" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        {moreFeatures && (
          <p className="text-blue-600 text-sm font-medium mt-4">
            +{moreFeatures} more features
          </p>
        )}
      </CardContent>
    </Card>
  );
}