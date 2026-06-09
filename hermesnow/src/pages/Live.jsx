import { useState ,  useEffect} from 'react';
import styled from 'styled-components';
import Loader from '../components/Loader';

const LiveNewsBox = styled.iframe`
  width:100%;
  height: 500px; 
  text-align: center;
  border: none;
  overflow: scroll;
  @media (max-width: 1024px) {
    min-height: calc(100vh - 80px);
  }
`;

export default function Live() {
  const [isLoading , setIsLoading] = useState(true)
  useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);  
  }, 4000);
  
  return () => clearTimeout(timer);
}, []);
  return (
      <>
       {isLoading ? <Loader />  :
           <LiveNewsBox
      src='https://sepehrtv.ir/live/irinn'
      title="IRINN Live"
      allowFullScreen
      onLoad={() => setIsLoading(false)}
      
    /> 
     }
      </>
  );
}
