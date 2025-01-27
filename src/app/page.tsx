import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { SettingsTabs } from "../components/SettingTabs";
import * as Input from "@/components/Input"
import * as FileInput from '@/components/Form/FileInput'
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Form/Textarea";
import { Button } from "@/components/Button";

export default function Home() {
	return (
		<>
			<h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

			<SettingsTabs />

			<div className="mt-6 flex flex-col" >

				<div className="flex flex-col lg:flex-row justify-between gap-4 lg:items-center pb-5 border-b border-zinc-200 dark:border-zinc-700">

					<div className="space-y-1">
						<h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
							Personal Info
						</h2>
						<span className="text-sm text-zinc-500 dark:text-zinc-400"
						>Update your photo and personal details here.
						</span>
					</div>

					<div className="flex items-center gap-2">

						<Button variant="outline" type="button">
							Cancel
						</Button>

						<Button variant="primary" type="submit" form="setting">
							Save
						</Button>

					</div>

				</div>

				<form
					id="settings"
					className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
				>

					<div className="flex flex-col lg:grid gap-3 lg:grid-cols-form">
						<label
							htmlFor="firsName"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Name
						</label>

						<div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
							<Input.Root>
								<Input.Control id="firstName" defaultValue="Dev" />
							</Input.Root>

							<div className="flex flex-col gap-3 lg:block">
								<label
									htmlFor="lastName"
									className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
								>
									Last name
								</label>
								<Input.Root>
									<Input.Control id="lastName" defaultValue="Régis" />
								</Input.Root>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label
							htmlFor="email"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Email address
						</label>
						<Input.Root>
							<Input.Prefix>
								<Mail className="h-5 w-5 text-zinc-500" />
							</Input.Prefix>
							<Input.Control id="email" type="email" defaultValue="teste@email.com" />
						</Input.Root>
					</div>

					<div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
						<label
							htmlFor="photo"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Your Photo
							<span
								className="mt-0.5 text-sm font-normal text-zinc-500 block"
							>
								This will be displayed on your profile.
							</span>
						</label>

						<FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
							<FileInput.ImagePreview />
							<FileInput.Trigger />
							<FileInput.Control />
						</FileInput.Root>

					</div>

					<div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
						<label
							htmlFor="role"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Role
						</label>
						<Input.Root>
							<Input.Control id="role" defaultValue="Developer" />
						</Input.Root>

					</div>

					<div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
						<label
							htmlFor="country"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Country
						</label>

						<Select placeholder="Select a country...">
							<SelectItem value="br" text="Brazil" />
							<SelectItem value="us" text="United States" />
						</Select>

					</div>

					<div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
						<label
							htmlFor="timezone"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Timezone
						</label>

						<Select placeholder="Select a timezone...">
							<SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
							<SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
						</Select>

					</div>

					<div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
						<label
							htmlFor="bio"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Bio
							<span
								className="mt-0.5 text-sm font-normal text-zinc-500 dark:text-zinc-500 block"
							>
								Write a short introduction.
							</span>
						</label>
						<div className="space-y-3">
							<div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">

								<Select placeholder="" defaultValue="normal">
									<SelectItem value="normal" defaultChecked text="Normal Text" />
									<SelectItem value="md" text="Markdown" />
								</Select>

								<div className="flex items-center gap-1">

									<Button type="button" variant="ghost">
										<Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>
									<Button type="button" variant="ghost">
										<ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
									</Button>

								</div>

							</div>
							<Textarea
								id="bio"
								defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
							/>
						</div>

					</div>

					<div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
						<label
							htmlFor="projects"
							className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
						>
							Portfolio projects
							<span
								className="mt-0.5 text-sm font-normal text-zinc-500 block"
							>
								Share a few snippets of your work.
							</span>
						</label>

						<FileInput.Root className="gap-5">
							<FileInput.Trigger />
							<FileInput.FileList />
							<FileInput.Control multiple />
						</FileInput.Root>

					</div>

					<div className="flex items-center justify-end gap-2 pt-5">
						<div className="flex items-center gap-2">
							<Button variant="outline" type="button">
								Cancel
							</Button>
							<Button variant="primary" type="submit" form="setting">
								Save
							</Button>
						</div>
					</div>


				</form>
			</div>

		</>
	)
}
