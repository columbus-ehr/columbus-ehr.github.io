export enum ExamFieldType {
    None = 'none',
    Number = 'number',
    String = 'text',
    Boolean = 'checkbox',
}
export const examFieldsToStrings: { [key in keyof typeof ExamFieldType]: string } = {
    None: 'Select Option',
    Number: 'Quantitative (number)',
    String: 'Qualitative (string',
    Boolean: 'True or False'
}
export interface ExamField {
    name: string,
    type: ExamFieldType,
    units: string,
}
// export interface ExamFieldWithNumber extends ExamField {
//     type: ExamFieldType.Number,
//     units: string,
// }
export const blankExamField: () => ExamField = () => ({
    name: '',
    type: ExamFieldType.None,
    units: '',
})
