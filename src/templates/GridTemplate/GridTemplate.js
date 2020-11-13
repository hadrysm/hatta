import styled from 'styled-components';

const GridTemplate = styled.section`
  margin: 1rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  overflow: hidden;
`;

export default GridTemplate;
