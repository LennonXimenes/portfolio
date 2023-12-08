import { useContext } from "react";
import { StyledProjectSection } from "./styled";
import { RepoContext } from "../../providers/RepoContext";

export const ProjectSection = () => {
    const { repos } = useContext(RepoContext);

    console.log(repos)

    return (
        <StyledProjectSection>
            <div>
                <h1>My projects</h1>
                <p>Projects created at <span>Kenzie Academy</span></p>
            </div>

            <ul>

            </ul>
        </StyledProjectSection>
    );
};
