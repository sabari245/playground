import { PropsWithChildren } from "react";

interface IconButtonProps {
    active?: boolean;
    margin?: string;
}
export default function IconButton(props: PropsWithChildren<IconButtonProps>) {
    return (
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${props.active ? 'bg-white text-blue-600' : 'text-white'} ${props.margin ?? ""}`}>
            {props.children}
        </div>
    )
}