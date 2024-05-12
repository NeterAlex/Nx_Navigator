import {Card} from "@nextui-org/react";


export default function TextCard() {
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 h-auto w-full p-[16px] max-w-[610px]"
            shadow="sm"
        >
            👋 Hi there, I'm NeterAlex, a fullstack developer interested in music.
        </Card>
    )
}