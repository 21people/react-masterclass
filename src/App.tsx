import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const boxVars = {
  hover: { rotateZ: 90, scale: 1.2, transition: { type: "spring" } },
  tap: { scale: 0.8, borderRadius: "50%" },
};
function App() {
  return (
    <Wrapper>
      <Box variants={boxVars} whileHover="hover" whileTap="tap" />
    </Wrapper>
  );
}

export default App;
