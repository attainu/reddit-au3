import React from "react";
import styled from "styled-components/macro";

const Timestamp = styled.span`
  margin-left: 4px;
  color: ${props => props.theme.mutedText};
`;

const CommentDetailTimestamp = props => (
  <Timestamp>{(props.created).fromNow()}</Timestamp>
);

export default CommentDetailTimestamp;
