import mongoose, { Document, Schema, SchemaTypes } from 'mongoose';


export interface Contact {
    email?: string;
    title: string;
    description: string;


}

const SchemaContact = new Schema<Contact>({
    email: {
        type: SchemaTypes.String,
        required: false, 
    },
    title: {
        type: SchemaTypes.String, 
        required: true, 
    },
    description: {
        type: SchemaTypes.String,
        required: true, 
    },


}, { timestamps: true });

const ContactModel = mongoose.models.Contact || mongoose.model<Contact>('Contact', SchemaContact);

export default ContactModel;
