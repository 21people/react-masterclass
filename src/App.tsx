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
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;
const Box = styled(motion.div)`
  top: 180px;
  position: absolute;
  width: 200px;
  height: 150px;
  background-color: white;
  margin-bottom: 30px;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  margin: 20px;
`;
const boxVars = {
  entry: (back: boolean) => ({ x: back ? 500 : -500, opacity: 0, scale: 1 }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 1,
    transition: { duration: 0.3 },
  }),
};
function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const former = () => {
    setVisible((prev) => (prev !== 1 ? --prev : 1));
    setBack(false);
  };
  const latter = () => {
    setVisible((prev) => (prev !== 10 ? ++prev : 10));
    setBack(true);
  };
  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter custom={back}>
        <Box
          custom={back}
          key={visible}
          variants={boxVars}
          initial="entry"
          animate="center"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={former}>Former</button>
      <button onClick={latter}>Latter</button>
    </Wrapper>
  );
}

export default App;
