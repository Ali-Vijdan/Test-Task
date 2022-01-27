import React from "react";
import "./dashboard.css";

import { Row, Col } from "react-bootstrap";

// import components
import Card from "../../components/card/card.js";
import LeadActivity from "../../components/leadActivity/leadActivity.js";
import TagManager from "../../components/TagManager/tagManager.js";

// import images
import chart from "../../assets/images/chart.png";
import world from "../../assets/images/world map.png";
import pipelineChart from "../../assets/images/pipelineChart.png";



const Dashboard = () => {

    return (
        <>
            <div className="dashboard">
                <div className="container">
                    <Row>
                        <Col sm={6}>
                            <Row>
                                <Col sm={6}>
                                    <Card img={chart} />
                                </Col>
                                <Col sm={6}>
                                    <Card img={chart} />
                                </Col>
                                <Col sm={6}>
                                    <Card img={chart} />
                                </Col>
                                <Col sm={6}>
                                    <Card img={chart} />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={6}>
                            <div className="worldMap">
                                <div className="mapheader">
                                    <h6>Tags - Live Activity</h6>
                                </div>
                                <div className="map">
                                    <img src={world} alt="" />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col sm={4}>
                            <div className="leadActivity">
                                <h5>Lead Activity</h5>
                                <p className="subTopc">Lead Activities for all sources</p>
                                <LeadActivity />
                                <LeadActivity />
                                <LeadActivity />
                                <LeadActivity />
                                <LeadActivity />
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="leadActivity">
                                <h5>Tag Manager</h5>
                                <p className="subTopc">Tag activity in real time</p>
                                <TagManager />
                                <TagManager />
                                <TagManager />
                                <TagManager />
                                <TagManager />
                            </div>
                        </Col>
                    </Row>
                    <Row className="pipelines">
                        <Col sm={4}>
                            <div className="card">
                                <h5>Pipelines</h5>
                                <p className="subTopc">All Pipeline Data</p>
                                <img className="chartImg" src={pipelineChart} alt="" />
                            </div>
                        </Col>
                        <Col sm={4}>

                        </Col>
                        <Col sm={4}>

                        </Col>
                    </Row>

                </div>
            </div>
        </>
    )

}

export default Dashboard;