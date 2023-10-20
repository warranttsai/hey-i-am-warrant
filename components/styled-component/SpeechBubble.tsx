import { styled } from "styled-components";

export const SpeechBubbleRight = styled.div`
  font-size: 1.1em;
  color: #fff;
  background: #a53d38;

  position: relative;
  padding: 20px;
  border-radius: 10px;
  margin: 50px auto;
  max-width: 320px;

  &:after {
    /* ATTACH TRANSPARENT BORDERS */
    content: "";
    border: 20px solid transparent;

    /* NECESSARY TO POSITION THE "TAIL" */
    position: absolute;

    /* right triangle */
    border-left-color: #a53d38;
    border-right: 0;
    right: -20px;
    top: 50%;
    margin-top: -20px;
  }
`;
export const SpeechBubbleLeft = styled.div`
  font-size: 1.1em;
  color: #fff;
  background: #a53d38;

  position: relative;
  padding: 20px;
  border-radius: 10px;
  margin: 50px auto;
  max-width: 320px;

  &:after {
    /* ATTACH TRANSPARENT BORDERS */
    content: "";
    border: 20px solid transparent;

    /* NECESSARY TO POSITION THE "TAIL" */
    position: absolute;

    /* (C2-1) LEFT TRIANGLE */
    border-right-color: #a53d38;
    border-left: 0;

    /* (C2-2) POSITION AT LEFT */
    left: -20px;
    top: 50%;
    margin-top: -20px;
  }
`;
