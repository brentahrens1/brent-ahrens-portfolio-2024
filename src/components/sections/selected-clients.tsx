import redesign from '../../assets/selected-clients/redesignlogo.png';
import ace from '../../assets/selected-clients/acehotellogo.png';
import wnw from '../../assets/selected-clients/wnwlogo.png';
import thinkingbox from '../../assets/selected-clients/thinkingbox.png';
import Button from '../blocks/buttons/button';

const SelectedClients = () => {
  return (
    <div className='section-h-padding py-12 flex flex-col items-center justify-start'>
      <div className='w-52 mb-[120px]'>
        <Button url="/work" text="View all work" styles='text-nightblue bg-offwhite' />
      </div>
      <p className='text-2xl mb-[100px] self-start'>Selected Clients</p>
      <div className='grid grid-cols-2 md:flex items-center gap-3 sm:gap-24 max-w-[1100px]'>
        <img className='m-auto w-[60%] sm:w-[50%] md:w-20 lg:w-32' src={wnw} alt="Working Not Working" />
        <img className='m-auto w-[65%] sm:w-[60%] md:w-24 lg:w-40' src={ace} alt="Ace Hotel" />
        <img className='m-auto w-[75%] sm:w-[65%] md:w-28 lg:w-44' src={redesign} alt="Redesign Health" />
        <img className='m-auto w-full sm:w-[80%] md:w-32 lg:w-56' src={thinkingbox} alt="Thinkingbox" />
      </div>
    </div>
  );
};

export default SelectedClients;