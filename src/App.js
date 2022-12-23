import { useState } from 'react';

const App = () => {

  const [state, setState] = useState({
    isShowTodoList: false,
  })

  return (
    <div className=' w-full h-screen relative'>
      {/* <div className='bg-black opacity-25 w-full h-full absolute z-30'></div> */}
      <div className='w-full h-full absolute z-20'>
        <div className='relative flex flex-col justify-between w-full h-full'>
          <div className=' border basis-1/12 '>1</div>
          <div className='border flex basis-10/12'>
            <div className='relative top-28 flex flex-col m-auto w-3/5 h-3/6 text-white justify-between '>
              <div className='flex flex-col'>
                <span className='text-[9.5rem] leading-none  font-medium text-center tracking-tight '>08:03</span>
                <span className=' text-5xl font-medium text-center tracking-tight'>Good morning, Faiz Ma'ruf.</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-3xl font-medium text-center'>What is your main focus today?</span>
                <div class="relative flex py-5 items-center">
                  <div class="flex-grow border-t border-b-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=' border basis-1/12'>3</div>
        </div>
      </div>
      <img
        src='https://i.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU'
        className='object-cover w-full h-full absolute z-10'
      />
    </div>
  );
}

export default App;
