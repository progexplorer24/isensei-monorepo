/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import { css, cx } from "@emotion/css";
import Container from "./Container";
import Card from "./Card";
import ContainerHeader from "./ContainerHeader";
import ListboxExample from "./ListboxExample";
import { colorPalette } from "./colorPalette";
import { typography } from "./typography";
import DataView from "./DataView";
import {
	addIcon,
	airTableIconColor,
	backIcon,
	cheveronRight,
	circledSuccess,
	circlePlaceholderImage,
	errorIcon,
	externalLinkIcon,
	hashIcon,
	notionIcon,
	playIcon,
	refreshIcon,
	sampleDataIcon,
	searchIcon,
	successIcon,
	toggleIconDisabled,
	typographyIcon,
	xanoIcon,
} from "@airconnex/components/aeropage-tools/storybook/Icons";

const bgAlmostBlack = css`
	background-color: #595b5c;
`;

const customBgColor = css`
	background-color: rgba(99, 60, 227, 0.1);
`;

type IntegrationData = {
	title: string;
	subtitle: string;
	icon: JSX.Element;
};

const integrationData: IntegrationData[] = [
	{
		title: "Airtable",
		subtitle: "Sync data from your Airtable workspaces.",
		icon: airTableIconColor("w-6 h-6"),
	},
	{
		title: "Notion",
		subtitle: "Sync data from your notion workspaces.",
		icon: notionIcon("w-6 h-6"),
	},
	{
		title: "Xano",
		subtitle: "Connect to a Xano database.",
		icon: xanoIcon("w-6 h-6"),
	},
	{
		title: "Sample Data",
		subtitle: "Connect to a read only demo data source.",
		icon: sampleDataIcon("w-6 h-6"),
	},
];

const renderIntegrationData = (data: IntegrationData[]) =>
	data.map((element, index) => (
		<div
			key={element.title}
			className={cx(
				"my-6 flex items-center rounded-lg p-4",
				index === 0 ? customBgColor : ""
			)}
		>
			<div className="mr-5">{element.icon}</div>
			<div>
				<h4 className={typography.textM}>{element.title}</h4>
				<p className={typography.textXs}>{element.subtitle}</p>
			</div>
		</div>
	));

// Highlighted number should be between 1-3
type LinksHeaderProps = {
	highlightedLink?: number;
};

const LinksHeader = ({
	highlightedLink = 1,
}: LinksHeaderProps): React.ReactElement => {
	const highlightedStyles = `border-b-2 border[${colorPalette.almostBlack}] solid px-2 pb-2`;
	return (
		<div className="flex items-center justify-between">
			<a
				href="#"
				className={cx(
					typography.textS,
					highlightedLink === 1 ? highlightedStyles : ""
				)}
			>
				Publish
			</a>
			<a
				href="#"
				className={cx(
					typography.textS,
					"px-2 pb-2",
					highlightedLink === 2 ? highlightedStyles : ""
				)}
			>
				Login As
			</a>
			<a
				href="#"
				className={cx(
					typography.textS,
					"px-2 pb-2",
					highlightedLink === 3 ? highlightedStyles : ""
				)}
			>
				Domains
			</a>
		</div>
	);
};

type CardDetails = {
	initials: string;
	date: string;
	creator: string;
	initialsStyles?: string;
};

const cardDetails: CardDetails[] = [
	{
		initials: "MM",
		date: "Friday, 24th May 2022",
		creator: "By Mike Marzano",
	},
	{
		initials: "MM",
		date: "Monday, 19th May 2022",
		creator: "By Mike Marzano",
	},
	{
		initials: "KM",
		date: "Monday, 19th May 2022",
		creator: "By Kevin Martinez",
		initialsStyles: css`
			background-color: ${colorPalette.orange};
		`,
	},
];

type UserDetailsProps = {
	initials: string;
	name: string;
	accessRights: string;
	icon?: JSX.Element;
	avatarLink?: string;
	initialsStyles?: string;
};

const userDetails: UserDetailsProps[] = [
	{
		initials: "",
		name: "Admin",
		accessRights: "Full Access",
		icon: toggleIconDisabled("w-7 h-4"),
		initialsStyles: css`
			background-color: ${colorPalette.almostBlack};
		`,
	},
	{
		initials: "VU",
		name: "Group",
		accessRights: "Admin of Vogue Users",
		initialsStyles: css`
			background-color: #943a3a;
		`,
	},
	{
		initials: "",
		name: "Emily Sue",
		accessRights: "Member of Vouge Users",
		avatarLink: "/storybook/avatar.png",
	},
];

