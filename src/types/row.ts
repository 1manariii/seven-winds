export interface IRowEntity {
    id: number,
    rowName: string,
    salary: number,
    equipmentCosts: number,
    overheads: number,
    estimatedProfit: number,
    child: IRowEntity[] | [],
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    supportCosts: number,
    total: number
}