import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function useGlobalContext() {
    let context = useContext(GlobalContext);

    if (!context) {
        throw new Error(`useGlobalContext() must be used within a GlobalContextProvider`);
    }

    return context;
}

export { useGlobalContext };