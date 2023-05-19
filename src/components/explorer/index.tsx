import { H4 } from "./h4";
import { InputWithText } from "./search";

export default function Explorer() {
    return (
        <div className="bg-white w-80 h-screen px-5">
            <div className="my-5">
                <InputWithText />
            </div>
            <H4>Results for: Hero</H4>
        </div>
    )
}