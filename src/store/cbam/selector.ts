interface Process {
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
