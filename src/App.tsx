import './styles/App.css'
import InfoCard from "./components/infoCard.tsx";
import ContentCard from "./components/contentCard.tsx";
import TextCard from "./components/textCard.tsx";
import Footer from "./components/footer.tsx";

function App() {

    return (
        <>
            <div
                className="light p-[12px] text-foreground bg-[#F3F4F6] gap-4 flex flex-col items-center justify-center align-middle h-full w-full">
                <TextCard/>
                <InfoCard/>
                <ContentCard/>
                <Footer/>
            </div>
        </>
    )
}

export default App
