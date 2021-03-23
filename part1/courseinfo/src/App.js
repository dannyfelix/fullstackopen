import React from 'react'

const Header = (props) => {
  console.log("HEADER")
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log("CONTENT")
  console.log(props)
  return (
    <>
      <Part parts={props.name} exercises={props.exercises}/>
      <Part parts={props.name} exercises={props.exercises}/>
      <Part parts={props.name} exercises={props.exercises}/>
    </>
  )
}

const Part = (props) => {
  console.log("PART")
  console.log(props)
  return <p>{props.part}: {props.exercises} exercises.</p>
}

const Total = (props) => {
  console.log("TOTAL")
  console.log(props)
  return <p>Total number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
  }

  return (
    <>
      <Header course={course.name} />
      <Content name={course.parts} exercises={course.parts.exercises}/>
      <Total parts={course.parts} />
    </>
  )
}

export default App