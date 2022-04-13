import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    if (source.droppableId === destination?.droppableId) {
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return { ...oldToDos, [source.droppableId]: boardCopy };
      });
    } else {
      setToDos((oldToDos) => {
        const sourceBoardCopy = [...oldToDos[source.droppableId]];
        const taskObj = sourceBoardCopy[source.index];
        const DestiBoardCopy = [...oldToDos[destination?.droppableId]];
        sourceBoardCopy.splice(source.index, 1);
        DestiBoardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoardCopy,
          [destination?.droppableId]: DestiBoardCopy,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
