// styled-component
import { BlackCenterTitle } from "../styled-component/Title";

export const ObjectOrientation = () => {
  return (
    <div>
      <BlackCenterTitle>
        Creating module for reuseable methods/components
      </BlackCenterTitle>
      <div className="text-left">
        <span>
          There must have some methods and components which could be re-used in
          your code. They are the points that you could optimise your code.
        </span>
        <br />
        <br />
        <span>
          For example, as a human, we have two arms. They both have the
          following functions:
        </span>
        <ol>
          <li>Lifting the arm</li>
          <li>Putting down the arm</li>
          <li>Tensing muscle</li>
        </ol>
        <span>
          So that, we can make arm as a arm compoennt. In this component, we
          have 3 functions above.
        </span>
        <h3>What are the good points of it?</h3>
        <ol>
          <li>
            We don't have to create 3 similar but diffent scripts/CSS. This can
            reduce the size of the program development project itself.{" "}
          </li>
          <li>The follow-up developer could easilyunderstand the code.</li>
          <li>File system could be much cleaner.</li>
        </ol>
        <h3>What are the issue of it?</h3>
        <ol>
          <li>
            When the component was developed and used in the project, the
            further development will get harder. Because the developer have to
            consider about the affect of modify the component.
          </li>
          <li>
            It required more experiences to be awared on the reuseable component
          </li>
          <li>
            While developing the component, it had to be able to cover as much
            usage as possible.
          </li>
        </ol>
      </div>
    </div>
  );
};
