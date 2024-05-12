import {Card, CardBody, Image, Listbox, ListboxItem, ListboxSection} from "@nextui-org/react";
import {ReactNode} from "react";
import {BsFillFileRichtextFill, BsFillJournalBookmarkFill, BsGithub} from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";

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
                        <ListboxSection title="Personal" showDivider>
                            <ListboxItem
                                key="blog"
                                description="文章与随想"
                                onClick={() => window.open("https://blog.neteralex.cn", "_blank")}
                                startContent={<BsFillJournalBookmarkFill size={22}/>}
                            >
                                Blog Refined
                            </ListboxItem>
                            <ListboxItem
                                key="github"
                                description="Github 主页及开源项目"
                                onClick={() => window.open("https://github.com/NeterAlex", "_blank")}
                                startContent={<BsGithub size={22}/>}
                            >
                                Github Profile
                            </ListboxItem>
                            <ListboxItem
                                key="resume"
                                description="简历及项目经历"
                                onClick={() => window.open("https://blog.neteralex.cn/resume", "_blank")}
                                startContent={<BsFillFileRichtextFill size={22}/>}
                            >
                                Resume
                            </ListboxItem>
                            <ListboxItem
                                key="email"
                                description="NeterAlex@outlook.com"
                                onClick={() => window.open("https://blog.neteralex.cn/resume", "_blank")}
                                startContent={<AiFillMail size={22}/>}
                            >
                                Email
                            </ListboxItem>
                        </ListboxSection>
                        <ListboxSection title="Team">
                            <ListboxItem
                                key="delete"
                                description="副队长"
                                onClick={() => window.open("https://acmproj.neteralex.cn/", "_blank")}
                                startContent={<Image
                                    alt="Album cover"
                                    className="object-cover"
                                    height={22}
                                    shadow="md"
                                    src="acmproj.png"
                                    width="22px"
                                />}
                            >
                                东北农业大学 ACM 集训队项目部
                            </ListboxItem>
                        </ListboxSection>
                    </Listbox>
                </ListboxWrapper>
            </CardBody>
        </Card>
    )
}