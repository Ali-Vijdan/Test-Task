import React from "react";
import "./card.css";
import { Row, Col } from "react-bootstrap";



const Card = (props) => {

    return (
        <>
            <div className="card mb-4">
                <div className="d-flex align-items-center">
                    <h2 className="m-0">1200</h2>
                    <div className="bdg">
                        <p className="m-0">2.2%</p>
                    </div>
                </div>
                <p className="subHeading">Total Leads</p>
                <Row className="cardBody align-items-center">
                    <Col sm={4}>
                        <img src={props.img} alt="" />
                    </Col>
                    <Col sm={8}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="title d-flex justify-content-start align-items-center">
                                <div className="clr clr1"></div>
                                <h6>Normal</h6>
                            </div>
                            <div className="number">
                                <p>600</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="title d-flex justify-content-start align-items-center">
                                <div className="clr clr2"></div>
                                <h6>Hot</h6>
                            </div>
                            <div className="number">
                                <p>400</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="title d-flex justify-content-start align-items-center">
                                <div className="clr clr3"></div>
                                <h6>Stars</h6>
                            </div>
                            <div className="number">
                                <p>200</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )

}

export default Card;