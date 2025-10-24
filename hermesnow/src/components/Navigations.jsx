import styled from 'styled-components'
import BackButton from './BackButton'
import Title from './Title'
const NavigationsContainer = styled.div`
  width: 100%;
  background-color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  position: absolute;
  top: 0;

`

function Navigations({ titleName , font , color }) {
    return (
        <NavigationsContainer>
            <Title  titleName={titleName}  font={font} color={color}/> <BackButton />
        </NavigationsContainer>
    )
}

export default Navigations
