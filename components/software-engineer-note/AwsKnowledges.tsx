// styled-component
import { BlackTitle } from "../styled-component/Title";
// images
import img1 from "../../public/howToEnableCors/1.jpeg";
import img2 from "../../public/howToEnableCors/2.jpeg";
import img3 from "../../public/addingCorsHeaderToYourApiResponseHeader/1.jpeg";
import img4 from "../../public/addingCorsHeaderToYourApiResponseHeader/2.jpeg";
import img5 from "../../public/addingCorsHeaderToYourApiResponseHeader/3.jpeg";

export const HowToEnableCORS = () => {
  return (
    <>
      <BlackTitle>How To Enable CORS</BlackTitle>
      <div className="text-left">
        <ol>
          <li>Log in to your AWS console.</li>
          <li>
            Access the API Gateway and go straight into the resource for your
            function.
          </li>
          <li>Click on the API which you wished to enable the CORS.</li>
          <img src={img1} className="h-100 w-100" />
          <li>Click on the "Enable CORS" button.</li>
          <img src={img2} className="h-100 w-100" />
          <li>Click "Save" and now you are enabled the CORS for your API!</li>
        </ol>
      </div>
    </>
  );
};
export const AddingCorsHeaderToYourApiResponseHeader = () => {
  return (
    <>
      <BlackTitle style={{ fontSize: "2rem" }}>
        Adding CORS Header To Your API Response Header
      </BlackTitle>
      <div className="text-left">
        <ol>
          <li>
            Please adding this code to your API script when you were sending the
            reques.
          </li>

          <li>Click on the API which you wished to enable the CORS.</li>
          <img src={img3} className="h-100 w-100" />
          <img src={img4} className="h-100 w-100" />
          <li>
            You can check your console(inspect) on browser to verify the header
            was applied on your request.
          </li>
          <img src={img5} className="h-100 w-100" />
        </ol>
      </div>
    </>
  );
};
export const EnableSES = () => {
  return (
    <>
      <BlackTitle>
        How to Enable Simple Email Service With Email Address
      </BlackTitle>
      <div className="text-left">
        <ol>
          <li>Access to your SES</li>
          <li>Create identity with your email address.</li>
          <li>Verify your email address.</li>
          <li>Access to your IAM</li>
          <li>
            Click on "Role" and create the role with "AmazonSESFullAccess"
          </li>
          <li>
            Go back to Lambda and assign the role to your Lambda function.
          </li>
          <li>
            Now your Lambda function should be able to send email with the email
            address of the role.
          </li>
        </ol>
      </div>
    </>
  );
};
