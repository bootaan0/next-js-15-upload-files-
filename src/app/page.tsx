import { Dropzone } from "@/components/ui/Dropzone";




export default function Home() {
  return (
    <div className="max-w-xl mx-auto min-h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">upload
      <span className="text-primary">Bootaan</span>
      </h1>
      <Dropzone />
    </div>
  )
}
