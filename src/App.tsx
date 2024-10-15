import DataInput from "./components/DataInput";
import LandingPage from "./components/LandingPage";

function App() {
    return (
        <div className="grid size-full min-h-screen grid-cols-2">
            <div>
                <DataInput />
            </div>
            <div>
                <LandingPage />
            </div>
        </div>
    );
}

export default App;