type DomainDetailsProps = {
	initials: string;
	name: string;
	status: string;
	initialsStyles?: string;
	avatarLink?: string;
};

const domainDetails: DomainDetailsProps[] = [
	{
		initials: "",
		name: "shopr.com.au",
		status: "Connected",
		initialsStyles: css`
			background-color: ${colorPalette.hiGreen};
		`,
	},
	{
		initials: "",
		name: "shopr.eu",
		status: "Pending",
		initialsStyles: css`
			background-color: ${colorPalette.orange};
		`,
	},
];

type CustomLinkProps = {
	styles?: string;
	href?: string;
	text: string;
};

const CustomLink = ({
	styles = "",
	href = "#",
	text,
}: CustomLinkProps): React.ReactElement => (
	<a
		className={cx(
			typography.textS,
			css`
				color: ${colorPalette.airconnexPurple};
			`,
			"mb-4 block",
			styles
		)}
		href={href}
	>
		{text}
	</a>
);

type CustomButtonProps = {
	text: string;
	iconLeft?: JSX.Element;
	iconRight?: JSX.Element;
	buttonStyles?: string;
	textStyles?: string;
};

const CustomButton = ({
	buttonStyles = "",
	text,
	textStyles,
	iconLeft,
	iconRight,
}: CustomButtonProps): React.ReactElement => (
	<button className={cx(`my-8 w-full rounded border-none`, buttonStyles)}>
		{iconLeft ? iconLeft : null}
		<span className={cx(typography.textS, textStyles)}>{text}</span>
		{iconRight ? iconRight : null}
	</button>
);

