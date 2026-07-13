export type ConverterDataType = Record<string, {
    label: string,
    units: {
        name: string,
        from: string,
        to: string,
        scenario: string,
        formula: string,
        AtoB: (v: number) => number,
        BtoA: (v: number) => number,
    }[]
}>
