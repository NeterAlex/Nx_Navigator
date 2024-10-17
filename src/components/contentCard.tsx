import {Card, CardBody, Listbox, ListboxItem, ListboxSection} from "@nextui-org/react";
import {ReactNode} from "react";
import {
    BsCodeSlash,
    BsFillJournalBookmarkFill,
    BsGithub,
    BsGrid,
    BsLaptop,
    BsMusicPlayer,
    BsStack
} from "react-icons/bs";

export const ListboxWrapper = ({children}: { children: ReactNode }) => (
    <div
        className="w-full px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        {children}
    </div>
);

export default function ContentCard() {
    //const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[610px]"
            shadow="sm"
        >
            <CardBody>
                <ListboxWrapper>
                    <Listbox variant="flat" aria-label="Listbox menu with sections">
                        <ListboxSection title="Intro" showDivider>
                            <ListboxItem className={"cursor-default"}
                                         key="fav"
                                         description="语言学、音乐、小提琴、二胡、绘画"
                                         startContent={<BsMusicPlayer size={22}/>}
                            >
                                爱好
                            </ListboxItem>
                        </ListboxSection>
                        <ListboxSection title="Personal" showDivider>
                            <ListboxItem
                                key="blog"
                                description="文章与随想"
                                onClick={() => window.open("https://blog.neteralex.cn", "_blank")}
                                startContent={<BsFillJournalBookmarkFill size={22}/>}
                            >
                                Blog
                            </ListboxItem>
                            <ListboxItem
                                key="github"
                                description="Github 主页及开源项目"
                                onClick={() => window.open("https://github.com/NeterAlex", "_blank")}
                                startContent={<BsGithub size={22}/>}
                            >
                                Github Profile
                            </ListboxItem>
                        </ListboxSection>
                        <ListboxSection title="Skill">
                            <ListboxItem className={"cursor-default"}
                                         key="lang"
                                         description="C#、TypeScript、Kotlin、Python、Dart、Rust"
                                         startContent={<BsCodeSlash size={22}/>}
                            >
                                语言
                            </ListboxItem>
                            <ListboxItem className={"cursor-default"}
                                         key="web-fullstack"
                                         description="React、Next.js、Web Assembly、ASP.NET、SpringBoot"
                                         startContent={<BsStack size={22}/>}
                            >
                                Web 全栈
                            </ListboxItem>
                            <ListboxItem
                                key="client" className={"cursor-default"}
                                description="Flutter、React Native、WPF、Compose Multiplatform、PyQt"
                                startContent={<BsLaptop size={22}/>}
                            >
                                跨平台客户端
                            </ListboxItem>
                            <ListboxItem
                                key="chore" className={"cursor-default"}
                                description="GIS、PostgreSQL、Git、Docker、Nginx、ML"
                                startContent={<BsGrid size={22}/>}
                            >
                                其他
                            </ListboxItem>
                        </ListboxSection>
                    </Listbox>
                </ListboxWrapper>
            </CardBody>
        </Card>
    )
}