import {Card, CardBody} from "@nextui-org/react";


export default function TextCard() {
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[610px]"
            shadow="sm"
        >
            <CardBody>
                👋 Hi there, I'm NeterAlex, a fullstack developer interested in music.
            </CardBody>
        </Card>
    )
}