import Navbar from './components/navbar';
import './App.css';
import {Hero,Analytics, Newsletter, Cards, Footer} from './components/Hero';


function App() {
  return (
    <div className="mt-4 p-3">
      <div className='mt-4'>
      <Navbar />
      </div>
      
      <div className='flex-col mx-5 flex '>
        
        <Hero/>
        <div className='mt-[-120px]'>
          <Newsletter />
        </div>
      </div>
     
    
      <Footer/>
    </div>
  );
}

export default App;
