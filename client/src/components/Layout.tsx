import { ReactNode } from "react";
import { Box } from '../../styles/layoutStyle';

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Box>
        {children}
      </Box>
    </>
  );
}