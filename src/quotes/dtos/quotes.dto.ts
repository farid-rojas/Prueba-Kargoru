export class createQuotesDto{
    readonly document: number;
    readonly name: string;
    readonly weigth: string;
    readonly addressSource: string;
    readonly addressDestination: string;
}
export class updateQuotesDto{
    readonly document?: number;
    readonly name?: string;
    readonly weigth?: string;
    readonly addressSource?: string;
    readonly addressDestination?: string;
}