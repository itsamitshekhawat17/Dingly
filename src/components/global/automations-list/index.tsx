'use client'
import { usePaths } from '@/hooks/user-nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'

type Props = {}

const AutomationList = (props: Props) => {
    const { pathname } = usePaths()
  return (
    <div className='flex flex-col gap-y-3'>
        <Link 
        href={`${pathname}/23234223`}
          className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border radial--gradient--automations flex border-[#545454]">
            <div className='flex flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
              <div className='flex flex-col items-start'>
                  <h2 className='text-xl font-semibold'>
                      Automation Name
                  </h2>
                  <p className='text-[#9B9CA0] text-sm font-light mb-2'>
                    This is from comment
                  </p>

                  <div className="flex flex-col items-start gap-y-3 mt-3">
                    <div className={cn(
                        "rounded-full px-4 py-1 capitalize",
                        (0 + 1) % 1 == 0 &&
                          "bg-keyword-green/15 border-2 border-keyword-green",
                        (1 + 1) % 2 == 0 &&
                          "bg-keyword-purple/15 border-2 border-keyword-purple",
                        (2 + 1) % 3 == 0 &&
                          "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                        (3 + 1) % 4 == 0 &&
                          "bg-keyword-red/15 border-2 border-keyword-red"
                      )}
                    >
                      get started
                    </div>

                    <div className="rounded-full border-2 border-dashed border-white/60 px-3 py-1">
                      <p className="text-sm text-[#bfc0c3]">No Keywords</p>
                    </div>
                  </div>
              </div>

              <div className="flex flex-col gap-3 items-start sm:items-end sm:justify-between sm:self-stretch">
                <p className="capitalize text-sm font-light text-[#9B9CA0]">24 April 2026</p>
                <GradientButton
                  type="BUTTON"
                  className="bg-background-80 text-white hover:bg-background-80 px-5"
                >
                  Smart AI
                </GradientButton>
                <Button className="bg-background-80 hover:bg-background-80 text-white">Standard</Button>
              </div>
            </div>
        </Link>
    </div>
  
  )
}
export default AutomationList