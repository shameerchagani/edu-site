import React from "react";
import { v4 } from "uuid";
const AllCourses = () => {
  const newCourses = [
    {
      name: "JavaScript",
      id: 1,
      icon: "fa-brands fa-js-square",
      desc: [
        "Intro to programming",
        "Functions",
        "Drawing Basics",
        "Logic and if statements",
        "coloring",
        "Debugging Programs",
        "Variables",
        "Looping",
        "Animation Basics",
        "writing Clean Code",
        "Interactive Programs",
        "Arrays",
        "Objects",
        "Text and Strings",
        "Becoming a better Programmer",
      ],
    },
    {
      name: "Intro to HTML/CSS: Making webpages",
      id: 2,
      icon: "fa-brands fa-html5",
      desc: [
        "Intro to HTML",
        "Web Development tools",
        "Intro to CSS",
        "CSS Layout",
        "More HTML tags",
        "More CSS selectors",
        "CSS text properties",
        "Other Ways to embed CSS",
        "Further Learning",
      ],
    },
    {
      name: "Intro to SQL: Querying and managing data",
      id: 3,
      icon: "fa-solid fa-database",
      desc: [
        "SQL Basics",
        "Modifying databases with SQL",
        "More advanced SQL Queries",
        "Relational queries in SQL",
        "Further Learning",
      ],
    },
    {
      name: "Intro to React",
      id: 4,
      icon: "fa-brands fa-react",
      desc: [
        "Intro to ReactJs",
        "What is a component",
        "What is a state",
        "What is a props",
        "What is a propTypes",
        "What is a lifecycle method",
        "What is a componentDidMount",
        "What is a componentDidUpdate",
        "What is a componentWillUnmount",
        "Further Learning",
        "Styles",
        "Routes",
      ],
    },
    {
      name: "Intro to NodeJS",
      id: 5,
      icon: "fa-brands fa-node",
      desc: [
        "Intro to NodeJS",
        "What is a module",
        "What is a package",
        "What is a package.json",
        "What is a npm",
        "What is a npm install",
        "What is a npm run",
        "What is a npm start",
        "Further Learning",
      ],
    },
    {
      name: "Intro to ExpressJS",
      id: 6,
      icon: "fa-brands fa-node-js",
      desc: [
        "Intro to ExpressJS",
        "What is a middleware",
        "What is a middleware function",
        "What is a middleware function",
        "What is a middleware function",
        "What is a middleware function",
        "Further Learning",
      ],
    },
    {
      name: "Intro to MongoDB",
      id: 7,
      icon: "fa-solid fa-server",
      desc: [
        "Intro to MongoDB",
        "What is a database",
        "What is a collection",
        "What is a document",
        "What is a database",
        "Further Learning",
      ],
    },
    {
      name: "Intro to Bootstrap",
      id: 8,
      icon: "fa-brands fa-bootstrap",
      desc: [
        "Intro to bootstrap",
        "What is a bootstrap",
        "How to style with Bootstrap",
        "How to create Responsive Webpages",
        "Styles & Classes",
        "Further Learning",
      ],
    },
  ];

  return (
    <>
      {newCourses.map((newCourse) => (
        <div className="card" key={newCourse.id}>
          <div className="card-head">
            <div className="icon">
              <i className={newCourse.icon} />
            </div>

            <div className="course-name">{newCourse.name}</div>
          </div>
          <div className="card-body">
            <ul>
              {newCourse.desc.map((des) => (
                <li key={v4()}>{des}</li>
              ))}
            </ul>
            <div className="enroll-btn">
              <button
                className="btn btn-primary"
                onClick={() => alert("You Enrolled Successfully")}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllCourses;
