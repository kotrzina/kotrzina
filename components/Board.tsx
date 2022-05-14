import {FC} from "react";
import {Button, Card, Col} from "react-bootstrap";
import {StaticImageData} from "next/image";

type Props = {
    title: string;
    description: string;
    linkTitle: string;
    linkHref: string;
    image: StaticImageData;
};

export const Board: FC<Props> = (props: Props) => {
    return (
        <Col md={4}>
            <Card border={"dark"} style={{width: '100%'}}>
                <Card.Img variant="top" src={props.image.src}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="success" href={props.linkHref}>
                        {props.linkTitle}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};
