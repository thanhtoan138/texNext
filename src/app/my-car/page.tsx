'use client'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Row, Col } from 'react-bootstrap';
import Fade from 'react-bootstrap/Fade';
const MyCar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="container">
            <Row>
                <Col lg={5}>
                    <Row>
                        <Col md={5}>
                            <Collapse in={open} dimension="width">
                                <div id="example-collapse-text">
                                    <ListGroup style={{ width: '200px' }}>
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Collapse>

                        </Col>
                        <Col md={7}>
                            {/* <Fade in={open}>
                                <div id="example-fade-text">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Fade> */}
                        </Col>
                    </Row>

                </Col>
                <Col lg={7}>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        click
                    </Button></Col>
            </Row>



        </div>
    )
}
export default MyCar