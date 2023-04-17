import React from 'react'
import Image from 'next/image'
import reacticon from "../../assets/images/react.svg"
import angularicon from "../../assets/images/angular.svg"
import css3icon from "../../assets/images/css3.svg"
import ionicicon from "../../assets/images/ionic.svg"
import vuejsicon from "../../assets/images/vuejs.svg"
import html5icon from "../../assets/images/html5.svg"
import reduxicon from "../../assets/images/redux.svg"
import nodejsicon from "../../assets/images/nodejs.svg"
import loopbackicon from "../../assets/images/loopback.svg"
import nextjsicon from "../../assets/images/nextjs.svg"
import expressjsicon from "../../assets/images/expressjs.svg"
import pythonicon from "../../assets/images/python.svg"
import mysqlicon from "../../assets/images/mysql.svg"
import dynamoDBicon from "../../assets/images/daynomodb.svg"
import postrgeicon from "../../assets/images/RGE.svg"
import elasticsearchicon from "../../assets/images/Elasticsearch.svg"
import mongodbicon from "../../assets/images/mongodb.svg"
import amazonRDSicon from "../../assets/images/amazonerds.svg"
import redisicon from "../../assets/images/redis.svg"
import seleniumicon from "../../assets/images/Selenium.svg"
import cucumbericon from "../../assets/images/Cucumber.svg"
import cypressicon from "../../assets/images/Cypress.svg"
import jMetericon from "../../assets/images/JMeter.svg"
import postmanicon from "../../assets/images/Postman.svg"
import SOAPUIicon from "../../assets/images/SOAPUI.svg"

const Technologie = () => {
    return (
        <>
            <section className='technologie pt-5'>
                <div className='container'>
                    <h6 className='section-first-heading font-weight-500 font-18-17 text-center pt-2 pb-2'>How We Built</h6>
                    <h2 className='section-sub-heading font-weight-700 font-36-46 text-center text-capital pb-4'>Choosing battle-tested technologies for <br /> optimal solutions</h2>
                    <p className='font-16 font-weight-400 text-dark-gray text-center pt-3 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                    <div className='row'>
                        <div className='col-md-12 col-lg-6 col-sm-12 mt-3 mb-3'>
                            <div className='technologies-icons rounded-12 bg-white h-100'>
                                <h5 className='p-3'>Front End</h5>
                                <div className='row'>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={reacticon} alt="reacticon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>React</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={angularicon} alt="angularicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Angular</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={css3icon} alt="css3icon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>CSS3</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={ionicicon} alt="ionicicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Ionic</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={vuejsicon} alt="vuejsicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Vue.JS</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={html5icon} alt="html5icon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>HTML5</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={reduxicon} alt="reduxicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Redux</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-6 col-sm-12 mt-3 mb-3'>
                            <div className='technologies-icons rounded-12 bg-white h-100'>
                                <h5 className='p-3'>Back End</h5>
                                <div className='row'>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={nodejsicon} alt="nodejsicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Node.JS</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={loopbackicon} alt="loopbackicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Loopback</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={nextjsicon} alt="nextjsicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Nest.JS</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={expressjsicon} alt="expressicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Express.JS</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={pythonicon} alt="pythonicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Python</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-6 col-sm-12 mt-3 mb-3'>
                            <div className='technologies-icons rounded-12 bg-white h-100'>
                                <h5 className='p-3'>Database</h5>
                                <div className='row'>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={mysqlicon} alt="mysqlicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>MySQL</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={dynamoDBicon} alt="dynamoDBicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>DynamoDB</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={postrgeicon} alt="postrgeicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>PostGRE</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={elasticsearchicon} alt="elasticicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Elasticsearch</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={mongodbicon} alt="mongodbicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>MongoDB</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={amazonRDSicon} alt="amazoneicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>AmazonRDS</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={redisicon} alt="redisicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray'>Redis</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-6 col-sm-12 mt-3 mb-3'>
                            <div className='technologies-icons rounded-12 bg-white h-100'>
                                <h5 className='p-3'>SQA</h5>
                                <div className='row'>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={seleniumicon} alt="seleinuimicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray '>Selenium</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={cucumbericon} alt="cucumbericon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray '>Cucumber</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={cypressicon} alt="cyperssicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray '>Cypress</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={jMetericon} alt="jMetericon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray '>JMeter</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={postmanicon} alt="postmanicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray '>Postman</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-6'>
                                        <div className='d-flex flex-sm-row flex-column gap-16px p-3'>
                                            <Image src={SOAPUIicon} alt="SOAPUicon" />
                                            <h6 className='d-flex align-items-center font-weight-700 font-18 text-dark-gray '>SOAPUI</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Technologie
