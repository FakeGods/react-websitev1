import React from "react";
import "./Employees.css";
import EmployeeList from "./EmployeesList";

const RadekImage = require("./Radek.png");
const SlawekImage = require("./Slawek.png");

function Employees() {
  const employeeData = [
    {
      name: "Imię Nazwisko",
      department: "Dział 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repellat perspiciatis perferendis? Aut modi nostrum architecto accusantium quo, perspiciatis, voluptatem, impedit sint soluta rem possimus suscipit minima illo fuga eius! Ut soluta necessitatibus cumque. Iste cumque provident, ut necessitatibus voluptates",
      image: RadekImage,
    },
    {
      name: "Imię Nazwisko",
      department: "Dział 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repellat perspiciatis perferendis? Aut modi nostrum architecto accusantium quo, perspiciatis, voluptatem, impedit sint soluta rem possimus suscipit minima illo fuga eius! Ut soluta necessitatibus cumque. Iste cumque provident, ut necessitatibus voluptates",
      image: SlawekImage,
    },
  ];

  return (
    <section id="about-us" className="about-us">
      <div className="wrapper about">
        <div className="wrap">
          {employeeData.map((employee, index) => (
            <EmployeeList
              key={index}
              name={employee.name}
              department={employee.department}
              description={employee.description}
              image={employee.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Employees;
