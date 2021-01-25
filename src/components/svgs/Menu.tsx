import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Menu = React.memo((props: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-menu"
      {...props}
    >
      <Path d="M3 12h18M3 6h18M3 18h18" />
    </Svg>
  )
});

export default Menu;
