import { TagIcon, SearchIcon, BarChartIcon } from "lucide-react";

interface TimelineItem {
  title: string;
  description: string;
  details?: string;
  images?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const timelineIcons = [TagIcon, SearchIcon, BarChartIcon];

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
        
        <div className="space-y-12">
          {items.map((item, index) => {
            const Icon = timelineIcons[index] || TagIcon;
            
            return (
              <div key={index} className="relative flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-display text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  {item.details && (
                    <p className="text-sm text-muted-foreground mb-6">{item.details}</p>
                  )}
                  
                  {item.images && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {item.images.map((image, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={image} 
                          alt={`${item.title} illustration ${imgIndex + 1}`}
                          className="rounded-lg shadow-md w-full h-48 object-cover" 
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <blockquote className="text-xl italic text-muted-foreground max-w-3xl mx-auto">
          "Every step isn't just recorded — it's interpreted. StitchOS brings intelligence to tagging, tracking, and analysis, so factories don't just see data — they act on it."
        </blockquote>
      </div>
    </div>
  );
}
