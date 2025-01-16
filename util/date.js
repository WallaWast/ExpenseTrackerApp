export function getFormattedDate(date) {
	return date.toISOString().slice(0, 10);
}

export function getDateMinusDays(date, days) {
	const result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	result.setDate(result.getDate() - days);
	return result;
}
