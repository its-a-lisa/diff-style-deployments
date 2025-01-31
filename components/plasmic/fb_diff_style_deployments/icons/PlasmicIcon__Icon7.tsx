// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 800 800"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"var(--token-VG6Vt_9edsnH)"} d={"M0 0h800v800H0z"}></path>

      <circle
        fill={"var(--token-mFlM1WcsoXjo)"}
        cx={"400"}
        cy={"400"}
        r={"600"}
      ></circle>

      <circle
        fill={"var(--token-qkM6jZlfulne)"}
        cx={"400"}
        cy={"400"}
        r={"500"}
      ></circle>

      <circle
        fill={"var(--token-86NyohQD2xKH)"}
        cx={"400"}
        cy={"400"}
        r={"400"}
      ></circle>

      <circle
        fill={"var(--token-pAv40pmBaB2M)"}
        cx={"400"}
        cy={"400"}
        r={"300"}
      ></circle>

      <circle
        fill={"var(--token-Q_uz1U8-jVo8)"}
        cx={"400"}
        cy={"400"}
        r={"200"}
      ></circle>

      <circle
        fill={"var(--tokengsHzmwiDopKs)"}
        cx={"400"}
        cy={"400"}
        r={"100"}
      ></circle>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
