import { Input, Typography } from "@material-tailwind/react";
import React from "react";

function AccountInfo() {
	return (
		<div className="flex flex-col justify-center items-center gap-7 w-full">
			<div className="w-[50rem]">
				<Input type="text" label="Full Name" />
			</div>
			<div className="w-[50rem]">
				<Input type="email" label="Email" />
			</div>
			<div className="w-[50rem]">
				<Input type="password" label="Password" />
			</div>
			<div className="w-[50rem]">
				<Input type="password" label="Confirm Password" />
				<Typography
					variant="small"
					color="gray"
					className="mt-2 flex items-center gap-1 font-normal"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="-mt-px h-4 w-4"
					>
						<path
							fillRule="evenodd"
							d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
							clipRule="evenodd"
						/>
					</svg>
					Use at least 8 characters, one uppercase, one lowercase and
					one number.
				</Typography>
			</div>
		</div>
	);
}

export default AccountInfo;
