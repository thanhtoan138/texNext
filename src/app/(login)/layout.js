
import CategoryLogin from "../sidebar/category-infor/page";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function LoginLayout({ children }) {
    return (
        <div style={{ backgroundColor: '#f6f6f6', }}>
            <Container style={{ paddingTop: '70px' }}>
                <Row>
                    <Col lg={4}>
                        <CategoryLogin />
                    </Col>
                    <Col lg={8}>
                        <main>{children}</main>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}
