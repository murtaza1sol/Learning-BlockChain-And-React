import logo from '../../images/logo1.png';


const Footer = () => {
    return (
  <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
    <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
            <img src={logo} alt="logo"className='w-32'/>
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
            <p className='text-white text-base text-center cursor-pointer'>Education</p>
            <p className='text-white text-base text-center cursor-pointer'>Skills</p>
            <p className='text-white text-base text-center cursor-pointer'>Projects</p>
            
        </div>
    </div>
    <div className='flex justify-center items-center flex-col mt-5'>

        <p className='text-white text-sm text-center '>Contact me</p>
        <p className='text-white text-sm text-center '>murtazaaziznitsri@gmail.com</p>
    </div>
    <div className='sm:w-[90%] w-full h-[0.25px] bg-blue-300 mt-5'/>
    
    <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
    <p className='text-white text-xl text-center '>
    <a href="https://twitter.com/__murtaza__q" class="fa fa-twitter"></a>
    <a href="https://github.com/murtaza1sol" class="fa fa-github"></a>
        </p>
    <p className='text-white text-sm text-center '>All rights reserved</p>
    </div>
  </div>
    );
}
export default Footer;
