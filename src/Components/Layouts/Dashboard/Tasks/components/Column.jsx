
import styled from "styled-components";
import Task from "./Task";
import "./scroll.css";
import { Droppable } from "react-beautiful-dnd";
import PropTypes from 'prop-types'


const Container = styled.div`
  background-color: #f4f5f7;
  border-radius: 12px;
  width: 480px;
  height: 80vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
  margin-right: 20px;
`;

const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`;

const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

export default function Column({ title, tasks, id }) {
  return (
    <Container className="column">
      <Title
        style={{
          backgroundColor: "black",
          color: "white",
          position: "sticky",
          top: "0",
          zIndex: "1",
          height: "55px",
          fontSize: "28px",
        }}
      >
        {title}
      </Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={index} index={index} task={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};
