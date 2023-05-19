import Explorer from "@/components/explorer";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className='flex w-screen h-screen'>
      <div className="flex-grow h-screen bg-neutral-300"></div>
      <Explorer />
      <Sidebar />
    </main>
  )
}