export default function Storybook() {
	return (
		<>
			<div>
				<Head>
					<title>Aeropage Tools</title>
					<meta
						name="description"
						content="Free tools for Airtable and Notion."
					/>
					<meta property="og:image" content="/proxy.png" />
					<link rel="icon" href="/aeropage_icon_200px.png" />
				</Head>

				<main>
					<DataView />

					<Container widthInPx={320} className={cx("px-5 py-4")}>
						<ContainerHeader
							iconLeft={backIcon("w-6 h-6")}
							textStyles={typography.textM}
						>
							+ New Integration
						</ContainerHeader>
						{renderIntegrationData(integrationData)}
					</Container>

					<Container widthInPx={320} className={cx("px-5 py-4")}>
						<ContainerHeader
							iconLeft={backIcon("w-6 h-6")}
							iconRight={airTableIconColor("w-6 h-6")}
							textStyles={typography.textM}
						>
							Connect to Airtable
						</ContainerHeader>
						<h4 className={cx("mt-6 mb-4", typography.textS)}>API Key</h4>
						<ListboxExample wrapperStyles="mb-7" />
						<button
							className={cx(
								typography.textM,
								"mb-9 w-full rounded border-none",
								bgAlmostBlack,
								css`
									color: white;
									font-weight: 500;
								`
							)}
						>
							<span>Next</span>
							{cheveronRight("ml-2 w-4 h-4")}
						</button>
					</Container>

					<Container widthInPx={320} className={cx("px-5 py-4")}>
						<ContainerHeader
							iconLeft={backIcon("w-6 h-6")}
							iconRight={airTableIconColor("w-6 h-6")}
							textStyles={typography.textM}
						>
							Airtable URL
						</ContainerHeader>
						<p className={cx(typography.textXs, "mt-9 mb-4")}>
							Open{" "}
							<a
								href="https://airtable.com/"
								className={css`
									color: rgba(99, 60, 227, 1);
								`}
							>
								Airtable{" "}
							</a>
							and copy / paste the url for a table to sync.
						</p>
						<div className="relative">
							{errorIcon(
								cx(
									"w-4 h-4 absolute",
									css`
										left: 90%;
										top: 10%;
									`
								)
							)}
							<textarea
								className={cx(
									`mb-4 h-20 w-full rounded border-none bg-[#F4F5F8]`,
									css`
										resize: none;
									`
								)}
							></textarea>
						</div>

						<p className={cx(typography.textXs, "mb-4")}>
							This url does not appear to correct {"→"} view help.
						</p>
					</Container>

					<Container widthInPx={320} className={cx("px-5 py-4")}>
						<ContainerHeader
							iconLeft={backIcon("w-6 h-6")}
							iconRight={airTableIconColor("w-6 h-6")}
							textStyles={typography.textM}
						>
							Airtable URL
						</ContainerHeader>
						<p className={cx(typography.textXs, "mt-9 mb-4 mr-1")}>
							Open{" "}
							<a
								href="https://airtable.com/"
								className={css`
									color: rgba(99, 60, 227, 1);
								`}
							>
								Airtable{" "}
							</a>
							and copy / paste the url for a table to sync.
						</p>
						<div className="relative">
							{successIcon(
								cx(
									"w-4 h-4 absolute",
									css`
										left: 90%;
										top: 10%;
									`
								)
							)}
							<textarea
								className={cx(
									typography.textXs,
									`mb-4 h-20 w-full rounded border-none bg-[${colorPalette.superLightGrey}] pl-2 pr-6 pt-2`,
									css`
										resize: none;
									`
								)}
								defaultValue="https://airtable.com/app1Nz4zLQCJ4ORUr/tbl6Hr0R2fTW1Rt62/viwH5f7P5s9lbyFkV?blocks=hide"
							/>
						</div>

						<a
							href="https://airtable.com/"
							className={cx(
								typography.textXs,
								css`
									color: rgba(99, 60, 227, 1);
								`,
								"mb-4 block text-right"
							)}
						>
							Open in Airtable
						</a>

						<form action="">
							<label htmlFor="base" className="mb-4 flex items-center">
								<div className={cx(typography.textS, "w-16 flex-shrink-0")}>
									Base
								</div>
								<div
									className={`solid mr-2 h-9 w-9 flex-shrink-0 rounded border bg-[${colorPalette.superLightGrey}]`}
								/>
								<input
									className={cx(
										`inline-flex h-9 overflow-hidden rounded border-none`,
										`placeholder:text-xs placeholder:font-normal placeholder:text-[${colorPalette.darkerGrey}] bg-[${colorPalette.superLightGrey}] placeholder:leading-normal placeholder:tracking-wider`
									)}
									type="text"
									name="base"
									id="base"
									placeholder="Name of App / Base"
								/>
							</label>
							<label htmlFor="table" className="mb-4 flex items-center">
								<div className={cx(typography.textS, "w-16 flex-shrink-0")}>
									Table
								</div>
								<input
									type="text"
									name="table"
									id="table"
									className={cx(
										"h-9 flex-grow rounded border-none",
										`placeholder:text-xs placeholder:font-normal placeholder:text-[${colorPalette.darkerGrey}] bg-[${colorPalette.superLightGrey}] placeholder:leading-normal placeholder:tracking-wider`
									)}
									placeholder="Name of Table"
								/>
							</label>
							<label htmlFor="name" className="mb-4 flex items-center">
								<div className={cx(typography.textS, "w-16 flex-shrink-0")}>
									Name
								</div>
								<ListboxExample wrapperStyles="overflow-hidden" />
							</label>
							<label htmlFor="image" className="mb-4 flex items-center">
								<div className={cx(typography.textS, "w-16 flex-shrink-0")}>
									Image
								</div>
								<ListboxExample wrapperStyles="overflow-hidden" />
							</label>
							<label htmlFor="modified" className="mb-4 flex items-center">
								<div className={cx(typography.textS, "w-16 flex-shrink-0")}>
									Modified
								</div>
								<ListboxExample wrapperStyles="overflow-hidden" />
							</label>
						</form>
						<p className={cx(typography.textXs, "mb-6 mt-6 text-center")}>
							Adding a ‘last modified time’ field in Airtable enables faster
							syncronization times ...
						</p>

						<div className="mb-10 flex items-center">
							<div className="mr-3">
								{circlePlaceholderImage(
									"w-12 h-12",
									colorPalette.superLightGrey
								)}
							</div>
							<div>
								<h4
									className={cx(
										typography.textS,
										"mb-0",
										css`
											color: ${colorPalette.darkerGrey};
										`
									)}
								>
									No Name
								</h4>
								<p
									className={cx(
										typography.textXs,
										css`
											color: ${colorPalette.darkerGrey};
										`
									)}
								>
									Create a field with modified time...
								</p>
							</div>
						</div>

						<label htmlFor="view" className="mb-10 flex items-center">
							<div className={cx(typography.textS, "w-16 flex-shrink-0")}>
								View
							</div>
							<input
								type="text"
								name="view"
								id="view"
								className={`h-9 flex-grow rounded border-none py-2 px-3 placeholder:text-xs placeholder:font-normal placeholder:text-[${colorPalette.darkerGrey}] bg-[${colorPalette.superLightGrey}] placeholder:leading-normal placeholder:tracking-wider`}
								placeholder="Name of View"
							/>
						</label>

						<button
							className={cx(
								typography.textM,
								"mb-9 w-full rounded border-none",
								bgAlmostBlack,
								css`
									color: white;
									font-weight: 500;
								`
							)}
						>
							<span>Next</span>
							{cheveronRight("ml-2 w-4 h-4")}
						</button>
					</Container>

					<Container className={cx("px-5 py-4")} widthInPx={320}>
						<div
							className={cx(
								`solid mb-4 flex items-center justify-between border-b border-[${colorPalette.borderGrey}] pb-4`
							)}
						>
							<span className={cx(typography.textS)}>Choose a Field</span>
							<span
								className={cx(
									typography.textXs,
									css`
										color: ${colorPalette.airconnexPurple};
									`
								)}
							>
								{refreshIcon("w-5 h-5 inline-flex mr-2")}{" "}
								<div className="mt-1 inline-flex">Refresh</div>
							</span>
						</div>

						<div className="relative mb-4">
							{searchIcon(
								cx(
									"w-4 h-4 absolute mb-5",
									css`
										top: 25%;
										left: 90%;
									`
								)
							)}
							<input
								type="text"
								name="search"
								id="search"
								placeholder="Find..."
								className={cx(
									`w-full placeholder:text-xs placeholder:font-normal placeholder:text-[${colorPalette.darkerGrey}] p h-9 rounded border-none bg-[${colorPalette.superLightGrey}] placeholder:leading-normal placeholder:tracking-wider`
								)}
							/>
						</div>
						<div
							className={cx(
								"mb-4 flex h-9 items-center rounded py-3 px-2",
								customBgColor
							)}
						>
							{typographyIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.almostBlack};
									`
								)}
							>
								Full Name
							</span>
						</div>
						<div className={cx("mb-4 flex h-9 items-center rounded py-3 px-2")}>
							{typographyIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.almostBlack};
									`
								)}
							>
								Address
							</span>
						</div>
						<div className={cx("mb-4 flex h-9 items-center rounded py-3 px-2")}>
							{typographyIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.almostBlack};
									`
								)}
							>
								Phone Number
							</span>
						</div>
						<div className={cx("flex h-9 items-center rounded py-3 px-2")}>
							{typographyIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.almostBlack};
									`
								)}
							>
								Bio
							</span>
						</div>
					</Container>

					<Container widthInPx={320} className={cx("px-5 py-4")}>
						<ContainerHeader
							iconLeft={backIcon("w-6 h-6")}
							iconRight={airTableIconColor("w-6 h-6")}
							textStyles={typography.textM}
							className="mb-6"
						>
							Airtable URL
						</ContainerHeader>

						<p className={cx(typography.textXs, "mb-6")}>
							{successIcon("w-4 h-4 mr-3 inline-flex")} 1 Apps, 1 Tables and 1
							Views added...
						</p>
						<a
							href="https://airtable.com/"
							className={cx(
								typography.textXs,
								css`
									color: rgba(99, 60, 227, 1);
								`,
								"mb-6 block text-center"
							)}
						>
							{"←"} I&apos;m finished
						</a>

						<p className={cx(typography.textXs, "mb-4")}>
							Open{" "}
							<a
								href="https://airtable.com/"
								className={css`
									color: rgba(99, 60, 227, 1);
								`}
							>
								Airtable{" "}
							</a>
							and copy / paste the url for a table to sync.
						</p>
						<div className="relative">
							{successIcon(
								cx(
									"w-4 h-4 absolute",
									css`
										left: 90%;
										top: 10%;
									`
								)
							)}
							<textarea
								className={cx(
									typography.textXs,
									`mb-4 h-20 w-full rounded border-none bg-[${colorPalette.superLightGrey}] pl-2 pr-6 pt-2`,
									css`
										resize: none;
									`
								)}
								defaultValue="https://airtable.com/app1Nz4zLQCJ4ORUr/tbl6Hr0R2fTW1Rt62/viwH5f7P5s9lbyFkV?blocks=hide"
							/>
						</div>
						<a
							href="https://airtable.com/"
							className={cx(
								typography.textXs,
								css`
									color: rgba(99, 60, 227, 1);
								`,
								"mb-6 block text-right"
							)}
						>
							Open in Airtable
						</a>

						<p className={cx(typography.textXs, "mb-6")}>
							{successIcon("w-4 h-4 mr-3 inline-flex")} Base is already
							connected...
						</p>
						<p className={cx(typography.textXs, "mb-6")}>
							{successIcon("w-4 h-4 mr-3 inline-flex")} Table is already
							connected...
						</p>

						<label htmlFor="view" className="mb-10 flex items-center">
							<div className={cx(typography.textS, "w-16 flex-shrink-0")}>
								View
							</div>
							<input
								type="text"
								name="view"
								id="view"
								className={`h-9 flex-grow rounded border-none py-2 px-3 placeholder:text-xs placeholder:font-normal placeholder:text-[${colorPalette.darkerGrey}] bg-[${colorPalette.superLightGrey}] placeholder:leading-normal placeholder:tracking-wider`}
								placeholder="All People"
							/>
						</label>

						<button
							className={cx(
								typography.textM,
								"mb-9 w-full rounded border-none",
								bgAlmostBlack,
								css`
									color: white;
									font-weight: 500;
								`
							)}
						>
							<span>Next</span>
							{cheveronRight("ml-2 w-4 h-4")}
						</button>
					</Container>

					<Container widthInPx={320} className={cx("px-5 py-4")}>
						<ContainerHeader
							iconLeft={backIcon("w-6 h-6")}
							iconRight={notionIcon("w-6 h-6")}
							textStyles={typography.textM}
							className="mb-6"
						>
							Choose Integration
						</ContainerHeader>

						<div className={cx("flex h-9 items-center rounded py-3 px-2")}>
							{hashIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.almostBlack};
									`
								)}
							>
								Mike&apos;s Token
							</span>
						</div>

						<div className={cx("flex h-9 items-center rounded py-3 px-2")}>
							{addIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.airconnexPurple};
									`
								)}
							>
								Add a Token
							</span>
						</div>
					</Container>

					<Container widthInPx={320} className={cx("px-5 py-4")}>
						<ContainerHeader
							iconLeft={backIcon("w-6 h-6")}
							iconRight={notionIcon("w-6 h-6")}
							textStyles={typography.textM}
							className="mb-6"
						>
							New Token
						</ContainerHeader>

						<label
							htmlFor="integration-token"
							className="mb-2 flex items-center"
						>
							<div className={cx(typography.textS, "w-16 flex-shrink-0")}>
								Token
							</div>
							<input
								type="text"
								name="integration-token"
								id="integration-token"
								className={`h-9 flex-grow rounded border-none py-2 px-3 placeholder:text-xs placeholder:font-normal placeholder:text-[${colorPalette.darkerGrey}] bg-[${colorPalette.superLightGrey}] placeholder:leading-normal placeholder:tracking-wider`}
								placeholder="Enter Integration Token..."
							/>
						</label>

						<label htmlFor="token-name" className="mb-2 flex items-center">
							<div className={cx(typography.textS, "w-16 flex-shrink-0")}>
								Label
							</div>
							<input
								type="text"
								name="token-name"
								id="token-name"
								className={`h-9 flex-grow rounded py-2 px-3 placeholder:text-xs placeholder:font-normal placeholder:text-[${colorPalette.darkerGrey}] bg-[${colorPalette.superLightGrey}] border-none placeholder:leading-normal placeholder:tracking-wider`}
								placeholder="Name of Token"
							/>
						</label>

						<p className={cx(typography.textXs, "mt-9 mb-4")}>
							To create an integration token
							<a
								href="https://airtable.com/"
								className={cx(
									css`
										color: rgba(99, 60, 227, 1);
									`,
									"font-bold"
								)}
							>
								{" "}
								click here.
							</a>
						</p>
					</Container>

					<Container widthInPx={320} className={cx("px-5 py-4")}>
						<ContainerHeader
							iconLeft={backIcon("w-6 h-6")}
							iconRight={notionIcon("w-6 h-6")}
							textStyles={typography.textM}
							className="mb-6"
						>
							Choose Tables
						</ContainerHeader>

						<div className={cx("flex h-9 items-center rounded py-3 px-2")}>
							{externalLinkIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.almostBlack};
									`
								)}
							>
								Quick Start
							</span>
						</div>
						<div className={cx("flex h-9 items-center rounded py-3 px-2")}>
							<div>
								{externalLinkIcon("inline-flex w-4 h-6 mr-4")}
								<span
									className={cx(
										typography.textS,
										css`
											color: ${colorPalette.almostBlack};
										`
									)}
								>
									My Documents
								</span>
							</div>
							<div className="flex flex-grow justify-end">
								{circledSuccess("text-right inline-flex w-4 h-6")}
							</div>
						</div>
						<div className={cx("flex h-9 items-center rounded py-3 px-2")}>
							{externalLinkIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.almostBlack};
									`
								)}
							>
								References
							</span>
						</div>
						<div className={cx("flex h-9 items-center rounded py-3 px-2")}>
							{externalLinkIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.almostBlack};
									`
								)}
							>
								Quick Start
							</span>
						</div>
						<div
							className={cx(
								"flex h-9 items-center rounded py-3 px-2",
								customBgColor
							)}
						>
							{externalLinkIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.almostBlack};
									`
								)}
							>
								My Documents
							</span>

							<div className="flex flex-grow justify-end">
								{circledSuccess("text-right inline-flex w-4 h-6")}
							</div>
						</div>
						<div className={cx("flex h-9 items-center rounded py-3 px-2")}>
							{externalLinkIcon("inline-flex w-4 h-6 mr-4")}
							<span
								className={cx(
									typography.textS,
									css`
										color: ${colorPalette.almostBlack};
									`
								)}
							>
								References
							</span>
						</div>
					</Container>

					<Container widthInPx={320} className={cx("px-6 py-6")}>
						<LinksHeader />

						<button
							className={cx(
								typography.textS,
								`my-8 w-full rounded border-none`,
								css`
									background-color: ${colorPalette.airconnexPurple};
								`,
								css`
									color: white;
									font-weight: 500;
								`
							)}
						>
							{playIcon("mr-2 w-4 h-4")}
							<span>Publish</span>
						</button>
						<p className={cx("mb-5 flex items-center justify-between")}>
							<span className={cx(typography.textS)}>
								Open the latest version...
							</span>
							{externalLinkIcon("w-5 h-5")}
						</p>
						<p className={cx(typography.textXs, "mb-5")}>
							Deploy a public snapshot of your website, or compare previous
							branches to make design decisions.
						</p>
						<p className={cx("mb-5 flex items-center justify-between")}>
							<span className={cx(typography.textS)}>Enable Previews</span>
							<button className="border-none">
								{toggleIconDisabled("w-7 h-4")}
							</button>
						</p>
						<p
							className={cx(
								typography.textXs,
								`solid mb-5 border-b pb-4 border-[${colorPalette.superLightGrey}]`
							)}
						>
							Turn of to disable all shared preview links and snapshots so that
							this project is only visible on custom domains.
						</p>

						<h3 className={cx(typography.textS)}>Versions</h3>

						{cardDetails.map((card, i) => (
							<Card
								key={i}
								initials={card.initials}
								date={card.date}
								creator={card.creator}
								initialsStyles={
									card.initialsStyles
										? card.initialsStyles
										: css`
												background-color: ${colorPalette.teal700};
										  `
								}
								cardStyles={cx("px-4 py-5")}
							/>
						))}
					</Container>

					<Container widthInPx={290} className="px-6 py-6">
						<Card
							initials={cardDetails[2].initials}
							date={cardDetails[2].date}
							creator={cardDetails[2].creator}
							initialsStyles={
								cardDetails[2].initialsStyles
									? cardDetails[2].initialsStyles
									: ""
							}
							cardStyles={cx("border-none px-0 mb-6")}
						/>
						<hr
							className={cx(
								css`
									color: ${colorPalette.superLightGrey};
								`,
								"mb-6"
							)}
						/>
						<p className={cx(typography.textXs, "mb-5")}>
							Created Friday, 24th May 2022 09:02:23 PM (CT)
						</p>
						{[
							"Open Snapshot...",
							"Copy Link...",
							"Restore Snapshot",
							"Delete Snapshot",
						].map((element, i) => (
							<CustomLink key={i} text={element} />
						))}
					</Container>

					<Container widthInPx={320} className={cx("px-6 py-6")}>
						<LinksHeader highlightedLink={2} />

						<p className={cx("mt-8 mb-5 flex items-center justify-between")}>
							<span className={cx(typography.textS)}>Access Tokens</span>
							<button className="border-none">
								{toggleIconDisabled("w-7 h-4")}
							</button>
						</p>

						<p className={cx(typography.textXs, "mb-4")}>
							Create tokens that allow anyone with the link to login as users
							and access portals within the project.
						</p>

						{userDetails.map((user, i) => (
							<Card
								key={i}
								initials={user.initials}
								date={user.name}
								creator={user.accessRights}
								icon={user.icon ? user.icon : undefined}
								avatarLink={user.avatarLink ? user.avatarLink : undefined}
								cardStyles={cx("px-4 py-5")}
								initialsStyles={
									user.initialsStyles ? user.initialsStyles : undefined
								}
							/>
						))}
						<CustomButton
							text="New Token"
							buttonStyles={cx(css`
								background-color: ${colorPalette.almostBlack};
							`)}
							textStyles={cx(
								css`
									color: white;
									font-weight: 400;
								`
							)}
							iconLeft={addIcon(
								cx(
									"w-4 h-4 mr-2",
									css`
										margin-bottom: 1px;
									`
								),
								"#FFFFFF"
							)}
						/>
					</Container>

					<Container widthInPx={290} className={cx("px-6 py-6")}>
						<Card
							initials={userDetails[2].initials}
							date={userDetails[2].name}
							creator={userDetails[2].accessRights}
							initialsStyles={
								userDetails[2].initialsStyles
									? userDetails[2].initialsStyles
									: ""
							}
							cardStyles={cx("border-none px-0 mb-6")}
							avatarLink={
								userDetails[2].avatarLink
									? userDetails[2].avatarLink
									: undefined
							}
						/>
						<hr
							className={cx(
								css`
									color: ${colorPalette.superLightGrey};
								`,
								"mb-6"
							)}
						/>
						<p className={cx(typography.textXs, "mb-4")}>
							Created Friday, 24th May 2022 09:02:23 PM (CT)
						</p>
						<p className={cx(typography.textXs, "mb-6")}>By Kevin Martinez</p>
						<p className={cx(typography.textS, "mb-6")}>
							Access to the latest version...
						</p>
						{["Open Link...", "Copy Link...", "Delete Link"].map(
							(element, i) => (
								<CustomLink key={i} text={element} />
							)
						)}
					</Container>

					<Container widthInPx={320} className={cx("px-6 py-6")}>
						<LinksHeader highlightedLink={3} />

						<p className={cx("mt-8 mb-5 flex items-center justify-between")}>
							<span className={cx(typography.textS)}>Custom Domains</span>
						</p>

						<p className={cx(typography.textXs, "mb-4")}>
							Add custom domains to your project by connecting from your domain
							registrar.
						</p>

						{domainDetails.map((domain, i) => (
							<Card
								key={i}
								initials={domain.initials}
								date={domain.name}
								creator={domain.status}
								avatarLink={domain.avatarLink ? domain.avatarLink : undefined}
								cardStyles={cx("px-4 py-5")}
								initialsStyles={
									domain.initialsStyles ? domain.initialsStyles : undefined
								}
							/>
						))}
						<CustomButton
							text="New Token"
							buttonStyles={cx(css`
								background-color: ${colorPalette.almostBlack};
							`)}
							textStyles={cx(
								css`
									color: white;
									font-weight: 400;
								`
							)}
							iconLeft={addIcon(
								cx(
									"w-4 h-4 mr-2",
									css`
										margin-bottom: 1px;
									`
								),
								"#FFFFFF"
							)}
						/>
					</Container>
				</main>
			</div>
		</>
	);
}
