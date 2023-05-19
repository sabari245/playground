import Editor from "@monaco-editor/react"
import { Button } from "@/components/ui/button"

export default function CodeEditor() {
    return (
        <div className="flex flex-col w-screen h-screen">
            <div className="flex items-center justify-between h-14 bg-neutral-800">
                <div></div>
                <div>
                    <button className="h-8 px-4 mr-4 text-sm text-white bg-blue-600 rounded-md">
                        Submit
                    </button>
                </div>
            </div>
            <div className="flex flex-grow">
                <div className="w-2/4">
                    <Editor
                        height="100%"
                        width="100%"
                        theme="vs-dark"
                        defaultLanguage="typescript"
                        defaultValue="// some comment"
                    />
                </div>
                <div className="w-2/4"></div>
            </div>
            <div style={{ fontSize: "0.65rem" }} className="flex items-center h-6 pl-4 text-xs text-white bg-blue-600 font-white">
                Compiled 2m ago . Saved 2m ago
            </div>
        </div>
    )
}