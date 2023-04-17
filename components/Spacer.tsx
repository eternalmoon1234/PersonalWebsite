import { FC } from "react";

interface SpacerProps {
  height?: string;
}

export const Spacer: FC<SpacerProps> = ({ height }) => (
  <div style={{ height: `${height ? height : "10px"}` }} />
);
