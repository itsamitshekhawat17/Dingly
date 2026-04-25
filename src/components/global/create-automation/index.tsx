import { Button } from '@/components/ui/button'
import Loader from '../Loader'
import { AutomationDuoToneWhite } from '@/icons'

const CreateAutomation = () => {
  return (
    <Button className="px-6 lg:px-10 py-6 bg-linear-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]">
        <Loader state = {false}>
            <AutomationDuoToneWhite/>
            <p className='lg:inline hidden'>Create Automation</p>
        </Loader>
      
    </Button>
  )
}
export default CreateAutomation