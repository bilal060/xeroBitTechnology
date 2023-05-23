/* eslint-disable @next/next/no-img-element */
import BlogArrow from "component/assets/images/blogArrow";
import CallAPI from "component/component/APICall";
import React, { useState, useEffect } from "react";
import Servicespage from "./[id]";
import Link from "next/link";

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
                    <p className="font-14 font-weight-400 mb-3" dangerouslySetInnerHTML={{ __html: (val.description) }}
                      style={{
                        textAlign: "justify",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "20px",
                      }}
                    >
                    </p>
                    <a href={`../portfolio/${val._id}`} className="mb-4 d-flex gap-6px text-black font-14 font-weight-700 text-center align-items-center"
                    >

                      <span className="pb-1">View Project</span>
                      <BlogArrow />

                    </a>
                  </div>
                  <div className="overview-image">
                    {val.projectImage && val.projectImage.includes(`src\\`) ? (
                      <img
                        src={`${process.env.API_URL || "http://localhost:3500"
                          }/${val.projectImage}`}
                        alt="protfloio Image"
                      />
                    ) : (
                      <img
                        src={`${val.projectImage}`}
                        alt="portfolio Image"
                      />
                    )}
                  </div>
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
