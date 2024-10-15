import DataInput from "./components/DataInput";
import LandingPage from "./components/LandingPage";
import Providers from "./providers";

function App() {
    return (
        <Providers>
            <div className="grid size-full min-h-screen grid-cols-2">
                <div className="p-4">
                    <div className="prose w-full text-center">
                        <h1>Editor</h1>
                    </div>
                    <DataInput />
                </div>
                <div className="border-l-2 border-solid border-black p-4">
                    <div className="prose w-full text-center">
                        <h1>Landing Page</h1>
                    </div>
                    <LandingPage />
                </div>
            </div>
        </Providers>
    );
}

export default App;
