interface KpiStatProps {
  value: string;
  label: string;
  hint: string;
}

export default function KpiStat({ value, label, hint }: KpiStatProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-gradient mb-2">{value}</div>
      <div className="font-medium mb-1">{label}</div>
      <div className="text-sm text-muted-foreground">{hint}</div>
    </div>
  );
}
