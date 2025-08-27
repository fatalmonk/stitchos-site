interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export default function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <span className="text-white font-bold text-xl">{step}</span>
      </div>
      <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
