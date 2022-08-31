import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { baseField, emptyField, FailureResponse, greaterField, lessField, maxField, minField, patternField, positiveField, requiredField, responseStatuscode } from '../helper';

const validators = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.empty': emptyField("{#label}"),
            'string.min': minField("{#label}", "{#limit}"),
            'string.max': maxField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.email': "email must be valid email",
            'string.empty': emptyField("{#label}"),
            // 'any.required': requiredField("{#label}")
        }),

    studentsCapacity: Joi.number()
        // .required()
        .positive()
        .messages({
            'number.base': baseField("{#label}", "number"),
            'number.positive': positiveField("{#label}"),
            // 'any.required': requiredField("{#label}")
        }),

    currentStudents: Joi.number()
        // .required()
        .greater(0)
        .less(Joi.ref('studentsCapacity'))
        .messages({
            'number.base': baseField("{#label}", "number"),
            'number.less': lessField("{#label}", "student capacity"),
            'number.greater': greaterField("{#label}"),
            // 'any.required': requiredField("{#label}")
        }),

    courses: Joi.array()
        // .required()
        .messages({
            'array.base': baseField("{#label}", "array"),
            // 'any.required': requiredField("{#label}")
        }),

    colleges: Joi.array()
        // .required()
        .messages({
            'array.base': baseField("{#label}", "array"),
            // 'any.required': requiredField("{#label}")
        }),

    city: Joi.string()
        // .required()
        .min(2)
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.min': minField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    universityState: Joi.string()
        // .required()
        .min(2)
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.min': minField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    website: Joi.string()
        // .required()
        // .pattern(new RegExp('[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)'))
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.pattern.base': patternField("{#label}"),
            // 'any.required': requiredField("{#label}")
        }),

    state: Joi.number()
        // .required()
        .messages({
            'number.base': baseField("{#label}", "number"),
            // 'any.required': requiredField("{#label}")
        }),

    stateCode: Joi.number()
        // .required()
        .messages({
            'number.base': baseField("{#label}", "number"),
            // 'any.required': requiredField("{#label}")
        }),

    password: Joi.string()
        // .required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.empty': emptyField("{#label}"),
            'string.pattern.base': patternField("password"),
            // 'any.required': requiredField("{#label}")
        }),

    confirmPassword: Joi.string()
        .equal(Joi.ref('password'))
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.only': `{#label} does not match`,
            // 'any.required': requiredField("{#label}")
        }),

    courseCode: Joi.number()
        // .required()
        .min(6)
        .messages({
            'number.base': baseField("{#label}", "number"),
            'number.min': minField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    streams: Joi.array()
        // .required()
        .messages({
            'array.base': baseField("{#label}", "array"),
            // 'any.required': requiredField("{#label}")
        }),

    qualifications: Joi.array()
        // .required()
        .messages({
            'array.base': baseField("{#label}", "array"),
            // 'any.required': requiredField("{#label}")
        }),

    permanentAddress: Joi.string()
        // .required()
        .min(10)
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.min': minField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    subject: Joi.string()
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            // 'any.required': requiredField("{#label}")
        }),

    experience: Joi.string()
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            // 'any.required': requiredField("{#label}")
        }),

    joinStudents: Joi.number()
        // .required()
        .positive()
        .messages({
            'number.base': baseField("{#label}", "number"),
            'number.positive': positiveField("{#label}"),
            // 'any.required': requiredField("{#label}")
        }),

    enrollStudents: Joi.number()
        // .required()
        .greater(0)
        .less(Joi.ref('joinStudents'))
        .messages({
            'number.base': baseField("{#label}", "number"),
            'number.greater': greaterField("{#label}"),
            'number.less': lessField("{#label}", "join students"),
            // 'any.required': requiredField("{#label}")
        }),

    startTime: Joi.string()
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            // 'any.required': requiredField("{#label}")
        }),

    endTime: Joi.string()
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            // 'any.required': requiredField("{#label}")
        }),

    reschedule: Joi.boolean()
        // .required()
        .messages({
            'boolean.base': baseField("{#label}", "boolean"),
            // 'any.required': requiredField("{#label}")
        }),

    lectureCode: Joi.number()
        // .required()
        .min(4)
        .messages({
            'number.base': baseField("{#label}", "number"),
            'number.min': minField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    fatherName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.empty': emptyField("{#label}"),
            'string.min': minField("{#label}", "{#limit}"),
            'string.max': maxField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    motherName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.empty': emptyField("{#label}"),
            'string.min': minField("{#label}", "{#limit}"),
            'string.max': maxField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    enrollement: Joi.number()
        // .required()
        .min(12)
        .messages({
            'number.base': baseField("{#label}", "number"),
            'number.empty': emptyField("{#label}"),
            'number.min': minField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    currentStream: Joi.string()
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.empty': emptyField("{#label}"),
            // 'any.required': requiredField("{#label}")
        }),

    currentSemester: Joi.number()
        // .required()
        .less(9)
        .greater(0)
        .messages({
            'number.base': baseField("{#label}", "number"),
            'number.empty': emptyField("{#label}"),
            'number.less': lessField("{#label}", "{#limit}"),
            'number.greater': greaterField("{#label}"),
            // 'any.required': requiredField("{#label}")
        }),

    previousDetails: Joi.object()
        .messages({
            'object.base': baseField("{#label}", "object"),
            // 'any.required': requiredField("{#label}")
        }),

    designation: Joi.string()
        // .required()
        .min(3)
        .max(20)
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.empty': emptyField("{#label}"),
            'string.min': minField("{#label}", "{#limit}"),
            'string.max': maxField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    role: Joi.number()
        // .required()
        // .enum([1, 2, 3])
        .messages({
            'number.base': baseField("{#label}", "number"),
            'number.empty': emptyField("{#label}"),
            // 'any.required': requiredField("{#label}")
        }),

    phone: Joi.number()
        // .required()
        .min(10)
        .messages({
            'number.base': baseField("{#label}", "number"),
            'number.empty': emptyField("{#label}"),
            'number.min': minField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    address: Joi.string()
        // .required()
        .min(10)
        .messages({
            'string.base': baseField("{#label}", "text"),
            'string.empty': emptyField("{#label}"),
            'string.min': minField("{#label}", "{#limit}"),
            // 'any.required': requiredField("{#label}")
        }),

    dateOfBirth: Joi.string()
        // .required()
        .messages({
            'string.base': baseField("{#label}", "text"),
            // 'any.required': requiredField("{#label}")
        }),

    subjects: Joi.array()
        // .required()
        .messages({
            'array.base': baseField("{#label}", "array"),
            // 'any.required': requiredField("{#label}")
        }),

    adminId: Joi.string(),
    universityId: Joi.string(),
    collegeId: Joi.string(),
    courseId: Joi.string(),
    facultyId: Joi.string(),
});

export const validateBody = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error } = validators.validate(req.body);
        if (error?.details === undefined) next();
        else FailureResponse(responseStatuscode.internalServerError, error?.details[0].message, res);
    }
    catch (error) {
        FailureResponse(responseStatuscode.badRequest, (error as Error).message, res);
    }
}
