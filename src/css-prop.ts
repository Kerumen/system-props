import * as CSS from 'csstype';
import {
  AllSystemProps,
  Theme,
  PrefixToken,
  PrefixOptions,
  PrefixDefault,
  TokenScales,
  KeyOf,
} from './types';

interface PropertiesToScales extends Record<keyof CSS.Properties, TokenScales> {
  color: 'colors';
  backgroundColor: 'colors';
  fill: 'colors';
  stroke: 'colors';
  opacity: 'colors';
  margin: 'space';
  marginLeft: 'space';
  marginRight: 'space';
  marginBottom: 'space';
  marginTop: 'space';
  padding: 'space';
  paddingLeft: 'space';
  paddingRight: 'space';
  paddingBottom: 'space';
  paddingTop: 'space';
  top: 'space';
  right: 'space';
  bottom: 'space';
  left: 'space';
  gap: 'space';
  gridGap: 'space';
  gridColumnGap: 'space';
  gridRowGap: 'space';
  fontFamily: 'fonts';
  fontSize: 'fontSizes';
  fontWeight: 'fontWeights';
  lineHeight: 'lineHeights';
  letterSpacing: 'letterSpacings';
  boxShadow: 'shadows';
  textShadow: 'shadows';
  zIndex: 'zIndices';
  height: 'sizes';
  width: 'sizes';
  minWidth: 'sizes';
  minHeight: 'sizes';
  maxWidth: 'sizes';
  maxHeight: 'sizes';
  borderRadius: 'radii';
  borderBottomRightRadius: 'radii';
  borderBottomLeftRadius: 'radii';
  borderTopLeftRadius: 'radii';
  borderTopRightRadius: 'radii';
  borderWidth: 'borderWidths';
  borderTopWidth: 'borderWidths';
  borderRightWidth: 'borderWidths';
  borderBottomWidth: 'borderWidths';
  borderLeftWidth: 'borderWidths';
  borderColor: 'colors';
  borderTopColor: 'colors';
  borderRightColor: 'colors';
  borderBottomColor: 'colors';
  borderLeftColor: 'colors';
  borderStyle: 'borderStyles';
  borderTopStyle: 'borderStyles';
  borderRightStyle: 'borderStyles';
  borderBottomStyle: 'borderStyles';
  borderLeftStyle: 'borderStyles';
  border: 'borders';
  borderTop: 'borders';
  borderRight: 'borders';
  borderBottom: 'borders';
  borderLeft: 'borders';
}

type CSSProperties<
  PrefixOption extends PrefixOptions = PrefixDefault,
  TTheme extends Theme = Theme
> = {
  [K in keyof CSS.Properties]?:
    | (PropertiesToScales[K] extends TokenScales
        ? PrefixToken<PropertiesToScales[K], PrefixOption, TTheme>
        : never)
    | CSS.Properties[K];
};

export type CSSObject<
  PrefixOption extends PrefixOptions = PrefixDefault,
  TTheme extends Theme = Theme
> = CSSProperties<PrefixOption, TTheme> &
  {
    [K in CSS.Pseudos]?: CSSObject<PrefixOption, TTheme>;
  } & {
    [k: string]: CSSObject<PrefixOption, TTheme> | string | number | undefined;
  };
