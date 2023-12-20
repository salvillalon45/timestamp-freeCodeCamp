import moment from 'moment';

export const PORT = 3000;

export function mapToObject(map: Map<string, string | number>) {
	return Object.fromEntries(map.entries());
}

export function isDateInputValid(dateInput: string | number | Date) {
	return moment.utc(dateInput).isValid();
}

export function getUnixTimestamp(dateInput: string | number | Date) {
	return moment.utc(dateInput).valueOf();
}

export function getUTCString(dateInput: string | number | Date) {
	return moment.utc(dateInput).format('ddd, D MMM YYYY HH:mm:ss') + ' GMT';
}

export function test(dateInput: string | number | Date) {
	console.log(moment.utc(dateInput));
}
