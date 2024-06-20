import redesign from '../../assets/selected-clients/redesignlogo.png';
import ace from '../../assets/selected-clients/acehotellogo.png';
import wnw from '../../assets/selected-clients/wnwlogo.png';
import thinkingbox from '../../assets/selected-clients/thinkingbox.png';
import Button from '../blocks/buttons/button';

const SelectedClients = () => {
  return (
    <div className='px-20 py-12 flex flex-col items-center justify-start'>
      <div className='w-52 mb-[120px]'>
        <Button url="/work" text="View all work" hoverTextColor="text-nightblue" fontSize='text-2xl' bgColor="bg-offwhite" />
      </div>
      <p className='text-2xl mb-[100px] self-start'>Selected Clients</p>
      <div className='flex items-center gap-24 max-w-[1100px]'>
        <img className='w-32' src={wnw} alt="Working Not Working" />
        <img className='w-40' src={ace} alt="Ace Hotel" />
        <img className='w-44' src={redesign} alt="Redesign Health" />
        <img className='w-56' src={thinkingbox} alt="Thinkingbox" />
      </div>
    </div>
  );
};

export default SelectedClients;