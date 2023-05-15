import CallAPI from "component/component/APICall";
import React, { useState, useEffect } from "react";
import AnimatedButton from "../Animated-btn";
import Image from "next/image";
//import Digital from "../../assets/images/Digitalicon.svg";
import Ux from 'component/assets/images/UXUI.svg'
import ProductDesign from 'component/assets/images/Development.svg'
import ContentStrategy from 'component/assets/images/Contenticon.svg'
import DesignConcept from 'component/assets/images/Dsignicon.svg'
import SocialMedia from '../../assets/images/Socialicon.svg'
import arrow from "../../assets/images/arrow.svg"

const Services = () => {
  const [arrayData, setArrayData] = useState([]);
  const [imageArray, setImageArray] = useState([
    {
      src: require("../../assets/images/Digitalicon.svg"),
      text: "We can work with you to create a comprehensive digital strategy that aligns with your business goals and maximizes ROI"
    },
    {
      src: require("../../assets/images/UXUI.svg"),
      text: "Our talented designers can create engaging user experiences and intuitive interfaces that bring your digital products to life."
    },
    {
      src: require("../../assets/images/Development.svg"),
      text: "Our experienced team of developers can help turn your product idea into a reality, from concept to launch."
    },
    {
      src: require("../../assets/images/Contenticon.svg"),
      text: "We specialize in creating effective content strategies that help you connect with your audience and grow your brand."
    },
    {
      src: require("../../assets/images/Dsignicon.svg"),
      text: "We offer professional and modern web design services that are tailored to your business needs, with a focus on user experience"
    },
    {
      src: require("../../assets/images/Socialicon.svg"),
      text: "Let us handle your social media presence, from strategy to execution, so you can focus on running your business"
    },
  ]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await CallAPI("service");
      const jsonResponse = await response.data;
      if (jsonResponse) {
        setArrayData(jsonResponse?.services);
        console.log("array = ", arrayData);
      } //services
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="container services pb-5 mt-5 font-family-primary">
        <h6 className="section-first-heading text-center pt-2 pb-2">
          Our Services
        </h6>
        <h2 className="section-sub-heading text-center text-capital pb-4">
          Revolutionize Your Digital Landscape With Our Expertise
        </h2>
        <p className="font-16 font-weight-400 text-dark-gray text-center pb-4">
          We offer a range of services to meet your business needs, including:
        </p>

        <div className="row spacing_page gy-5">
          {arrayData.map((val: any, index) => {
            if (val._id) {
              return (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="services-cards d-flex flex-column justify-content-between">
                    <div>
                      <Image src={imageArray[index].src} alt="service image" />
                      <h3 className="font-24 font-weight-700 text-dark-gray">
                        {val.servicename}
                      </h3>
                      <p className="font-16 font-weight-400 opacity-06">
                        {imageArray[index].text}
                      </p>
                    </div>
                    <a href={`services/${val._id}`} className="d-flex justify-content-end">
                      <Image src={arrow} alt="arrow" />
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="d-flex justify-content-center pt-4 pb-4">
          <AnimatedButton hrefto="services" light={true} text="Learn More" />
        </div>
      </section>
    </>
  );
};

export default Services;
