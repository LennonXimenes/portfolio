import { createContext, useEffect, useState } from "react";
import { IRepo, IRepoContext, IRepoProviderProps } from "./@types";
import { api } from "../service/api";

export const RepoContext = createContext({} as IRepoContext);

export const RepoProvider = ({ children }: IRepoProviderProps) => {
    const [repos, setRepos] = useState<IRepo[]>([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const { data } = await api.get("/LennonXimenes/repos");
                setRepos(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRepos();
    }, []);

    return (
        <RepoContext.Provider value={{ repos, setRepos }}>
            {children}
        </RepoContext.Provider>
    );
};
