import React from "react";
import ReactLoading from "react-loading";
import styled from "tachyons-components";
// import "./styles.css";

export const Section = styled("div")`
flex flex-wrap content-center justify-center w-100 h-100 bg-blue`;

export const Article = styled("div")`
w-25 ma2 h4 items-center justify-center flex flex-column flex-wrap`;

export const list = [
  {
    prop: "bars",
    name: "Bars",
  },
];

const Loader = () => (
  <Section>
    {list.map((l) => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="#fff" />
      </Article>
    ))}
  </Section>
);

export default Loader;
