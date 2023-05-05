import BlogArrow from "component/assets/images/blogArrow";
import CallAPI from "component/component/APICall";
import React, { useState, useEffect } from "react";
// const feedBack = [
//     {
//         id: 1,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />
//     },
//     {
//         id: 2,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />
//     },
//     {
//         id: 3,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />
//     },
//     {
//         id: 4,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />

//     },
//     {
//         id: 5,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />
//     },
//     {
//         id: 6,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />
//     },
//     {
//         id: 4,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />

//     },
//     {
//         id: 5,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />
//     },
//     {
//         id: 6,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />
//     },
//     {
//         id: 4,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />

//     },
//     {
//         id: 5,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />
//     },
//     {
//         id: 6,
//         comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.',
//         name: 'Project Name',
//         projectOverview: <WebSlider />
//     },
// ]
const PortofolioContent = () => {
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await CallAPI("project");
      console.log(response);
      const res = response.json;
      const jsonResponse = await response.data;
      if (jsonResponse) {
        setArrayData(jsonResponse?.projects);
        console.log("array = ", arrayData);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="portofolio-content">
      <div className="row m-0">
        {arrayData.map((val: any, index) => {
          if (val._id) {
            return (
              <div
                key={index}
                className="col-md-6 portofolio-card p-0 card-main"
              >
                <div className="container p-0 w-75">
                  <div className="p-32px pb-0">
                    <h4 className="font-18 font-weight-700 mb-3">
                      {val.projectTitle}
                    </h4>
                    <p className="font-14 font-weight-400 mb-3">
                      {val.description}
                    </p>
                    <a
                      href=""
                      className="mb-4 d-flex gap-6px text-black font-14 font-weight-700 text-center align-items-center"
                    >
                      <span className="pb-1">View Project</span>
                      <BlogArrow />
                    </a>
                  </div>
                  <div className="overview-image">{val.projectImage}</div>
                </div>
              </div>
            );
          }
        })}
        
      </div>
    </div>
  );
};

export default PortofolioContent;
