export default function CardProjectSkeleton() {
  return (
    <div className="w-full max-w-xs ">
      <h1 className="mb-2">
        <div className="h-4 w-24 bg-lines/50 rounded animate-pulse" />
      </h1>
      <div className="w-full h-72 border border-lines rounded-xl overflow-hidden">
        <div className="h-1/2 w-full bg-lines/50 animate-pulse" />
        <div className="p-5 h-1/2 flex flex-col justify-between bg-primary1">
          <div className="space-y-2">
            <div className="h-2 w-full bg-lines/50 rounded animate-pulse" />
            <div className="h-2 w-3/4 bg-lines/50 rounded animate-pulse" />
          </div>
          <div className="flex gap-3">
            <div className="h-7 w-20 bg-lines/50 rounded-md animate-pulse" />
            <div className="h-7 w-20 bg-lines/50 rounded-md animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
