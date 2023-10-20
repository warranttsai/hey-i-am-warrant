// styled-component
import { BlackCenterTitle } from "../styled-component/Title";

export const DrawImageForFrontEndDesign = () => {
  return (
    <>
      <BlackCenterTitle>
        Draw a image before start developing the front-end page
      </BlackCenterTitle>
      <div className="text-left">
        <ul>
          <li>
            Always drawing a image of your page design before started! It would
            be really easy to change the image comparing to change the project
            page code. Spend a few minutes to draw the blueprint could save much
            time of you to adjust layout on the HTML/CSS.
          </li>
          <li>
            Think about what components could be reused. For example, header,
            footer, uploader, image frame...etc.
          </li>
        </ul>
      </div>
    </>
  );
};

export const EncapsulateYourStyleSheet = () => {
  return (
    <>
      <BlackCenterTitle>Encapsulate your style sheet</BlackCenterTitle>
      <div className="text-left">
        <span>
          SCSS/SASS is a good module to be used in Node to help the developer
          implementing the nested CSS sheet with their requirements. In many of
          the situation, the background, container, border could be re-used. To
          keep the website consistent. Please define variables for colour and
          define global classes for frequently used styles.
        </span>
        <br />
        <br />
        <span>
          Another way of helping implement high quality code of layout, please
          learn how to use the released module like Bootstrap, Material UI or
          ANTD. They are all well-developed module. It saved large amount of
          time to implement the layout with beautiful looking of your
          components.
        </span>
        <br />
        <br />
        <span style={{ color: "red" }}>
          Note: This website was built by Material UI
        </span>
      </div>
    </>
  );
};
