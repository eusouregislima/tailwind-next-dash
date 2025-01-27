import { ComponentProps } from "react"

export interface TextareaProps extends ComponentProps<'textarea'> { }

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      className="min-h-28 resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:ring-4 focus:ring-violet-50 dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-violet-500/20 dark:placeholder-zinc-400 dark:text-zinc-100"
      {...props}
    />
  )
}