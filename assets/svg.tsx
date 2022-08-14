import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path, Circle, Image, Defs, Use, Pattern } from "react-native-svg";

type SvgIconProps = {
  color: string;
  size: number;
  style?: StyleProp<ViewStyle>;
};

export const VaultIcon = ({ color, size }: SvgIconProps) => {
  return (
    <Svg width="17" height="16" viewBox="0 0 17 16" fill="none">
      <Path
        d="M9.33333 8.38677V9.70677C9.33333 10.1668 8.96 10.5401 8.5 10.5401C8.04 10.5401 7.66667 10.1668 7.66667 9.70677V8.38677C7.42667 8.2401 7.24 8.02677 7.10667 7.77344H2.5C2.13334 7.77344 1.83334 8.07344 1.83334 8.4401V10.7934C1.83334 12.9334 3.56667 14.6668 5.70667 14.6668H11.2867C13.4333 14.6668 15.1667 12.9334 15.1667 10.7934V8.4401C15.1667 8.07344 14.8667 7.77344 14.5 7.77344H9.89333C9.76 8.02677 9.57333 8.2401 9.33333 8.38677Z"
        fill={color}
      />
      <Path
        d="M11.2933 1.33398H5.70667C3.56667 1.33398 1.83334 3.06732 1.83334 5.20732V6.10732C1.83334 6.47398 2.13334 6.77398 2.5 6.77398H6.94667C7.1 5.89398 7.97334 5.26732 8.92667 5.52065C9.46 5.66065 9.89333 6.09398 10.0333 6.62732C10.0467 6.67398 10.0467 6.72732 10.0533 6.77398H14.5C14.8667 6.77398 15.1667 6.47398 15.1667 6.10732V5.20732C15.1667 3.06732 13.4333 1.33398 11.2933 1.33398Z"
        fill={color}
      />
    </Svg>
  );
};

export const HomeIcon = ({ color, size }: SvgIconProps) => {
  return (
    <Svg width="15" height="14" viewBox="0 0 15 14" fill="none">
      <Path
        d="M13.3867 4.33999L9.02002 0.846659C8.16668 0.166659 6.83335 0.159992 5.98668 0.839992L1.62002 4.33999C0.993349 4.83999 0.613349 5.83999 0.746683 6.62666L1.58668 11.6533C1.78002 12.78 2.82668 13.6667 3.96668 13.6667H11.0333C12.16 13.6667 13.2267 12.76 13.42 11.6467L14.26 6.61999C14.38 5.83999 14 4.83999 13.3867 4.33999ZM8.00002 11C8.00002 11.2733 7.77335 11.5 7.50002 11.5C7.22668 11.5 7.00002 11.2733 7.00002 11V8.99999C7.00002 8.72666 7.22668 8.49999 7.50002 8.49999C7.77335 8.49999 8.00002 8.72666 8.00002 8.99999V11Z"
        fill={color}
      />
    </Svg>
  );
};



export const PaymentsIcon = ({ color, size }: SvgIconProps) => {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <Path
        d="M0.833313 3.66668V13C0.833313 13.5533 1.45998 13.8667 1.89998 13.5333L3.03998 12.68C3.30665 12.48 3.67998 12.5067 3.91998 12.7467L5.02665 13.86C5.28665 14.12 5.71331 14.12 5.97331 13.86L7.09331 12.74C7.32665 12.5067 7.69998 12.48 7.95998 12.68L9.09998 13.5333C9.53998 13.86 10.1666 13.5467 10.1666 13V1.66668C10.1666 0.933344 10.7666 0.333344 11.5 0.333344H4.16665H3.49998C1.49998 0.333344 0.833313 1.52668 0.833313 3.00001V3.66668Z"
        fill={color}
      />
      <Path
        d="M11.5067 0.333344V1.33334C11.9467 1.33334 12.3667 1.51334 12.6734 1.81334C12.9934 2.14001 13.1667 2.56001 13.1667 3.00001V4.61334C13.1667 5.10668 12.9467 5.33334 12.4467 5.33334H11.1667V1.67334C11.1667 1.48668 11.32 1.33334 11.5067 1.33334V0.333344ZM11.5067 0.333344C10.7667 0.333344 10.1667 0.933344 10.1667 1.67334V6.33334H12.4467C13.5 6.33334 14.1667 5.66668 14.1667 4.61334V3.00001C14.1667 2.26668 13.8667 1.60001 13.3867 1.11334C12.9 0.633344 12.24 0.34001 11.5067 0.333344C11.5067 0.333344 11.5134 0.333344 11.5067 0.333344Z"
        fill={color}
      />
    </Svg>
  );
};

