import useCatImage from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import "./App.css";

export const App = () => {
    const { fact, getFactAndUpdateReactState } = useCatFact();
    const { imageUrl } = useCatImage(fact);

    const handleClikc = async () => {
        getFactAndUpdateReactState();
    };

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClikc}>Get New Fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`imagen de ${fact}`} />}
            </section>
        </main>
    );
};
