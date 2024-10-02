import LandingLayout from '@/layouts/LandingLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage
})

function HomePage(){
  return(
    <LandingLayout>
      <div className='w-full h-full flex items-center'>
        <img src='/skinvision.jpeg' alt='skin-vision image'  className='sm:aspect-auto object-cover w-full h-full'/>     
      </div>
    </LandingLayout>
  )
}