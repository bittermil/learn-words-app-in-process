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
    const [formData, getFormData] = useState(true);

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
    async function addWords(e){
        let form = e.target;
        console.log(form);
    }

    return (
        <WordsContext.Provider value={{ words, isLoading}} > 
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