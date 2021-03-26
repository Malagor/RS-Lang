import styled from 'styled-components/macro';

export const NavContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */

  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    flex-direction: column;
  }
`;

export const Flex = styled.div`
  display: flex;

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    justify-content: center;
  }
`;
