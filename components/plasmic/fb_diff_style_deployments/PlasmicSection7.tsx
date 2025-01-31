// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: m7fbwwwhvmCQvGDQZtaomB
// Component: -XAZUcb0HwCo

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { ThemeValue, useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: I4QQYc_H8onv/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: m7fbwwwhvmCQvGDQZtaomB/projectcss
import sty from "./PlasmicSection7.module.css"; // plasmic-import: -XAZUcb0HwCo/css

createPlasmicElementProxy;

export type PlasmicSection7__VariantMembers = {};
export type PlasmicSection7__VariantsArgs = {};
type VariantPropType = keyof PlasmicSection7__VariantsArgs;
export const PlasmicSection7__VariantProps = new Array<VariantPropType>();

export type PlasmicSection7__ArgsType = {};
type ArgPropType = keyof PlasmicSection7__ArgsType;
export const PlasmicSection7__ArgProps = new Array<ArgPropType>();

export type PlasmicSection7__OverridesType = {
  section7?: Flex__<"section">;
  freeBox?: Flex__<"div">;
  subHeading5?: Flex__<"h2">;
  line3?: Flex__<"div">;
  columns?: Flex__<"div">;
  blockChapterContent?: Flex__<"div">;
  blockChapterContent4?: Flex__<"div">;
  blockChapterContent2?: Flex__<"div">;
  blockChapterContent3?: Flex__<"div">;
};

export interface DefaultSection7Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSection7__RenderFunc(props: {
  variants: PlasmicSection7__VariantsArgs;
  args: PlasmicSection7__ArgsType;
  overrides: PlasmicSection7__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <section
      data-plasmic-name={"section7"}
      data-plasmic-override={overrides.section7}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.section7,
        {
          [projectcss.global_theme_darkGrayscale]: hasVariant(
            globalVariants,
            "theme",
            "darkGrayscale"
          ),
          [projectcss.global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [projectcss.global_theme_grayscale]: hasVariant(
            globalVariants,
            "theme",
            "grayscale"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <h2
          data-plasmic-name={"subHeading5"}
          data-plasmic-override={overrides.subHeading5}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.subHeading5
          )}
        >
          {"Who should take this course?"}
        </h2>
        <div
          data-plasmic-name={"line3"}
          data-plasmic-override={overrides.line3}
          className={classNames(projectcss.all, sty.line3)}
        />
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__j6V0C)}>
          <div
            data-plasmic-name={"blockChapterContent"}
            data-plasmic-override={overrides.blockChapterContent}
            className={classNames(projectcss.all, sty.blockChapterContent)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__z7VXd
              )}
            >
              {"Marketers"}
            </div>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__woUo0
              )}
            >
              {"Learn how all of the marketing pieces fit together"}
            </li>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__srTe8
              )}
            >
              {"Master digital marketing for any business"}
            </li>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__voI3Z
              )}
            >
              {"Get access to marketing gurus and their tips"}
            </li>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__rwSpg
              )}
            >
              {"Prepare killer presentations and collateral"}
            </li>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.column__lxw4Z)}>
          <div
            data-plasmic-name={"blockChapterContent4"}
            data-plasmic-override={overrides.blockChapterContent4}
            className={classNames(projectcss.all, sty.blockChapterContent4)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wC26N
              )}
            >
              {"Product managers"}
            </div>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__pKiet
              )}
            >
              {"Understand the context of your product work"}
            </li>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__yqrAo
              )}
            >
              {"Learn how to segment your audience properly"}
            </li>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__f7Mek
              )}
            >
              {"Implement brand voice and style in your work"}
            </li>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__bIm2M
              )}
            >
              {"Connect top of funnel activities with your flow"}
            </li>
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.column__gnqOm)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___7QfLh
            )}
          >
            {"Designers"}
          </div>
          <li
            className={classNames(projectcss.all, projectcss.li, sty.li__qE0I)}
          >
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__dkRL
              )}
            >
              {"Learn how your design can inspire action"}
            </li>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aLc2Q
              )}
            >
              {"Gain big picture insights that affect design"}
            </div>
            <div
              data-plasmic-name={"blockChapterContent2"}
              data-plasmic-override={overrides.blockChapterContent2}
              className={classNames(projectcss.all, sty.blockChapterContent2)}
            >
              <li
                className={classNames(
                  projectcss.all,
                  projectcss.li,
                  projectcss.__wab_text,
                  sty.li___0Xqsb
                )}
              >
                {"Make advertisements that convert"}
              </li>
              <li
                className={classNames(
                  projectcss.all,
                  projectcss.li,
                  projectcss.__wab_text,
                  sty.li__yhkH8
                )}
              >
                {"Create digital assets for the right audience"}
              </li>
            </div>
          </li>
        </div>
        <div className={classNames(projectcss.all, sty.column__xHkRq)}>
          <div
            data-plasmic-name={"blockChapterContent3"}
            data-plasmic-override={overrides.blockChapterContent3}
            className={classNames(projectcss.all, sty.blockChapterContent3)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7EQVk
              )}
            >
              {"Business owners"}
            </div>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__loMsC
              )}
            >
              {"Kickstart your marketing plan and efforts"}
            </li>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__hzh4B
              )}
            >
              {"Upgrade your brand, website and social media"}
            </li>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li__kiIwb
              )}
            >
              {"Prepare effective collateral for your business"}
            </li>
            <li
              className={classNames(
                projectcss.all,
                projectcss.li,
                projectcss.__wab_text,
                sty.li___7VSoP
              )}
            >
              {"Start advertising your company online"}
            </li>
          </div>
        </div>
      </Stack__>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  section7: [
    "section7",
    "freeBox",
    "subHeading5",
    "line3",
    "columns",
    "blockChapterContent",
    "blockChapterContent4",
    "blockChapterContent2",
    "blockChapterContent3"
  ],
  freeBox: ["freeBox", "subHeading5", "line3"],
  subHeading5: ["subHeading5"],
  line3: ["line3"],
  columns: [
    "columns",
    "blockChapterContent",
    "blockChapterContent4",
    "blockChapterContent2",
    "blockChapterContent3"
  ],
  blockChapterContent: ["blockChapterContent"],
  blockChapterContent4: ["blockChapterContent4"],
  blockChapterContent2: ["blockChapterContent2"],
  blockChapterContent3: ["blockChapterContent3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  section7: "section";
  freeBox: "div";
  subHeading5: "h2";
  line3: "div";
  columns: "div";
  blockChapterContent: "div";
  blockChapterContent4: "div";
  blockChapterContent2: "div";
  blockChapterContent3: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSection7__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSection7__VariantsArgs;
    args?: PlasmicSection7__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSection7__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSection7__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSection7__ArgProps,
          internalVariantPropNames: PlasmicSection7__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSection7__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "section7") {
    func.displayName = "PlasmicSection7";
  } else {
    func.displayName = `PlasmicSection7.${nodeName}`;
  }
  return func;
}

export const PlasmicSection7 = Object.assign(
  // Top-level PlasmicSection7 renders the root element
  makeNodeComponent("section7"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    subHeading5: makeNodeComponent("subHeading5"),
    line3: makeNodeComponent("line3"),
    columns: makeNodeComponent("columns"),
    blockChapterContent: makeNodeComponent("blockChapterContent"),
    blockChapterContent4: makeNodeComponent("blockChapterContent4"),
    blockChapterContent2: makeNodeComponent("blockChapterContent2"),
    blockChapterContent3: makeNodeComponent("blockChapterContent3"),

    // Metadata about props expected for PlasmicSection7
    internalVariantProps: PlasmicSection7__VariantProps,
    internalArgProps: PlasmicSection7__ArgProps
  }
);

export default PlasmicSection7;
/* prettier-ignore-end */
