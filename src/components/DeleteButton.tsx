import { Loader2, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";


export default function DeleteButton() {
const {pending} = useFormStatus()
  return (
    <div>
      <Button variant={"destructive"} size={"icon"} disabled={pending}>
        {pending ? (
            <Loader2 className="size-4 animate-spin" />
        ):
         (
            <XIcon className="size-4" />
         )}
     </Button>
    </div>
  )
}
