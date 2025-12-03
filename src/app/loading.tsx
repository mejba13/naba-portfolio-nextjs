export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-neutral-200" />
          <div className="absolute inset-0 rounded-full border-4 border-neutral-900 border-t-transparent animate-spin" />
        </div>
        <p className="text-sm text-neutral-500 font-medium">Loading...</p>
      </div>
    </div>
  )
}
