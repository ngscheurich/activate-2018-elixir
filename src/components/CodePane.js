import React from "react";
import styled from "react-emotion";
import { CodePane } from "spectacle";

const StyledCodePane = styled(CodePane)`
  font-size: 1.2rem;
`;

export default ({ lang, source }) => {
  return (
    <div style={{ borderRadius: 5, border: "5px solid #2a2734" }}>
      <StyledCodePane lang={lang} source={source} />
    </div>
  );
};
