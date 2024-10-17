import { resend } from "../lib/resend";
import VerificationEmail from "../../../emails/VerificationEmail"  // documenation resend.com/docs
import { ApiResponse } from "../types/ApiResponse";

export async function sendVerificationEmail(email: string, username: string, verifyCode: string): Promise<ApiResponse> {
    try {
        // copy the rend email code from doc from to react-email/ or resend email
        // free access to this email from docs ---> onboarding@resend.dev  which we take from the document 
        const data :any = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystery message verification code',
            react: VerificationEmail({ username: username, otp: verifyCode })   // component in which we have created the email template 


        });
        
        return {
            success: true,
            message: 'sent verification email successfully'
        }
    }
    catch (emailError) {
        console.log("Error in sendingVerification ", emailError)
        return {
            success: false,
            message: 'Failed to send verification email'
        }
    }

}