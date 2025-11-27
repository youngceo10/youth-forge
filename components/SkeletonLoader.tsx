'use client'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-yf-blue-50/50 rounded ${className}`}
      aria-hidden="true"
    />
  )
}

export function BlogSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white rounded-xl border-2 border-yf-blue-50 overflow-hidden">
          <Skeleton className="h-48 w-full rounded-none" />
          <div className="p-6 space-y-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="pt-4 flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function MapSkeleton() {
  return (
    <div className="w-full h-[600px] bg-yf-blue-50/30 rounded-2xl animate-pulse flex items-center justify-center border-2 border-yf-blue-50">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 mx-auto bg-yf-blue-100/50 rounded-full animate-pulse" />
        <p className="text-yf-blue-200/70 text-sm font-medium">Loading map...</p>
      </div>
    </div>
  )
}
