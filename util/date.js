export function getFormattedDate(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensures two digits for month
	const day = String(date.getDate()).padStart(2, '0'); // Ensures two digits for day

	return `${year}-${month}-${day}`;
}

export function getDateMinusDays(date, days) {
	const result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	result.setDate(result.getDate() - days);
	return result;
}
