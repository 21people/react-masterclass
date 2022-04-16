import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238)); ;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 150px;
  background-color: white;
  margin-bottom: 30px;
  border-radius: 15%;
`;
const boxVars = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, rotateZ: 360 },
  exit: { opacity: 0, scale: 0, y: 50 },
};
function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {showing ? <Box variants={boxVars} {...boxVars} /> : null}
      </AnimatePresence>
      <button onClick={toggleShowing}>Click Me</button>
    </Wrapper>
  );
}

export default App;
