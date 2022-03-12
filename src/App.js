import Pages from "./pages/Pages";
import Category from "./componets/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./componets/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}>Garba</Logo>
      </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Montsera', cursive;

`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