export const SettingsIcon = ({ color, size }: SvgIconProps) => {
  return (
    <Svg width="15" height="13" viewBox="0 0 15 13" fill="none">
      <Path
        d="M12.9 4.64666C11.6933 4.64666 11.2 3.79333 11.8 2.74666C12.1466 2.14 11.94 1.36666 11.3333 1.02L10.18 0.359998C9.65331 0.046665 8.97331 0.233332 8.65998 0.759998L8.58665 0.886665C7.98665 1.93333 6.99998 1.93333 6.39331 0.886665L6.31998 0.759998C6.01998 0.233332 5.33998 0.046665 4.81331 0.359998L3.65998 1.02C3.05331 1.36666 2.84665 2.14667 3.19331 2.75333C3.79998 3.79333 3.30665 4.64666 2.09998 4.64666C1.40665 4.64666 0.833313 5.21333 0.833313 5.91333V7.08666C0.833313 7.78 1.39998 8.35333 2.09998 8.35333C3.30665 8.35333 3.79998 9.20666 3.19331 10.2533C2.84665 10.86 3.05331 11.6333 3.65998 11.98L4.81331 12.64C5.33998 12.9533 6.01998 12.7667 6.33331 12.24L6.40665 12.1133C7.00665 11.0667 7.99331 11.0667 8.59998 12.1133L8.67331 12.24C8.98665 12.7667 9.66665 12.9533 10.1933 12.64L11.3466 11.98C11.9533 11.6333 12.16 10.8533 11.8133 10.2533C11.2066 9.20666 11.7 8.35333 12.9066 8.35333C13.6 8.35333 14.1733 7.78666 14.1733 7.08666V5.91333C14.1666 5.22 13.6 4.64666 12.9 4.64666ZM7.49998 8.66666C6.30665 8.66666 5.33331 7.69333 5.33331 6.5C5.33331 5.30666 6.30665 4.33333 7.49998 4.33333C8.69331 4.33333 9.66665 5.30666 9.66665 6.5C9.66665 7.69333 8.69331 8.66666 7.49998 8.66666Z"
        fill={color}
      />
    </Svg>
  );
};

export const ProfileIcon = ({ color, size }: SvgIconProps) => {
  return (
    <Svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <Circle cx="8.5" cy="8.5" r="8" fill="#D9D9D9" />
      <Circle cx="8.5" cy="8.5" r="8" fill="url(#pattern0)" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <Use href="#image0_1093_6630" transform="translate(-0.25) scale(0.003125)" />
        </Pattern>
        <Image href={require("../assets/images/logo/lightning-bolt.png")} width="480" height="320" />
      </Defs>
    </Svg>
  );
};

