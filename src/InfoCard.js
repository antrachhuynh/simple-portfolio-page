
import {

    Text,
    Container,
    Card,
    Button,
    User,
    Link,

} from "@nextui-org/react";
import Trach from './trach.jpg';

import { Col, Row } from "@nextui-org/react";

export default function InfoCard() {

    return (
        <Container xs>
            <Card hoverable cover css={{ w: "100%" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text transform="uppercase" size={12} weight="bold" color="#ffffffAA">
                            HI THERE
                        </Text>
                        <Text
                            h3

                            css={{
                                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                            }}
                        >
                            I'm Grace Huynh

                        </Text>
                        <Text size={12} weight="bold" color="#ffffffAA">
                            And trust me I'm a developer 👌
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body>
                    <Card.Image
                        src={Trach}
                        height={400}
                        width="100%"
                        alt="Card example background"
                        css={'color:black'}
                    />
                </Card.Body>
                <Card.Footer
                    blur
                    css={{
                        position: "absolute",
                        bgBlur: "#000",
                        borderTop: "$borderWeights$light solid rgba(0, 0, 0, 0.9)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>

                        <Col
                            css={{ marginLeft: "-20px" }}>
                            <User

                                src="https://avatars.githubusercontent.com/u/27490257"
                                name="Grace Huynh"
                                bordered
                                color="gradient"
                            >
                                <User.Link href="mailto:gracehuynh98@gmail.com">gracehuynh98@gmail.com</User.Link>
                            </User>
                        </Col>

                        <Col>
                            <Row justify="flex-end">
                                <Button bordered auto rounded color="gradient">
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"

                                    >
                                        <Link href="https://twitter.com/_gracehuynh_">@ Contact</Link>
                                    </Text>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>


        </Container>

    );
}
