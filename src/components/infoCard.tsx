import React, {useEffect, useRef} from "react";
import Typed from "typed.js"
import {Button, Card, CardBody, Image, Popover, PopoverContent, PopoverTrigger, Slider} from "@nextui-org/react";
import {HeartIcon} from "./Icons/HeartIcon.tsx";
import {RepeatOneIcon} from "./Icons/RepeatOneIcon.tsx";
import {PreviousIcon} from "./Icons/PreviousIcon.tsx";
import {PauseCircleIcon} from "./Icons/PauseCircleIcon.tsx";
import {NextIcon} from "./Icons/NextIcon.tsx";
import {ShuffleIcon} from "./Icons/ShuffleIcon.tsx";

export default function InfoCard() {
    const [liked, setLiked] = React.useState(false);
    const el = useRef(null)
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['> 林歆', '> NeterAlex'],
            typeSpeed: 125,
            fadeOut: true,
            loop: true,
            loopCount: Infinity,
            cursorChar: '',
            smartBackspace: true,
        })
        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <Card
            isBlurred
            className=" border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4 ">
                        <Image
                            alt="Album cover"
                            className="object-cover"
                            shadow="md"
                            src="avatar.jpg"
                            width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col h-[50px] gap-0">
                                <p className="text-small text-foreground/80">@NEAUACM </p>
                                <h1 ref={el} className="text-2xl text-primary font-medium mt-1"></h1>
                            </div>
                            <Popover isOpen={liked} onOpenChange={(open) => setLiked(open)} placement="bottom"
                                     showArrow={true}>
                                <PopoverTrigger>
                                    <Button
                                        isIconOnly
                                        className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                        radius="full"
                                        variant="light"
                                        onPress={() => setLiked((v) => !v)}
                                    >
                                        <HeartIcon
                                            className={liked ? "[&>path]:stroke-transparent" : ""}
                                            fill={liked ? "red" : "none"}
                                        />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="px-1 py-2">
                                        <div className="text-small font-bold">感谢你的喜欢</div>
                                        <div className="text-tiny">祝你生活愉快~</div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="flex flex-col mt-3 gap-1">
                            <Slider
                                aria-label="Music progress"
                                classNames={{
                                    base: "max-w-md gap-3",
                                }}
                                color="primary"
                                maxValue={80}
                                defaultValue={21}
                                step={1}
                                size="sm"
                            />
                            <div className="flex justify-between">
                                <p className="text-small">21</p>
                                <p className="text-small text-foreground/50">End?</p>
                            </div>
                        </div>

                        <div className="flex w-full items-center justify-center">
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                            >
                                <RepeatOneIcon className="text-foreground/80"/>
                            </Button>

                            <Button
                                isIconOnly
                                color="primary"
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                            >
                                <PreviousIcon/>
                            </Button>

                            <Button
                                isIconOnly
                                className="w-auto h-auto data-[hover]:bg-foreground/10"
                                color="primary"
                                radius="full"
                                variant="shadow"
                            >
                                <PauseCircleIcon size={54}/>
                            </Button>

                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                color="primary"
                                variant="light"
                            >
                                <NextIcon/>
                            </Button>

                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                            >
                                <ShuffleIcon className="text-foreground/80"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
