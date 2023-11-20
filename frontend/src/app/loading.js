export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
  <main className="w-full h-screen bg-white flex justify-center items-center gap-2">
    <div className="h-5 w-5 border-2 border-x-gray-600 border-t-gray-600 rounded-full animate-spin"></div>
    <p>Loadding ...</p>
  </main>
    )
}