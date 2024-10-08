import {BsPlusCircle} from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <BsPlusCircle className="fs-4" />
        </div>
    );
}

