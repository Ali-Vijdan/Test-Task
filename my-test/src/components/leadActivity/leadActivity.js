import React from "react";
import "./leadActivity.css";
import { Row, Col } from "react-bootstrap";
import Star from "../../assets/images/star.png"

const LeadActivity = () => {

    return (
        <>
            <Row className="activity">
                <Col sm={2}>
                    <p className="m-0"><strong>08:42</strong></p>
                    <p><strong>Hook</strong></p>
                </Col>
                <Col sm={1} className="steps">
                    <div className="circle"></div>
                    <div className="line"></div>
                </Col>
                <Col sm={6}>
                    <p className="m-0">Haider Hassan</p>
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                </Col>
                <Col sm={3}>
                    <button>Tag 2</button>
                </Col>
            </Row>
        </>
    )

}

export default LeadActivity;