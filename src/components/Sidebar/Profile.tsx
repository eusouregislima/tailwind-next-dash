import { LogOut } from "lucide-react"
import { Button } from "../Button"

export const Profile = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        className="w-10 h-10 rounded-full"
        src="https://github.com/eusouregislima.png"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Régis Lima</span>
        <span className="truncate text-sm text-zinc-700 dark:text-zinc-400">regislima@gmail.com</span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-300" />
      </Button>
    </div>
  )
}

