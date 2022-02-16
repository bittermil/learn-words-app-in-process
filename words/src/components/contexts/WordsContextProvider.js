import React, {
    useContext,
    useState,
    useEffect,
    createContext
} from "react";
const WordsContext = createContext();

export function WordsContextProvider({ children }) {
    const [words, getWords] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getWordList();
    }, []);

    // получение слова
    async function getWordList(){
        const response  = await fetch(`http://itgirlschool.justmakeit.ru/api/words`);
        const wordList = await response.json();
        try {
            getWords(wordList);
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.log(error);
        }
    };

    // добавление слова
    async function addWords(formData) {
        let response = await fetch("/api/words/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({formData}),
        });

        let result = await response.json();
        console.log(result);
    }

    return (
        <WordsContext.Provider value={{ words, isLoading, addWords}} > 
            {children} 
        </WordsContext.Provider>
    );
}

export function useWordAPI() {
    const context = useContext(WordsContext);
    if (context === undefined) {
      throw new Error("Error");
    }
    return context;
}