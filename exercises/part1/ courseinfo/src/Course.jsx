const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part.name} exercises={part.exercises} key={part.id} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <b>
      total of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
    </b>
  );
};
const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
