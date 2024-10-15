import DataInput from "./components/DataInput";
import LandingPage from "./components/LandingPage";
import Providers from "./providers";

function App() {
    return (
        <Providers>
            <div className="grid size-full min-h-screen grid-cols-2">
                <div>
                    <DataInput />
                </div>
                <div>
                    <LandingPage />
                </div>
            </div>
        </Providers>
    );
}

export default App;
