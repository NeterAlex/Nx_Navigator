import './styles/App.css'
import InfoCard from "./components/infoCard.tsx";
import ContentCard from "./components/contentCard.tsx";
import Footer from "./components/footer.tsx";
import {MouseParallax} from "react-just-parallax";

function App() {

    return (
        <>
            <MouseParallax strength={0.01} enableOnTouchDevice>
                <div
                    className="scrollbar-hidden light p-[12px] text-foreground bg-[#F3F4F6] gap-4 flex flex-col items-center justify-center align-middle h-full w-full">
                    {/*<TextCard/>*/}
                    <InfoCard/>
                    <ContentCard/>
                    <Footer/>
                </div>
            </MouseParallax>
        </>
    )
}

export default App
