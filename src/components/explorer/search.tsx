import { Input } from "../ui/input"
import { Label } from "../ui/label"

export function InputWithText() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-2">Search</Label>
            <Input type="email" id="email-2" placeholder="Email" />
            <p className="text-sm text-muted-foreground">Tip: use #hash tags to get better results</p>
        </div>
    )
}
