import { PropsWithChildren } from "react";

interface H4Props { }
export function H4(props: PropsWithChildren<H4Props>) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {props.children}
        </h4>
    )
}
