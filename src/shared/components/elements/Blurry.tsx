export default function Blurry({ className }: { className: string }) {
  return (
    <div
      id="blurry-blue"
      className={`animate-scaleUp size-[500px] absolute rounded-br-[50%] rotate-12 blur-3xl opacity-30 pointer-events-none ${className}`}
    />
  );
}
