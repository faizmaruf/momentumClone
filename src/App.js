import { useState } from 'react';
import Footer from './Footer';




const App = () => {

  const [state, setState] = useState({
    isShowTodoList: false,
  })

  return (
    <div className=' w-full h-screen relative'>
      {/* <div className='bg-black opacity-25 w-full h-full absolute z-30'></div> */}
      <div className='w-full h-full absolute z-20'>
        <div className='relative flex flex-col justify-between w-full h-full'>
          <div className='basis-1/12 '>1</div>
          <div className='flex basis-10/12 relative'>
            <div className='flex flex-col justify-between w-full h-2/3 m-auto absolute bottom-0 '>
              <div className='h-full w-full bg-black '></div>
              <div className='h-full w-full bg-slate-500 '></div>
            </div>
          </div>
          <Footer />
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
