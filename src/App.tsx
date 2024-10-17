import './styles/App.css'
import InfoCard from "./components/infoCard.tsx";
import ContentCard from "./components/contentCard.tsx";
import Footer from "./components/footer.tsx";
import {MouseParallax} from "react-just-parallax";
import {Snippet} from "@nextui-org/react";

function App() {

    return (
        <>
            <MouseParallax strength={0.01} enableOnTouchDevice>
                <div
                    className="light p-[12px] text-foreground bg-gradient-to-b from-[#F7EAE5] to-[#E9EBFD] gap-4 flex flex-col items-center justify-center align-middle h-full w-full">
                    <Snippet className="max-w-[610px] w-full" variant="shadow" color="primary">Hi there, I'm
                        NeterAlex.</Snippet>
                    <InfoCard/>
                    <ContentCard/>
                    <Footer/>
                </div>
            </MouseParallax>
        </>
    )
}

export default App
