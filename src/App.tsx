import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
const BiggerBox = styled.div`
  width: 170px;
  height: 170px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 25%;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 15%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const boxVars = {
  // hover: { rotateZ: 90, scale: 1.2, transition: { type: "spring" } },
  // tap: { scale: 0.8, borderRadius: "50%" },
  drag: { backgroundColor: "rgb(46,204,113)", transition: { duration: 10 } },
};
function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVars}
          whileHover="hover"
          whileTap="tap"
          whileDrag="drag"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
