import { useState } from 'react'
import PropertyGrid from './components/PropertyGrid'
import PropertyModal from './components/PropertyModal';
import { properties } from "./data/properties";
import './App.css'
import useScrollLock from './hooks/useScrollLock';

function App() {
  const [selectedProp,setSelectedProp]=useState(null)
  const [isModelOpen,setisModelOpen]=useState(false)

  const onCardClick = (property) => {
    // console.log("Card clicked:", property);
  setSelectedProp(property);
  setisModelOpen(true);
};
//console.log("Modal open:", isModelOpen, "Selected property:", selectedProp);

useScrollLock(isModelOpen)


  return (
    <div className='pageWrapper'>
      <div className='pageCenter'>
        <PropertyGrid properties={properties} onCardClick={onCardClick}/>

{isModelOpen && selectedProp && (
        <PropertyModal
         key={selectedProp?.id} 
          property={selectedProp}
          isOpen={isModelOpen}
          onClose={() => setisModelOpen(false)}
        />)}
      </div>
    </div>
  )
}

export default App
