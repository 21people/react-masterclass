import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? "tomato" : props.theme.cardColor};
  border-radius: 5px;
  padding: 10px 10px;
  margin: 5px;
  box-shadow: ${(props) =>
    props.isDragging ? "2px 0px 5px rgba(0,0,0,0.1)" : "none"};
`;
interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
function DraggableCard({ toDoId, toDoText, index }: IDraggableCardProps) {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
