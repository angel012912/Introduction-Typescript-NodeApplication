import dynamodb from '../services/dynamoService';
import joi from 'joi';
import { PREFIX_TABLE } from '../config';

const UserModel = dynamodb.define(`${PREFIX_TABLE}User`, {
    hashKey: 'id',
    timestamps: true,
    schema: {
        id: dynamodb.types.uuid(),
        name: joi.string(),
        email: joi.string().email(),
        password: joi.string(),
        role: joi.string(),
        status: joi.string(),
        createdAt: joi.date().default(Date.now),
        updatedAt: joi.date().default(Date.now),
    },
});