
export interface Column {
    header: string
    accessor?: string
    action?: boolean
    type?: 'text' | 'image'
}


export const useTable = ({ data = [], columns = [] }: { data?: Array<any>, columns?: Column[] }) => {

    const accesors: Array<any> = []
    const header: Array<any> = []

    columns.forEach(({ accessor, header: _header }) => {
        accesors.push(accessor || "");
        header.push(_header || "")
    });
    header.push("")

    const rows = data.map((rows) => {
        const cells: Array<any> = []
        const id = rows['id'];
        let image: string = '';

        // плохое решение
        for (const accesor of accesors) {
            if (accesor === 'img_url') {
                image = rows[accesor];
                continue;
            } else {
                cells.push(rows[accesor])
                continue;
            }
        }

        return {
            cells,
            image,
            id
        }
    })

    return {
        rows,
        accesors,
        header
    }
}
