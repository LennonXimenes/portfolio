import { useContext } from "react";
import { StyledProjectSection } from "./styled";
import { RepoContext } from "../../providers/RepoContext";
import { CardProjectSection } from "./CardProjectSection";
import { FontParagraph, FontTitle } from "../../styles/typograph";

export const ProjectSection = () => {
    const { repos } = useContext(RepoContext);

    console.log(repos)



    return (
        <StyledProjectSection>
            <div className="titleParagraphProject">
                <FontTitle>My projects</FontTitle>
                <FontParagraph>Projects created at <span>Kenzie Academy</span></FontParagraph>
            </div>

            <ul>
                {repos.map((rep) =>
                    <CardProjectSection
                        key={rep.id}
                        rep={rep}
                    />)}
            </ul>
        </StyledProjectSection>
    );
};