import { AiFillGithub } from "react-icons/ai";
import { FontLabel, FontParagraph, FontTitle } from "../../../styles/typograph";
import { Irep } from "../../../providers/@types";


export const CardProjectSection = ({ rep }: Irep) => {
    return (
        <li>
            <FontTitle>{rep.name}</FontTitle>
            <FontLabel>Language: <span>&nbsp;&nbsp;{rep.language}&nbsp;&nbsp;</span></FontLabel>
            <FontParagraph>{rep.description}</FontParagraph>
            <a href={rep.html_url} target="_blank" ><AiFillGithub size={18} color="grey" />&nbsp;Github Code</a>
        </li>
    )
}
