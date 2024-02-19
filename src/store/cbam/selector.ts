interface Emission {
	direct: number
	indirect: number
}

type Id = string

interface Identifiable {
	id: Id
}

interface Process extends Identifiable {
	ad: number
	direm: number
	heat: {
		imported: number
		exported: number
		ef_imported: number
		ef_exported: number
	}
	wg: {
		imported: number
		exported: number
		ef_imported: number
		ef_exported: number
	}
	electricity: {
		imported: number
		ef_imported: number
		ef_source_imported: string
		exported: number
		ef_exported: number
	}
}

interface PurchasedPrecursor extends Identifiable {
	see: Emission
}
