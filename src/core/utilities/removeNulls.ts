/* eslint-disable @typescript-eslint/no-unused-vars */
export function removeNulls<T>(obj: T): T | undefined {
	if (obj && typeof obj === 'object') {
		if (Array.isArray(obj)) {
			// Filtra los elementos en arrays y limpia cada uno
			const filteredArray = obj
				.map((item) => removeNulls(item))
				.filter((item) => item !== undefined && item !== null);

			return filteredArray.length > 0 ? (filteredArray as unknown as T) : undefined;
		} else {
			// Limpia propiedades en objetos
			const cleanedObject = Object.fromEntries(
				Object.entries(obj)
					.map(([key, value]) => [key, removeNulls(value)])
					.filter(([_, value]) => value !== undefined && value !== null),
			) as T;

			return Object.keys(cleanedObject as object).length > 0 ? cleanedObject : undefined;
		}
	}
	return obj;
}
