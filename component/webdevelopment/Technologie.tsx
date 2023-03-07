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
                    <h5 className='pt-2 pb-3 main-heading'>How We Built</h5>
                    <h2 className='pt-2 pb-2'>Choosing battle-tested technologies for <br /> optimal solutions</h2>
                    <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.</p>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-sm-12 mt-3 mb-3'>
                            <div className='technologies-icons rounded-4'>
                                <h5 className='p-3'>Front End</h5>
                                <div className='row'>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={reacticon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>React</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={angularicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Angular</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={css3icon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>CSS3</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={ionicicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Ionic</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={vuejsicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Vue.JS</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={html5icon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>HTML5</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={reduxicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Redux</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 mt-3 mb-3'>
                            <div className='technologies-icons rounded-4 h-100'>
                                <h5 className='p-3'>Back End</h5>
                                <div className='row'>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={nodejsicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Node.JS</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={loopbackicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Loopback</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={nextjsicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Nest.JS</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={expressjsicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Express.JS</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={pythonicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Python</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 mt-3 mb-3'>
                            <div className='technologies-icons rounded-4'>
                                <h5 className='p-3'>Database</h5>
                                <div className='row'>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={mysqlicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>MySQL</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={dynamoDBicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>DynamoDB</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={postrgeicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>PostGRE</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={elasticsearchicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Elasticsearch</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={mongodbicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>MongoDB</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={amazonRDSicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>AmazonRDS</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={redisicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Redis</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-sm-12 mt-3 mb-3'>
                            <div className='technologies-icons rounded-4 h-100'>
                                <h5 className='p-3'>SQA</h5>
                                <div className='row'>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={seleniumicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Selenium</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={cucumbericon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Cucumber</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={cypressicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Cypress</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={jMetericon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>JMeter</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={postmanicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>Postman</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-lg-6 col-sm-6 col-xs-6'>
                                        <div className='d-flex flex-row p-3'>
                                            <Image src={SOAPUIicon} alt="img" />
                                            <h6 className='d-flex align-items-center px-3'>SOAPUI</h6>
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
