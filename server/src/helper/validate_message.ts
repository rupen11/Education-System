export const baseField = (field: any, type: string) => `${field} should be a type of ${type}`;
export const requiredField = (field: any) => `${field} is a required field`;
export const minField = (field: any, limit: any) => `${field} should have a minimum length of ${limit}`;
export const maxField = (field: any, limit: any) => `${field} should have a maximum length of ${limit}`;
export const lessField = (field: any, anotherField: any) => `${field} must be less than ${anotherField}`;
export const greaterField = (field: any) => `${field} must be greater than 0`;
export const positiveField = (field: any) => `${field} must be a positive number`;
export const patternField = (field: any) => {
    if (field === "password") {
        return `${field} must contain Uuppercase, lowercase, special character and number, length atleast 8 characters`;
    }
    return `${field} must be valid`;
}
export const emptyField = (field: any) => `${field} must not be empty`;