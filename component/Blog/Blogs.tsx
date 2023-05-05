/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import CallAPI from "../../component/APICall";
import BlogArrow from "component/assets/images/blogArrow";
import Link from "next/link";

const BlogContent = () => {
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await CallAPI("blog");
      const jsonResponse = await response.data;
      if (jsonResponse) {
        setArrayData(jsonResponse?.blogs);
      }
    };
    fetchData();
  }, []);

  const shortenDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 35) {
      return words.slice(0, 35).join(" ") + "...";
    } else {
      return description;
    }
  };

  return (
    <>
      <section className="blogContents mt-2 pt-4 pb-5">
        <div className="container">
          <h3 className="font-weight-700 font-24 mb-32px">Recent Blogs</h3>
          <div className="row blog-cards">
            {arrayData.map((val, index) => {
              if (val._id) {
                return (
                  <div
                    key={index}
                    className="col-md-6 col-lg-4 mb-5 blog-inner text-black"
                  >
                    {/* <Image src={data.image} alt="blog1" className='blogimg w-100 mt-2  mb-3 mx-auto d-block' /> */}
                    {val.blogImage && val.blogImage.includes(`src\\`) ? (
                      <img
                        src={`${process.env.API_URL || "http://localhost:3500"
                          }/${val.blogImage}`}
                        alt="Blog Image"
                        className="blogimg w-100 mt-2  mb-3 mx-auto d-block"
                      />
                    ) : (
                      <img
                        src={`${val.blogImage}`}
                        alt="Blog Image"
                        className="blogimg w-100 mt-2  mb-3 mx-auto d-block"
                      />
                    )}
                    <h4 className="pb-lg-4 pb-3 m-0 font-24 font-weight-700 text-capital text_center_justification">
                      {val.blogTitle}
                    </h4>
                    <p
                      className="text_center_justification font-16 font-weight-400 mb-3"
                      dangerouslySetInnerHTML={{ __html: shortenDescription(val.description) }}
                      style={{
                        textAlign: "justify",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "20px",
                      }}
                    ></p>
                    <Link
                      href={`blog/${val._id}`}
                      className=" d-flex gap-11px text-black font-16 font-weight-700 text-center align-items-center  justify-content-center justify-content-md-start"
                    >
                      <span className="pb-1">Read Blog</span>
                      <BlogArrow />
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContent;
