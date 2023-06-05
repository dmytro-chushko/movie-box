import { formatMonth } from "./format-month";

export const formatReleasedDate = (date: string): string => {
	const baseDate = new Date(date);
	const month = formatMonth(baseDate.getMonth());
	const year = baseDate.getFullYear();

	return `${month} of ${year}`;
};