export const QRCodeIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.5 7V9C10.5 10 10 10.5 9 10.5H7C6 10.5 5.5 10 5.5 9V7C5.5 6 6 5.5 7 5.5H9C10 5.5 10.5 6 10.5 7Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.5 7V9C18.5 10 18 10.5 17 10.5H15C14 10.5 13.5 10 13.5 9V7C13.5 6 14 5.5 15 5.5H17C18 5.5 18.5 6 18.5 7Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.5 15V17C10.5 18 10 18.5 9 18.5H7C6 18.5 5.5 18 5.5 17V15C5.5 14 6 13.5 7 13.5H9C10 13.5 10.5 14 10.5 15Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.5 15V17C18.5 18 18 18.5 17 18.5H15C14 18.5 13.5 18 13.5 17V15C13.5 14 14 13.5 15 13.5H17C18 13.5 18.5 14 18.5 15Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const SelectArrow = () => {
  return (
    <Svg width="14" height="8" viewBox="0 0 14 8" fill="none">
      <Path
        d="M12.8334 1.08333L7.00008 6.91666L1.16675 1.08333"
        stroke="#2A9E17"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const BackIcon = () => {
  return (
    <Svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <Path
        d="M6.83333 12.6667L1 6.83333L6.83333 1"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const AppleIcon = () => {
  return (
    <Svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <Path
        d="M15.344 14.0277C15.0718 14.6565 14.7495 15.2354 14.3762 15.7676C13.8674 16.4932 13.4507 16.9954 13.1296 17.2742C12.6318 17.732 12.0985 17.9664 11.5274 17.9798C11.1174 17.9798 10.623 17.8631 10.0475 17.6265C9.47005 17.3909 8.9394 17.2742 8.45419 17.2742C7.94532 17.2742 7.39956 17.3909 6.8158 17.6265C6.23115 17.8631 5.76016 17.9864 5.40006 17.9987C4.85242 18.022 4.30654 17.7809 3.76167 17.2742C3.41391 16.9709 2.97892 16.4509 2.45783 15.7143C1.89873 14.9276 1.43908 14.0155 1.07898 12.9755C0.693327 11.8522 0.5 10.7644 0.5 9.71136C0.5 8.50506 0.760658 7.46465 1.28275 6.59279C1.69307 5.89248 2.23894 5.34005 2.92214 4.9345C3.60535 4.52896 4.34354 4.3223 5.13852 4.30908C5.5735 4.30908 6.14393 4.44363 6.8528 4.70807C7.55966 4.97339 8.01354 5.10794 8.21253 5.10794C8.3613 5.10794 8.86551 4.95061 9.72026 4.63696C10.5286 4.34608 11.2108 4.22564 11.7696 4.27308C13.284 4.3953 14.4218 4.99228 15.1784 6.0678C13.824 6.88845 13.154 8.03785 13.1674 9.51237C13.1796 10.6609 13.5962 11.6166 14.4151 12.3755C14.7862 12.7277 15.2006 12.9999 15.6617 13.1933C15.5617 13.4832 15.4562 13.761 15.344 14.0277ZM11.8707 0.360309C11.8707 1.26051 11.5419 2.10103 10.8863 2.87901C10.0952 3.80387 9.13839 4.3383 8.10076 4.25397C8.08753 4.14597 8.07987 4.03231 8.07987 3.91287C8.07987 3.04867 8.45608 2.12381 9.12417 1.36761C9.45771 0.984734 9.88192 0.666377 10.3963 0.412418C10.9097 0.162247 11.3952 0.0238978 11.8519 0.000205994C11.8652 0.120549 11.8707 0.2409 11.8707 0.360297V0.360309Z"
        fill="white"
      />
    </Svg>
  );
};

export const DataIcon = ({style}:{style?:{}}) => {
  return (
    <Svg style={style} width="14" height="12" viewBox="0 0 14 12" fill="none">
      <Path
        d="M10.1 0.573242H5.60667V2.58658C5.60667 2.84658 5.39334 3.05324 5.14001 3.05324C4.88667 3.05324 4.67334 2.84658 4.67334 2.58658V0.573242H3.90001C1.26667 0.573242 0.400007 1.35991 0.340007 3.81991C0.333341 3.93991 0.386674 4.06658 0.473341 4.15324C0.560007 4.24658 0.673341 4.29324 0.806674 4.29324C1.74001 4.29324 2.50667 5.06658 2.50667 5.99991C2.50667 6.93324 1.74001 7.70658 0.806674 7.70658C0.680007 7.70658 0.560007 7.75324 0.473341 7.84658C0.386674 7.93324 0.333341 8.05991 0.340007 8.17991C0.400007 10.6399 1.26667 11.4266 3.90001 11.4266H4.67334V9.41324C4.67334 9.15324 4.88667 8.94658 5.14001 8.94658C5.39334 8.94658 5.60667 9.15324 5.60667 9.41324V11.4266H10.1C12.8333 11.4266 13.6667 10.5932 13.6667 7.85991V4.13991C13.6667 1.40658 12.8333 0.573242 10.1 0.573242ZM11.3133 5.93324L10.6933 6.53324C10.6667 6.55324 10.66 6.59324 10.6667 6.62658L10.8133 7.47324C10.84 7.62658 10.78 7.78658 10.6467 7.87991C10.52 7.97324 10.3533 7.98658 10.2133 7.91324L9.44667 7.51324C9.42001 7.49991 9.38001 7.49991 9.35334 7.51324L8.58667 7.91324C8.52667 7.94658 8.46001 7.95991 8.39334 7.95991C8.30667 7.95991 8.22667 7.93324 8.15334 7.87991C8.02667 7.78658 7.96001 7.63324 7.98667 7.47324L8.13334 6.62658C8.14001 6.59324 8.12667 6.55991 8.10667 6.53324L7.48667 5.93324C7.37334 5.82658 7.33334 5.65991 7.38001 5.51324C7.42667 5.35991 7.55334 5.25324 7.71334 5.23324L8.56667 5.10658C8.60001 5.09991 8.62667 5.07991 8.64667 5.05324L9.02667 4.27991C9.10001 4.13991 9.24001 4.05324 9.40001 4.05324C9.56001 4.05324 9.70001 4.13991 9.76667 4.27991L10.1467 5.05324C10.16 5.08658 10.1867 5.10658 10.22 5.10658L11.0733 5.23324C11.2333 5.25324 11.36 5.36658 11.4067 5.51324C11.4667 5.65991 11.4267 5.81991 11.3133 5.93324Z" 
        fill="#753FF6"
        />
    </Svg>
  );
};

export const TickIcon = ({style}:{style?:{}}) => {
  return (
    <Svg style={style}  width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M7.5 0.333252C3.82667 0.333252 0.833334 3.32659 0.833334 6.99992C0.833334 10.6733 3.82667 13.6666 7.5 13.6666C11.1733 13.6666 14.1667 10.6733 14.1667 6.99992C14.1667 3.32659 11.1733 0.333252 7.5 0.333252ZM10.6867 5.46658L6.90667 9.24658C6.81333 9.33992 6.68667 9.39325 6.55333 9.39325C6.42 9.39325 6.29333 9.33992 6.2 9.24658L4.31333 7.35992C4.12 7.16658 4.12 6.84658 4.31333 6.65325C4.50667 6.45992 4.82667 6.45992 5.02 6.65325L6.55333 8.18658L9.98 4.75992C10.1733 4.56659 10.4933 4.56659 10.6867 4.75992C10.88 4.95325 10.88 5.26658 10.6867 5.46658Z" 
        fill="#2A9E17"
        />
    </Svg>
  );
};

export const PieIcon = ({style}:{style?:{}}) => {
  return (
    <Svg style={style}  width="28" height="28" viewBox="0 0 24 24" fill="none">
      <Path
        d="M24 14C24 16.1118 23.3314 18.1694 22.0902 19.8779C20.8489 21.5863 19.0986 22.858 17.0902 23.5106C15.0817 24.1631 12.9182 24.1631 10.9098 23.5106C8.90138 22.858 7.15109 21.5863 5.90981 19.8779L9.9549 16.9389C10.5755 17.7932 11.4507 18.429 12.4549 18.7553C13.4591 19.0816 14.5409 19.0816 15.5451 18.7553C16.5493 18.429 17.4244 17.7932 18.0451 16.9389C18.6657 16.0847 19 15.0559 19 14H24Z" 
        fill="#2A9E17"
        />
      <Path
        d="M10.7946 4.52766C12.2895 4.02182 13.8828 3.87695 15.4444 4.10489C17.0059 4.33283 18.4914 4.92711 19.7792 5.83914C21.0671 6.75117 22.1208 7.95505 22.8543 9.35236C23.5877 10.7497 23.9801 12.3007 23.9992 13.8787L18.9996 13.9394C18.99 13.1504 18.7939 12.3748 18.4271 11.6762C18.0604 10.9775 17.5335 10.3756 16.8896 9.91959C16.2457 9.46357 15.5029 9.16643 14.7222 9.05246C13.9414 8.93849 13.1447 9.01093 12.3973 9.26384L10.7946 4.52766Z" 
        fill="#753FF6"
        />
      <Path
        d="M5.77508 19.6878C4.90767 18.4335 4.33864 16.9974 4.11151 15.4894C3.88437 13.9813 4.00516 12.4413 4.46463 10.9872C4.9241 9.533 5.71008 8.20317 6.76245 7.09942C7.81481 5.99568 9.10568 5.14724 10.5363 4.61902L12.2681 9.30952C11.5528 9.57363 10.9074 9.99785 10.3812 10.5497C9.85503 11.1016 9.46204 11.7665 9.2323 12.4936C9.00257 13.2207 8.94218 13.9907 9.05574 14.7447C9.16931 15.4987 9.45382 16.2168 9.88753 16.8439L5.77508 19.6878Z" 
        fill="#ED8A0A"
        />
    </Svg>
  );
};


export const WifiIcon = ({style}:{style?:{}}) => {
  return (
    <Svg style={style}  width="16" height="12" viewBox="0 0 16 12" fill="none">
      <Path
        d="M3.27333 5.8934C6.14 3.68007 9.86667 3.68007 12.7333 5.8934" 
        stroke="#2A9E17" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        />
      <Path
        d="M1.33333 3.5734C5.37333 0.453398 10.6267 0.453398 14.6667 3.5734" 
        stroke="#2A9E17" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        />
      <Path
        d="M4.52666 8.32669C6.62666 6.70002 9.36666 6.70002 11.4667 8.32669" 
        stroke="#2A9E17" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        />

<Path
        d="M6.26666 10.7667C7.32 9.9534 8.68667 9.9534 9.74 10.7667" 
        stroke="#2A9E17" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        />
    </Svg>
  );
};

export const ArrowFowardIcon = ({style}:{style?:{}}) => {
  return (
    <Svg style={style} width="8" height="14" viewBox="0 0 8 14" fill="none">
      <Path
        d="M1.08333 1.16659L6.91666 6.99992L1.08333 12.8333" 
        stroke="#2A9E17" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        />
    </Svg>
  );
};

export const GoogleIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.8859 12.2613C22.8859 11.4459 22.8128 10.6618 22.6769 9.90906H11.8459V14.3575H18.035C17.7684 15.795 16.9582 17.0129 15.7403 17.8284V20.7138H19.4569C21.6314 18.7118 22.8859 15.7636 22.8859 12.2613Z"
        fill="#4285F4"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8459 23.4998C14.9509 23.4998 17.5541 22.47 19.4568 20.7137L15.7402 17.8282C14.7105 18.5182 13.3932 18.9259 11.8459 18.9259C8.85068 18.9259 6.31546 16.903 5.41114 14.1848H1.56909V17.1644C3.46136 20.9228 7.35046 23.4998 11.8459 23.4998Z"
        fill="#34A853"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.41117 14.1851C5.18117 13.4951 5.05049 12.7581 5.05049 12.0001C5.05049 11.2422 5.18117 10.5051 5.41117 9.81512V6.83557H1.56913C0.790265 8.38807 0.345947 10.1444 0.345947 12.0001C0.345947 13.8558 0.790265 15.6122 1.56913 17.1647L5.41117 14.1851Z"
        fill="#FBBC05"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8459 5.07386C13.5343 5.07386 15.0502 5.65409 16.242 6.79364L19.5405 3.49523C17.5489 1.63955 14.9457 0.5 11.8459 0.5C7.35046 0.5 3.46136 3.07705 1.56909 6.83545L5.41114 9.815C6.31546 7.09682 8.85068 5.07386 11.8459 5.07386Z"
        fill="#EA4335"
      />
    </Svg>
  );
};

export const FacebookIcon = () => {
  return (
    <Svg width="25" height="20" viewBox="0 0 25 20" fill="none">
      <Path
        d="M15.438 3.32083H17.3226V0.140833C16.9974 0.0975 15.8793 0 14.577 0C11.8598 0 9.99846 1.65583 9.99846 4.69917V7.5H7V11.055H9.99846V20H13.6747V11.0558H16.5519L17.0086 7.50083H13.6739V5.05167C13.6747 4.02417 13.9603 3.32083 15.438 3.32083Z"
        fill="#007AFF"
      />
    </Svg>
  );
};

export const Flag = () => {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <Circle cx="7.5" cy="7.5" r="7.5" fill="url(#pattern0)" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <Use xlinkHref="#image0_295_18064" transform="translate(-0.124378) scale(0.00497512)" />
        </Pattern>
        <Image id="image0_295_18064" width="251" height="201" />
      </Defs>
    </Svg>
  );
};

export const CableTvIcon = ({style}:{style?:{}}) => {
  return (
    <Svg style={style}  width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
         d="M10.7067 0.333252H3.27333C1.65333 0.333252 0.333328 1.65325 0.333328 3.27325V7.60658V7.73992C0.333328 9.36658 1.65333 10.6799 3.27333 10.6799H5.83333C6.19999 10.6799 6.49999 10.9799 6.49999 11.3466V11.9933C6.49999 12.3599 6.19999 12.6599 5.83333 12.6599H4.21999C3.94666 12.6599 3.71999 12.8866 3.71999 13.1599C3.71999 13.4333 3.93999 13.6666 4.21999 13.6666H9.78666C10.06 13.6666 10.2867 13.4399 10.2867 13.1666C10.2867 12.8933 10.06 12.6666 9.78666 12.6666H8.17333C7.80666 12.6666 7.50666 12.3666 7.50666 11.9999V11.3533C7.50666 10.9866 7.80666 10.6866 8.17333 10.6866H10.7133C12.34 10.6866 13.6533 9.36658 13.6533 7.74658V7.61325V3.27992C13.6467 1.65325 12.3267 0.333252 10.7067 0.333252Z" 
         fill="#FFD200"
        />
    </Svg>
  );
};

export const ElectricIcon = ({style}:{style?:{}}) => {
  return (
    <Svg style={style}  width="10" height="14" viewBox="0 0 10 14" fill="none">
      <Path
         d="M8.94001 6.14668H6.88001V1.34668C6.88001 0.22668 6.27334 1.29938e-05 5.53334 0.840013L5.00001 1.44668L0.486674 6.58001C-0.133326 7.28001 0.126674 7.85335 1.06001 7.85335H3.12001V12.6533C3.12001 13.7733 3.72667 14 4.46667 13.16L5.00001 12.5533L9.51334 7.42001C10.1333 6.72001 9.87334 6.14668 8.94001 6.14668Z" 
         fill="#ED8A0A"
        />
    </Svg>
  );
};

export const DropIcon = ({style}:{style?:{}}) => {
  return (
    <Svg style={style}  width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
         d="M11.06 4.93992L4.20666 11.7933C3.88666 12.1133 3.34 12.0399 3.14666 11.6333C2.8 10.9199 2.6 10.1133 2.6 9.26659C2.58666 5.58659 6.32 2.43992 7.58666 1.47325C7.83333 1.28659 8.16666 1.28659 8.40666 1.47325C8.98666 1.91325 10.0733 2.82659 11.0933 4.02659C11.32 4.29325 11.3067 4.69325 11.06 4.93992Z" 
         fill="#1198F6"
        />
      <Path
         d="M13.4 9.27326C13.4 12.2466 10.98 14.6666 8 14.6666C6.80667 14.6666 5.69334 14.2799 4.79334 13.6133C4.46667 13.3733 4.44 12.8933 4.72667 12.6066L11.44 5.89326C11.7533 5.57993 12.28 5.6466 12.4933 6.03326C13.04 7.03993 13.4067 8.13326 13.4 9.27326Z" 
         fill="#1198F6"
       />
    </Svg>
  );
};


export const GiftIcon = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" >
   <Path
        d="M13.3333 7.99992V11.9999C13.3333 13.4733 12.14 14.6666 10.6667 14.6666H5.33334C3.86001 14.6666 2.66667 13.4733 2.66667 11.9999V7.99992C2.66667 7.63325 2.96667 7.33325 3.33334 7.33325H4.64667C5.01334 7.33325 5.31334 7.63325 5.31334 7.99992V10.0933C5.31334 10.5866 5.58667 11.0399 6.02 11.2733C6.21334 11.3799 6.42667 11.4333 6.64667 11.4333C6.90001 11.4333 7.15334 11.3599 7.37334 11.2133L8.00667 10.7999L8.59334 11.1933C9.00001 11.4666 9.52001 11.4999 9.95334 11.2666C10.3933 11.0333 10.6667 10.5866 10.6667 10.0866V7.99992C10.6667 7.63325 10.9667 7.33325 11.3333 7.33325H12.6667C13.0333 7.33325 13.3333 7.63325 13.3333 7.99992Z" 
        fill="#BED600"
      />
<Path d="M14.3333 4.66659V5.33325C14.3333 6.06659 13.98 6.66658 13 6.66658H3.00001C1.98001 6.66658 1.66667 6.06659 1.66667 5.33325V4.66659C1.66667 3.93325 1.98001 3.33325 3.00001 3.33325H13C13.98 3.33325 14.3333 3.93325 14.3333 4.66659Z" 
fill="#BED600"/>
<Path d="M7.76 3.33329H4.08C3.85333 3.08663 3.86 2.70663 4.1 2.46663L5.04667 1.51996C5.29333 1.27329 5.7 1.27329 5.94667 1.51996L7.76 3.33329Z" 
fill="#BED600"/>
<Path d="M11.9133 3.33329H8.23334L10.0467 1.51996C10.2933 1.27329 10.7 1.27329 10.9467 1.51996L11.8933 2.46663C12.1333 2.70663 12.14 3.08663 11.9133 3.33329Z" 
fill="#BED600"/>
<Path d="M9.31334 7.33325C9.68001 7.33325 9.98001 7.63325 9.98001 7.99992V10.0866C9.98001 10.6199 9.38667 10.9399 8.94667 10.6399L8.34667 10.2399C8.12667 10.0933 7.84001 10.0933 7.61334 10.2399L6.98667 10.6533C6.54667 10.9466 5.96001 10.6266 5.96001 10.0999V7.99992C5.96001 7.63325 6.26001 7.33325 6.62667 7.33325H9.31334Z" 
fill="#BED600"/>
    </Svg>
  );
};

export const LoveIcon = ({style}:{style?:{}}) => {
  return (
    <Svg style={style} width="14" height="12" viewBox="0 0 14 12" fill="none">
      <Path
         d="M9.95999 0.0668945C8.75333 0.0668945 7.67333 0.653561 6.99999 1.55356C6.32666 0.653561 5.24666 0.0668945 4.03999 0.0668945C1.99333 0.0668945 0.333328 1.73356 0.333328 3.79356C0.333328 4.58689 0.459995 5.32023 0.679995 6.00023C1.73333 9.33356 4.97999 11.3269 6.58666 11.8736C6.81333 11.9536 7.18666 11.9536 7.41333 11.8736C9.01999 11.3269 12.2667 9.33356 13.32 6.00023C13.54 5.32023 13.6667 4.58689 13.6667 3.79356C13.6667 1.73356 12.0067 0.0668945 9.95999 0.0668945Z" 
         fill="#FF361A"
        />
    </Svg>
  );
};