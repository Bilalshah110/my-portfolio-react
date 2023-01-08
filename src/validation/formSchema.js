import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must have atlease 3 letters")
    .max(20, "Name can have maximum 20 letters")
    .required("Name is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required"),
  subject: Yup.string()
    .min(6, "Subject must have atlease 6 characters")
    .max(50, "Subject can have maximum 50 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(6, "Message must have atlease 6 characters")
    .required("Message is required"),
});
