import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'
export default function ActivityTimeline() {
  return (
    <div className="w-full h-max">
        <VerticalTimeline>
            <VerticalTimelineElement 
                className='vertical-timeline-element--work'
                date='30/09/2024 - present'
                contentStyle={{background: 'none', border: 'none'}}
                contentArrowStyle={{fontSize: '12px'}}
                iconStyle={{fontSize: '5px'}}
            >
                <Card className='w-full rounded-lg'>
                    <CardContent>
                        <div className='flex flex-col space-y-3'>
                              <div className='space-y-4'>

                                  <span className='flex space-x-4'>
                                      <p className='text-xl font-bold text-foreground'>Patient name:</p>
                                      <p className='text-lg font-medium'>James</p>
                                  </span>
                                  <span className='flex space-x-4'>
                                      <p className='text-xl font-bold text-foreground'>Date:</p>
                                      <p className='text-lg font-medium'>September 30, 2024</p>
                                  </span>
                                  <span className='flex space-x-4'>
                                      <p className='text-xl font-bold text-foreground'>Image Analysis ID:</p>
                                      <p className='text-lg font-medium'>#AID-83533</p>
                                  </span>
                                  <span className='flex space-x-4'>
                                      <p className='text-xl font-bold text-foreground'>Detected Condition:</p>
                                      <p className='text-lg font-medium'>Melanoma</p>
                                  </span>
                                  <span className='flex space-x-4'>
                                      <p className='text-xl font-bold text-foreground'>Diagnosis Confidence Level</p>
                                      <p className='text-lg font-medium'>87%</p>
                                  </span>
                              </div>
                              <Button variant={"outline"}>
                                Learn more
                                <MoveRight className='ml-3'/>
                              </Button>
                          </div>
                    </CardContent>
                </Card>
            </VerticalTimelineElement>
              <VerticalTimelineElement
                  className='vertical-timeline-element--work'
                  date='30/09/2024 - present'
                  contentStyle={{ background: 'none', border: 'none' }}
                  contentArrowStyle={{ fontSize: '12px' }}
                  iconStyle={{ fontSize: '5px' }}
              >
                  <Card className='w-full rounded-lg'>
                      <CardContent>
                          <div className='flex flex-col space-y-3'>
                              <div className='space-y-4'>

                                  <span className='flex space-x-4'>
                                      <p className='text-xl font-bold text-foreground'>Patient name:</p>
                                      <p className='text-lg font-medium'>James</p>
                                  </span>
                                  <span className='flex space-x-4'>
                                      <p className='text-xl font-bold text-foreground'>Date:</p>
                                      <p className='text-lg font-medium'>September 30, 2024</p>
                                  </span>
                                  <span className='flex space-x-4'>
                                      <p className='text-xl font-bold text-foreground'>Image Analysis ID:</p>
                                      <p className='text-lg font-medium'>#AID-83533</p>
                                  </span>
                                  <span className='flex space-x-4'>
                                      <p className='text-xl font-bold text-foreground'>Detected Condition:</p>
                                      <p className='text-lg font-medium'>Melanoma</p>
                                  </span>
                                  <span className='flex space-x-4'>
                                      <p className='text-xl font-bold text-foreground'>Diagnosis Confidence Level</p>
                                      <p className='text-lg font-medium'>87%</p>
                                  </span>
                              </div>
                              <Button variant={"outline"}>
                                  Learn more
                                  <MoveRight className='ml-3' />
                              </Button>
                          </div>
                      </CardContent>
                  </Card>
              </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}
