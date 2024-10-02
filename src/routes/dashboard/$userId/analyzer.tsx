import ImageDropZone from '@/components/elements/ImageDropZone'
import ReportAnalyzer from '@/components/elements/ReportAnalyzer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$userId/analyzer')({
  component: Analyzer ,
})

function Analyzer(){
  return(
    <div className='w-full space-y-3 flex space-x-4 justify-center h-full'>
      <ImageDropZone />
      <ReportAnalyzer />
    </div>
  )
}