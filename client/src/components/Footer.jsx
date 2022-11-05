import logo from '../../images/logo1.png';


const Footer = () => {
    return (
  <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
    <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
            <img src={logo} alt="logo"className='w-32'/>
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
            <p className='text-white text-base text-center cursor-pointer'>Market</p>
            <p className='text-white text-base text-center cursor-pointer'>Changes</p>
            <p className='text-white text-base text-center cursor-pointer'>Tutorials</p>
            <p className='text-white text-base text-center cursor-pointer'>Wallet</p>
        </div>
    </div>
    <div className='flex justify-center items-center flex-col mt-5'>

        <p className='text-white text-sm text-center '>Contact me</p>
        <p className='text-white text-sm text-center '>murtazaaziznitsri@gmail.com</p>
    </div>
    <div className='sm:w-[90%] w-full h-[0.2525px] bg-blue-300 mt-5'/>
    
    <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
    <p className='text-white text-sm text-center '>
        Follow me on twitter
        </p>
    <p className='text-white text-sm text-center '>All rights reserved</p>
    </div>
  </div>
    );
}
export default Footer;