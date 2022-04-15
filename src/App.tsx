import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238)); ;
`;
const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
`;
const InnerBox = styled(motion.div)`
  width: 100%;
  background-color: white;
`;
function App() {
  const { scrollY, scrollYProgress } = useViewportScroll();
  // useEffect(() => {
  //   scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()));
  // }, [scrollY]);
  const scale = useTransform(scrollY, [0, 800], [0, 2]);
  const height = useTransform(scrollY, [0, 800], ["0", "100%"]);
  // const x = useMotionValue(0); //값이 바뀔때마다 render되지 않음. ReactJS에 존재하지 않는 값임. 따라서 useEffect를 이용해서 변하는 x값들을 받아야함.
  // const rotateZ = useTransform(x, [-250, 250], [-360, 360]);
  // const background = useTransform(
  //   x,
  //   [-250, 250],
  //   [
  //     "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
  //     "linear-gradient(135deg, rgb(0, 87, 238), rgb(0, 214, 238))",
  //   ]
  // );
  return (
    <Wrapper>
      <Box style={{ scale }}>
        <InnerBox style={{ height }} />
      </Box>
    </Wrapper>
  );
}

export default App;
