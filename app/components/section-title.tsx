export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <div className="inline-block">
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        <div className="w-full h-1 bg-primary mt-2 rounded-full"></div>
      </div>
    </div>
  );
}
