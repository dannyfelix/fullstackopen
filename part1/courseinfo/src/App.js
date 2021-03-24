import React from 'react'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part.name}: {props.part.exercises} exercises.</p>
}

const Content = (props) => {
  const parts = props.content;

  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  )
}

const Total = (props) => {
  const parts = props.total;

  return (
    <p>
      Total number of exercises: &nbsp;
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total total={course.parts} />
    </>
  )
}

export default App