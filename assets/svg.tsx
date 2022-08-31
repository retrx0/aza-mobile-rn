import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Svg, {
  Path,
  Circle,
  Image,
  Defs,
  Use,
  Pattern,
  G,
  Rect,
  ClipPath,
} from 'react-native-svg'

type SvgIconProps = {
  color: string
  size: number
  style?: StyleProp<ViewStyle>
}

export const VaultIcon = ({ color, size }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 16" fill="none">
      <Path
        d="M9.33333 8.38677V9.70677C9.33333 10.1668 8.96 10.5401 8.5 10.5401C8.04 10.5401 7.66667 10.1668 7.66667 9.70677V8.38677C7.42667 8.2401 7.24 8.02677 7.10667 7.77344H2.5C2.13334 7.77344 1.83334 8.07344 1.83334 8.4401V10.7934C1.83334 12.9334 3.56667 14.6668 5.70667 14.6668H11.2867C13.4333 14.6668 15.1667 12.9334 15.1667 10.7934V8.4401C15.1667 8.07344 14.8667 7.77344 14.5 7.77344H9.89333C9.76 8.02677 9.57333 8.2401 9.33333 8.38677Z"
        fill={color}
      />
      <Path
        d="M11.2933 1.33398H5.70667C3.56667 1.33398 1.83334 3.06732 1.83334 5.20732V6.10732C1.83334 6.47398 2.13334 6.77398 2.5 6.77398H6.94667C7.1 5.89398 7.97334 5.26732 8.92667 5.52065C9.46 5.66065 9.89333 6.09398 10.0333 6.62732C10.0467 6.67398 10.0467 6.72732 10.0533 6.77398H14.5C14.8667 6.77398 15.1667 6.47398 15.1667 6.10732V5.20732C15.1667 3.06732 13.4333 1.33398 11.2933 1.33398Z"
        fill={color}
      />
    </Svg>
  )
}

export const HomeIcon = ({ color, size }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 14" fill="none">
      <Path
        d="M13.3867 4.33999L9.02002 0.846659C8.16668 0.166659 6.83335 0.159992 5.98668 0.839992L1.62002 4.33999C0.993349 4.83999 0.613349 5.83999 0.746683 6.62666L1.58668 11.6533C1.78002 12.78 2.82668 13.6667 3.96668 13.6667H11.0333C12.16 13.6667 13.2267 12.76 13.42 11.6467L14.26 6.61999C14.38 5.83999 14 4.83999 13.3867 4.33999ZM8.00002 11C8.00002 11.2733 7.77335 11.5 7.50002 11.5C7.22668 11.5 7.00002 11.2733 7.00002 11V8.99999C7.00002 8.72666 7.22668 8.49999 7.50002 8.49999C7.77335 8.49999 8.00002 8.72666 8.00002 8.99999V11Z"
        fill={color}
      />
    </Svg>
  )
}

export const PaymentsIcon = ({ color, size }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 15" fill="none">
      <Path
        d="M0.833313 3.66668V13C0.833313 13.5533 1.45998 13.8667 1.89998 13.5333L3.03998 12.68C3.30665 12.48 3.67998 12.5067 3.91998 12.7467L5.02665 13.86C5.28665 14.12 5.71331 14.12 5.97331 13.86L7.09331 12.74C7.32665 12.5067 7.69998 12.48 7.95998 12.68L9.09998 13.5333C9.53998 13.86 10.1666 13.5467 10.1666 13V1.66668C10.1666 0.933344 10.7666 0.333344 11.5 0.333344H4.16665H3.49998C1.49998 0.333344 0.833313 1.52668 0.833313 3.00001V3.66668Z"
        fill={color}
      />
      <Path
        d="M11.5067 0.333344V1.33334C11.9467 1.33334 12.3667 1.51334 12.6734 1.81334C12.9934 2.14001 13.1667 2.56001 13.1667 3.00001V4.61334C13.1667 5.10668 12.9467 5.33334 12.4467 5.33334H11.1667V1.67334C11.1667 1.48668 11.32 1.33334 11.5067 1.33334V0.333344ZM11.5067 0.333344C10.7667 0.333344 10.1667 0.933344 10.1667 1.67334V6.33334H12.4467C13.5 6.33334 14.1667 5.66668 14.1667 4.61334V3.00001C14.1667 2.26668 13.8667 1.60001 13.3867 1.11334C12.9 0.633344 12.24 0.34001 11.5067 0.333344C11.5067 0.333344 11.5134 0.333344 11.5067 0.333344Z"
        fill={color}
      />
    </Svg>
  )
}

export const SettingsIcon = ({ color, size }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 13" fill="none">
      <Path
        d="M12.9 4.64666C11.6933 4.64666 11.2 3.79333 11.8 2.74666C12.1466 2.14 11.94 1.36666 11.3333 1.02L10.18 0.359998C9.65331 0.046665 8.97331 0.233332 8.65998 0.759998L8.58665 0.886665C7.98665 1.93333 6.99998 1.93333 6.39331 0.886665L6.31998 0.759998C6.01998 0.233332 5.33998 0.046665 4.81331 0.359998L3.65998 1.02C3.05331 1.36666 2.84665 2.14667 3.19331 2.75333C3.79998 3.79333 3.30665 4.64666 2.09998 4.64666C1.40665 4.64666 0.833313 5.21333 0.833313 5.91333V7.08666C0.833313 7.78 1.39998 8.35333 2.09998 8.35333C3.30665 8.35333 3.79998 9.20666 3.19331 10.2533C2.84665 10.86 3.05331 11.6333 3.65998 11.98L4.81331 12.64C5.33998 12.9533 6.01998 12.7667 6.33331 12.24L6.40665 12.1133C7.00665 11.0667 7.99331 11.0667 8.59998 12.1133L8.67331 12.24C8.98665 12.7667 9.66665 12.9533 10.1933 12.64L11.3466 11.98C11.9533 11.6333 12.16 10.8533 11.8133 10.2533C11.2066 9.20666 11.7 8.35333 12.9066 8.35333C13.6 8.35333 14.1733 7.78666 14.1733 7.08666V5.91333C14.1666 5.22 13.6 4.64666 12.9 4.64666ZM7.49998 8.66666C6.30665 8.66666 5.33331 7.69333 5.33331 6.5C5.33331 5.30666 6.30665 4.33333 7.49998 4.33333C8.69331 4.33333 9.66665 5.30666 9.66665 6.5C9.66665 7.69333 8.69331 8.66666 7.49998 8.66666Z"
        fill={color}
      />
    </Svg>
  )
}

export const ProfileIcon = ({ color, size }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 17" fill="none">
      <Circle cx="8.5" cy="8.5" r="8" fill="#D9D9D9" />
      <Circle cx="8.5" cy="8.5" r="8" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            href="#image0_1093_6630"
            transform="translate(-0.25) scale(0.003125)"
          />
        </Pattern>
        <Image
          href={require('../assets/images/logo/lightning-bolt.png')}
          width="480"
          height="320"
        />
      </Defs>
    </Svg>
  )
}

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
  )
}

export const AZALogo = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width="60" height="24" viewBox="0 0 60 24" fill="none">
      <G clip-path="url(#clip0_386_19569)">
        <Path
          d="M0.00390625 24.0117V-0.0116272H17.8696V24.0117H11.0571L11.0225 23.9775V18.5631L6.8514 19.7282V24.0121H0.00390625V24.0117ZM6.85099 5.36871V14.0388L11.0221 12.8737V5.36871H6.85099Z"
          fill={color}
        />
        <Path
          d="M53.1485 24.0116V19.7278L48.9774 18.5627V23.9771L48.9428 24.0112H42.1299V-0.0120544H59.9956V24.0112H53.1485V24.0116ZM48.9774 5.36868V12.8737L53.1485 14.0388V5.36868H48.9774Z"
          fill={color}
        />
        <Path
          d="M40.2721 10.8819L35.74 13.1157H40.2721V24.0116L26.602 23.6617L39.3522 23.2065V14.2326H31.1317L39.2264 10.1799V0.958378L25.0283 0.711152L25.262 -0.0116577H40.2721V10.8819Z"
          fill={color}
        />
        <Path
          d="M19.7275 23.709L23.0495 13.7883H19.7275V-0.0116577H26.4838L23.0919 10.4677H29.744L19.7275 23.709Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_386_19569">
          <Rect width="60" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const AZALightningLogo = ({ size, color }: SvgIconProps) => {
  return (
    <Svg width="8" height={size} viewBox="0 0 8 22" fill="none">
      <Path
        d="M0.0078125 21.9968L2.65615 12.7984H0.0078125V0.00318909H5.39392L2.69003 9.71971H7.993L0.0078125 21.9968Z"
        fill={color}
      />
    </Svg>
  )
}

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
  )
}

export const BackIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <Path
        d="M6.83333 12.6667L1 6.83333L6.83333 1"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export const AppleIcon = () => {
  return (
    <Svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <Path
        d="M15.344 14.0277C15.0718 14.6565 14.7495 15.2354 14.3762 15.7676C13.8674 16.4932 13.4507 16.9954 13.1296 17.2742C12.6318 17.732 12.0985 17.9664 11.5274 17.9798C11.1174 17.9798 10.623 17.8631 10.0475 17.6265C9.47005 17.3909 8.9394 17.2742 8.45419 17.2742C7.94532 17.2742 7.39956 17.3909 6.8158 17.6265C6.23115 17.8631 5.76016 17.9864 5.40006 17.9987C4.85242 18.022 4.30654 17.7809 3.76167 17.2742C3.41391 16.9709 2.97892 16.4509 2.45783 15.7143C1.89873 14.9276 1.43908 14.0155 1.07898 12.9755C0.693327 11.8522 0.5 10.7644 0.5 9.71136C0.5 8.50506 0.760658 7.46465 1.28275 6.59279C1.69307 5.89248 2.23894 5.34005 2.92214 4.9345C3.60535 4.52896 4.34354 4.3223 5.13852 4.30908C5.5735 4.30908 6.14393 4.44363 6.8528 4.70807C7.55966 4.97339 8.01354 5.10794 8.21253 5.10794C8.3613 5.10794 8.86551 4.95061 9.72026 4.63696C10.5286 4.34608 11.2108 4.22564 11.7696 4.27308C13.284 4.3953 14.4218 4.99228 15.1784 6.0678C13.824 6.88845 13.154 8.03785 13.1674 9.51237C13.1796 10.6609 13.5962 11.6166 14.4151 12.3755C14.7862 12.7277 15.2006 12.9999 15.6617 13.1933C15.5617 13.4832 15.4562 13.761 15.344 14.0277ZM11.8707 0.360309C11.8707 1.26051 11.5419 2.10103 10.8863 2.87901C10.0952 3.80387 9.13839 4.3383 8.10076 4.25397C8.08753 4.14597 8.07987 4.03231 8.07987 3.91287C8.07987 3.04867 8.45608 2.12381 9.12417 1.36761C9.45771 0.984734 9.88192 0.666377 10.3963 0.412418C10.9097 0.162247 11.3952 0.0238978 11.8519 0.000205994C11.8652 0.120549 11.8707 0.2409 11.8707 0.360297V0.360309Z"
        fill="white"
      />
    </Svg>
  )
}

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
  )
}

export const FacebookIcon = () => {
  return (
    <Svg width="25" height="20" viewBox="0 0 25 20" fill="none">
      <Path
        d="M15.438 3.32083H17.3226V0.140833C16.9974 0.0975 15.8793 0 14.577 0C11.8598 0 9.99846 1.65583 9.99846 4.69917V7.5H7V11.055H9.99846V20H13.6747V11.0558H16.5519L17.0086 7.50083H13.6739V5.05167C13.6747 4.02417 13.9603 3.32083 15.438 3.32083Z"
        fill="#007AFF"
      />
    </Svg>
  )
}

export const Flag = () => {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <Circle cx="7.5" cy="7.5" r="7.5" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            xlinkHref="#image0_295_18064"
            transform="translate(-0.124378) scale(0.00497512)"
          />
        </Pattern>
        <Image id="image0_295_18064" width="251" height="201" />
      </Defs>
    </Svg>
  )
}

export const DangerIcon = () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M21.76 15.92 15.36 4.4C14.5 2.85 13.31 2 12 2s-2.5.85-3.36 2.4l-6.4 11.52c-.81 1.47-.9 2.88-.25 3.99.65 1.11 1.93 1.72 3.61 1.72h12.8c1.68 0 2.96-.61 3.61-1.72.65-1.11.56-2.53-.25-3.99ZM11.25 9c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9Zm1.46 8.71-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02s-.13-.01-.2-.02a.636.636 0 0 1-.18-.06.757.757 0 0 1-.18-.09l-.15-.12c-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.18-.06.13-.03.27-.03.39 0 .07.01.13.03.19.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71Z"
        fill="#FF361A"
      />
    </Svg>
  )
}

export const WithdrawIcon = () => (
  <Svg width={40} height={40} fill="none">
    <Path
      d="M19.867 36.667c9.166 0 16.666-7.5 16.666-16.667 0-9.167-7.5-16.667-16.666-16.667C10.7 3.333 3.2 10.833 3.2 20c0 9.167 7.5 16.667 16.667 16.667ZM13.2 20h13.333"
      stroke="#FF361A"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const MenuIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M3 7h18M3 12h18M3 17h18"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export const MessageIcon = ({ color, size, style }: SvgIconProps) => (
  <Svg width={size} height={size} fill="none">
    <Path
      d="M4.25 9.5H4c-2 0-3-.5-3-3V4c0-2 1-3 3-3h4c2 0 3 1 3 3v2.5c0 2-1 3-3 3h-.25a.507.507 0 0 0-.4.2l-.75 1c-.33.44-.87.44-1.2 0l-.75-1a.565.565 0 0 0-.4-.2Z"
      stroke={color}
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.998 5.5h.005M5.998 5.5h.004M3.997 5.5h.005"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const ReceivedIcon = () => (
  <Svg width={12} height={12} fill="none">
    <Path
      d="m2.5 8.75 7-7M2.5 3.615V8.75h5.135M1.75 11h8.5"
      stroke="#2A9E17"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const DepositIcon = () => (
  <Svg width={40} height={40} fill="none">
    <Path
      d="M20 36.667c9.167 0 16.667-7.5 16.667-16.667 0-9.167-7.5-16.667-16.667-16.667-9.167 0-16.667 7.5-16.667 16.667 0 9.167 7.5 16.667 16.667 16.667ZM13.333 20h13.334M20 26.667V13.333"
      stroke="#2AD168"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const SendIcon = ({ iconColor }: any) => (
  <Svg width={12} height={12} fill="none">
    <Path
      d="M10.25 11h-8.5M9.5 1.75l-7 7M9.5 6.885V1.75H4.365"
      stroke={iconColor ? iconColor : '#A6A6A6'}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const TransferIcon = ({ color, size, style }: SvgIconProps) => (
  <Svg width={size} height={size} fill="none">
    <Path
      d="m12.333 10.533 14.15-4.716c6.35-2.117 9.8 1.35 7.7 7.7l-4.716 14.15c-3.167 9.516-8.367 9.516-11.534 0l-1.4-4.2-4.2-1.4c-9.516-3.167-9.516-8.35 0-11.534ZM16.85 22.75l5.967-5.983"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const NairaIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg style={style} width={22} height={20} fill="none">
      <Path
        d="M21.183 11.16H18.18V8.272h3.003a.817.817 0 1 0 0-1.634H18.18V2.634c0-.584-.116-1.013-.343-1.275-.217-.248-.501-.364-.895-.364-.377 0-.65.115-.863.362-.225.262-.339.692-.339 1.278V6.64h-5.649L7.689 3.005c-.205-.324-.399-.628-.586-.92a4.091 4.091 0 0 0-.49-.636 1.567 1.567 0 0 0-.479-.335A1.585 1.585 0 0 0 5.48.995c-.333 0-.634.091-.923.279a1.528 1.528 0 0 0-.605.7c-.106.27-.162.687-.162 1.224V6.64H.817a.817.817 0 0 0 0 1.634H3.79v2.887H.817a.817.817 0 1 0 0 1.633H3.79v4.573c0 .567.12.992.355 1.262.225.257.51.377.896.377.373 0 .656-.12.89-.378.24-.264.361-.689.361-1.261v-4.573h5.112l2.766 4.242c.193.28.391.564.59.841.178.25.373.469.579.652.185.166.383.288.59.362.212.076.46.115.737.115.748 0 1.514-.229 1.514-1.927v-4.285h3.003a.817.817 0 0 0 0-1.634ZM15.74 8.272v2.886h-2.662l-1.907-2.886h4.569ZM6.292 4.957 7.39 6.639H6.292V4.957Zm0 6.202V8.273h2.164l1.882 2.886H6.292Zm9.448 4.029-1.582-2.395h1.582v2.395Z"
        fill={color}
      />
    </Svg>
  )
}

//Might replace with lottie animation
export const StatusSuccessIcon = () => {
  return (
    <Svg width={60} height={60} fill="none">
      <Circle cx={30} cy={30} r={30} fill="#2A9E17" />
      <Path
        d="M43.334 20 25 38.333 16.667 30"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const StatusWarningIcon = () => {
  return (
    <Svg width={60} height={60} fill="none">
      <Circle cx={30} cy={30} r={30} fill="#FFD200" />
      <Path
        d="m28.278 33.76-1.04-7.52V15.6h5.52v10.64l-1.08 7.52h-3.4Zm1.68 10.56c-1.12 0-2.066-.387-2.84-1.16-.773-.773-1.16-1.72-1.16-2.84 0-1.12.387-2.067 1.16-2.84.774-.773 1.72-1.16 2.84-1.16 1.094 0 2.027.4 2.8 1.2.8.773 1.2 1.707 1.2 2.8 0 1.093-.4 2.04-1.2 2.84a3.816 3.816 0 0 1-2.8 1.16Z"
        fill="#fff"
      />
    </Svg>
  )
}

export const SendMoneyIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="m4.933 4.213 5.66-1.886c2.54-.847 3.92.54 3.08 3.08l-1.886 5.66c-1.267 3.806-3.347 3.806-4.614 0l-.56-1.68-1.68-.56c-3.807-1.267-3.807-3.34 0-4.614ZM6.74 9.1l2.387-2.393"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const RequestMoneyIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M7.32 4.127 4.846 1.653a.521.521 0 0 0-.173-.113c-.007 0-.013 0-.02-.007a.464.464 0 0 0-.167-.033.5.5 0 0 0-.353.147l-2.487 2.48a.503.503 0 0 0 0 .706.503.503 0 0 0 .707 0L3.986 3.2V14c0 .273.227.5.5.5.274 0 .5-.227.5-.5V3.207l1.627 1.626a.494.494 0 0 0 .707 0 .503.503 0 0 0 0-.706ZM14.354 11.167a.503.503 0 0 0-.707 0L12.014 12.8V2c0-.273-.227-.5-.5-.5-.274 0-.5.227-.5.5v10.793l-1.627-1.626a.503.503 0 0 0-.707 0 .503.503 0 0 0 0 .706l2.473 2.474a.524.524 0 0 0 .174.113.501.501 0 0 0 .193.04.5.5 0 0 0 .354-.147l2.48-2.48a.503.503 0 0 0 0-.706Z"
        fill={color}
      />
    </Svg>
  )
}

export const RecurringTransferIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M11.613 2.94h-8.02l1.254-1.253a.503.503 0 0 0 0-.707.503.503 0 0 0-.707 0L2.033 3.087a.517.517 0 0 0-.146.353.517.517 0 0 0 .147.353L4.14 5.9a.494.494 0 0 0 .707 0 .503.503 0 0 0 0-.707L3.593 3.94h8.02c.827 0 1.5.673 1.5 1.5v2.213c0 .274.227.5.5.5.274 0 .5-.226.5-.5V5.44a2.5 2.5 0 0 0-2.5-2.5ZM14.113 12.56a.517.517 0 0 0-.147-.353L11.86 10.1a.503.503 0 0 0-.707 0 .503.503 0 0 0 0 .707l1.254 1.253h-8.02c-.827 0-1.5-.673-1.5-1.5V8.347c0-.274-.227-.5-.5-.5-.274 0-.5.226-.5.5v2.213a2.5 2.5 0 0 0 2.5 2.5h8.02l-1.254 1.253a.503.503 0 0 0 0 .707c.1.1.227.147.354.147a.495.495 0 0 0 .353-.147l2.107-2.107a.517.517 0 0 0 .146-.353Z"
        fill={color}
      />
    </Svg>
  )
}

export const GalleryIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M6 14.667h4c3.333 0 4.667-1.334 4.667-4.667V6c0-3.333-1.334-4.667-4.667-4.667H6C2.667 1.333 1.333 2.667 1.333 6v4c0 3.333 1.334 4.667 4.667 4.667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6.667A1.333 1.333 0 1 0 6 4a1.333 1.333 0 0 0 0 2.667ZM1.78 12.633l3.287-2.206c.526-.354 1.286-.314 1.76.093l.22.193c.52.447 1.36.447 1.88 0l2.773-2.38c.52-.446 1.36-.446 1.88 0l1.087.934"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const UserIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M8 8a3.333 3.333 0 1 0 0-6.667A3.333 3.333 0 0 0 8 8ZM13.727 14.667C13.727 12.087 11.16 10 8 10s-5.727 2.087-5.727 4.667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ClockIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M14.667 8A6.67 6.67 0 0 1 8 14.667 6.669 6.669 0 0 1 1.333 8 6.67 6.67 0 0 1 8 1.333 6.67 6.67 0 0 1 14.667 8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.473 10.12 8.407 8.887c-.36-.214-.654-.727-.654-1.147V5.007"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const BankIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="m8.247 1.433 6 2.4c.233.094.42.374.42.62v2.214c0 .366-.3.666-.667.666H2a.669.669 0 0 1-.667-.666V4.453c0-.246.187-.526.42-.62l6-2.4a.78.78 0 0 1 .494 0ZM14.667 14.667H1.333v-2c0-.367.3-.667.667-.667h12c.367 0 .667.3.667.667v2ZM2.667 12V7.333M5.333 12V7.333M8 12V7.333M10.667 12V7.333M13.333 12V7.333M.667 14.667h14.666"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 5.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const CreditCardIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M1.333 5.67h13.334M4 11.003h1.333M7 11.003h2.667"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.293 2.337H11.7c2.373 0 2.967.586 2.967 2.926v5.474c0 2.34-.594 2.926-2.96 2.926H4.293c-2.366.007-2.96-.58-2.96-2.92v-5.48c0-2.34.594-2.926 2.96-2.926Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const LogoutIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="m11.627 9.747 1.706-1.707-1.706-1.707M6.507 8.04h6.78M7.84 13.333c-2.947 0-5.333-2-5.333-5.333S4.893 2.667 7.84 2.667"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const SplitIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="m5.713 10.18 4.36-4.36M5.987 6.913a.82.82 0 1 0 0-1.64.82.82 0 0 0 0 1.64ZM10.347 10.727a.82.82 0 1 0 0-1.64.82.82 0 0 0 0 1.64Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const GraphIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M1.333 1.333v11.334c0 1.106.894 2 2 2h11.334"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m3.333 11.333 3.06-3.573a1.33 1.33 0 0 1 1.954-.073l.633.633a1.336 1.336 0 0 0 1.953-.073L14 4.667"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const FeesAndLimitsIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M2.447 1.667v7.98c0 .653.306 1.273.833 1.666l3.473 2.6a2.09 2.09 0 0 0 2.5 0l3.474-2.6a2.08 2.08 0 0 0 .833-1.666v-7.98H2.447Z"
        stroke={color}
        strokeMiterlimit={10}
      />
      <Path
        d="M1.333 1.667h13.334"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M5.333 5.333h5.334M5.333 8.667h5.334"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const MessageQuestionIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M11.333 12.287H8.667L5.7 14.26a.665.665 0 0 1-1.033-.553v-1.42c-2 0-3.334-1.334-3.334-3.334v-4c0-2 1.334-3.333 3.334-3.333h6.666c2 0 3.334 1.333 3.334 3.333v4c0 2-1.334 3.334-3.334 3.334Z"
        stroke={color}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 7.573v-.14c0-.453.28-.693.56-.886.273-.187.547-.427.547-.867 0-.613-.494-1.107-1.107-1.107s-1.107.494-1.107 1.107M7.997 9.167h.006"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const HeadphoneIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M3.64 12.327V10.38c0-.647.507-1.227 1.227-1.227.646 0 1.226.507 1.226 1.227v1.873c0 1.3-1.08 2.38-2.38 2.38-1.3 0-2.38-1.086-2.38-2.38V8.147a6.608 6.608 0 0 1 6.634-6.78c3.746 0 6.7 3.033 6.7 6.706v4.107c0 1.3-1.08 2.38-2.38 2.38-1.3 0-2.38-1.08-2.38-2.38v-1.873c0-.647.506-1.227 1.226-1.227.647 0 1.227.507 1.227 1.227v2.02"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ChangePasswordIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M16.53 29.25h-5.28c-.93 0-1.755-.03-2.49-.135-3.945-.435-5.01-2.295-5.01-7.365v-7.5c0-5.07 1.065-6.93 5.01-7.365.735-.105 1.56-.135 2.49-.135h5.19M22.53 6.75h2.22c.93 0 1.755.03 2.49.135 3.945.435 5.01 2.295 5.01 7.365v7.5c0 5.07-1.065 6.93-5.01 7.365-.735.105-1.56.135-2.49.135h-2.22M22.5 3v30"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.642 18h.013M10.642 18h.013"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ChangePhoneNumberIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={32} height={38} fill="none">
      <Path
        d="M31 10v18c0 7.2-1.875 9-9.375 9h-11.25C2.875 37 1 35.2 1 28V10c0-7.2 1.875-9 9.375-9h11.25C29.125 1 31 2.8 31 10ZM19.75 7.3h-7.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 31.78c1.605 0 2.906-1.25 2.906-2.79 0-1.542-1.3-2.79-2.906-2.79-1.605 0-2.906 1.248-2.906 2.79 0 1.54 1.3 2.79 2.906 2.79Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ChangeEmailIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M25.5 30.75h-15C6 30.75 3 28.5 3 23.25v-10.5c0-5.25 3-7.5 7.5-7.5h15c4.5 0 7.5 2.25 7.5 7.5v10.5c0 5.25-3 7.5-7.5 7.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m25.5 13.5-4.695 3.75c-1.545 1.23-4.08 1.23-5.625 0L10.5 13.5"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const PrivacySettingsIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M15.735 3.345 8.25 6.165C6.525 6.81 5.115 8.85 5.115 10.68v11.145c0 1.77 1.17 4.095 2.595 5.16l6.45 4.815c2.115 1.59 5.595 1.59 7.71 0l6.45-4.815c1.425-1.065 2.595-3.39 2.595-5.16V10.68c0-1.845-1.41-3.885-3.135-4.53l-7.485-2.805c-1.275-.465-3.315-.465-4.56 0Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const LoginOptionsIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M25.44 9.256c3 2.085 5.07 5.4 5.49 9.225M5.235 18.555c.39-3.81 2.43-7.125 5.4-9.225M12.285 31.41c1.74.885 3.72 1.38 5.805 1.38 2.01 0 3.9-.45 5.595-1.275M18.09 11.55a4.17 4.17 0 1 0 0-8.339 4.17 4.17 0 0 0 0 8.34ZM7.245 29.88a4.17 4.17 0 1 0 0-8.34 4.17 4.17 0 0 0 0 8.34ZM28.755 29.88a4.17 4.17 0 1 0 0-8.341 4.17 4.17 0 0 0 0 8.34Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const MoonIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M3.045 18.63c.54 7.725 7.095 14.01 14.94 14.354 5.535.24 10.485-2.34 13.455-6.405 1.23-1.665.57-2.774-1.485-2.4-1.005.18-2.04.256-3.12.21-7.335-.3-13.335-6.434-13.365-13.68-.015-1.95.39-3.795 1.125-5.475.81-1.86-.165-2.745-2.04-1.95-5.94 2.505-10.005 8.49-9.51 15.346Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const NotificationSettingsIcon = ({
  color,
  size,
  style,
}: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M33 15v4.5c0 6-3 9-9 9h-.75a1.52 1.52 0 0 0-1.2.6l-2.25 3c-.99 1.32-2.61 1.32-3.6 0l-2.25-3c-.24-.33-.795-.6-1.2-.6H12c-6 0-9-1.5-9-9V12c0-6 3-9 9-9h9"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M29.25 10.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.995 16.5h.013M17.993 16.5h.014M11.992 16.5h.013"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const FaceIdIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M3 13.5V9.75A6.741 6.741 0 0 1 9.75 3h3.75M22.5 3h3.75A6.741 6.741 0 0 1 33 9.75v3.75M33 24v2.25A6.741 6.741 0 0 1 26.25 33H24M13.5 33H9.75A6.741 6.741 0 0 1 3 26.25V22.5M25.5 14.25v7.5c0 3-1.5 4.5-4.5 4.5h-6c-3 0-4.5-1.5-4.5-4.5v-7.5c0-3 1.5-4.5 4.5-4.5h6c3 0 4.5 1.5 4.5 4.5ZM28.5 18h-21"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const HeartSlashIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M9.165 26.25C5.85 23.145 3 18.72 3 13.02c0-4.635 3.735-8.385 8.34-8.385 2.73 0 5.145 1.32 6.66 3.36a8.295 8.295 0 0 1 6.66-3.36c1.725 0 3.33.525 4.665 1.44M32.61 10.5a8.3 8.3 0 0 1 .39 2.535c0 10.5-9.72 16.695-14.07 18.195-.51.18-1.35.18-1.86 0-.975-.33-2.205-.9-3.54-1.695M33 3 3 33"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const ChevronRightIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="m7.083 4.167 5.834 5.834-5.833 5.833"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const UndrawCancelIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={202} height={226} fill="none">
      <G clipPath="url(#a)">
        <Path
          d="M114.515 174.137c48.317 0 87.485-38.982 87.485-87.069C202 38.982 162.832 0 114.515 0 66.199 0 27.03 38.982 27.03 87.068c0 48.087 39.169 87.069 87.485 87.069Z"
          fill="#F2F2F2"
        />
        <Path
          d="M171.685 38.938H11.425a.62.62 0 0 1-.609-.633.62.62 0 0 1 .609-.606h160.26a.62.62 0 0 1 0 1.239Z"
          fill="#CACACA"
        />
        <Path
          d="M117.069 59.807H72.766c-3.327 0-6.025 2.684-6.025 5.996 0 3.312 2.698 5.997 6.025 5.997h44.303c3.327 0 6.025-2.685 6.025-5.997s-2.698-5.996-6.025-5.996ZM44.147 83.793h101.541c3.328 0 6.026 2.685 6.026 5.996 0 3.312-2.698 5.997-6.026 5.997H44.148c-3.328 0-6.026-2.685-6.026-5.997 0-3.311 2.698-5.996 6.025-5.996ZM44.147 107.779h101.541c3.328 0 6.026 2.685 6.026 5.997s-2.698 5.996-6.026 5.996H44.148c-3.328 0-6.026-2.684-6.026-5.996 0-3.312 2.698-5.997 6.025-5.997Z"
          fill="#fff"
        />
        <Path
          d="m31.564 225.473-.24-.023a27.762 27.762 0 0 1-20.041-11.867 26.745 26.745 0 0 1-3.036-6l-.073-.203.215-.017c2.565-.205 5.2-.638 6.37-.845l-7.548-2.545-.046-.223a5.224 5.224 0 0 1 2.214-5.437 5.373 5.373 0 0 1 5.994-.101c.822.522 1.682 1.04 2.513 1.54 2.856 1.72 5.81 3.498 8.025 5.931a16.631 16.631 0 0 1 4.005 13.799l1.648 5.991Z"
          fill="#F2F2F2"
        />
        <Path d="m59 221.737 3.72-.001 1.77-14.281H59v14.282Z" fill="#A0616A" />
        <Path
          d="M58.87 225.599h11.44v-.144c0-2.448-1.994-4.432-4.454-4.432l-2.09-1.578-3.898 1.578h-.999v4.576Z"
          fill="#2F2E41"
        />
        <Path
          d="m29.188 211.482 2.975 2.222 10.027-10.366-4.392-3.279-8.61 11.423Z"
          fill="#A0616A"
        />
        <Path
          d="m26.753 214.494 9.151 6.833.087-.116a4.418 4.418 0 0 0-.89-6.204l-.72-2.51-4.07-1.067-.799-.596-2.759 3.66ZM41.553 154.719s.206 5.575.465 10.046c.042.733-1.684 1.53-1.64 2.328.03.529.355 1.043.385 1.595.032.583-.416 1.098-.384 1.7.031.589.542 1.264.573 1.866.332 6.482 1.534 14.242.33 16.411-.593 1.069-8.158 15.879-8.158 15.879s4.215 6.292 5.419 4.195c1.59-2.77 13.848-15.73 13.848-18.205 0-2.471 2.836-20.997 2.836-20.997l1.977 10.963.907 2.172-.285 1.276.586 1.721.032 1.703.57 3.162s-1.716 24.641-.75 25.327c.97.689 5.663 1.926 6.217.689.551-1.238 4.137-25.716 4.137-25.716s.578-11.218 1.204-21.644c.036-.605.464-1.336.497-1.933.039-.692-.232-1.591-.196-2.262.04-.77.382-1.312.416-2.049.255-5.696-1.181-12.632-1.639-13.315-1.381-2.061-2.625-3.709-2.625-3.709s-18.611-6.086-23.584.098l-1.138 8.699Z"
          fill="#2F2E41"
        />
        <Path
          d="m60.116 97.388-7.378-1.468-3.443 4.65c-6.425 6.287-6.522 11.836-5.375 20.73v12.483l-.83 8.368s-2.938 6.117.092 7.541c3.031 1.425 22.939 1.303 24.84.735 1.9-.569.253-1.267-.246-3.916-.938-4.977-.31-2.577-.246-4.161.925-22.732-1.23-32.064-1.449-34.517l-3.752-6.773-2.213-3.672Z"
          fill="#3F3D56"
        />
        <Path
          d="M99.002 115.715a2.99 2.99 0 0 1-4.472.956L78.597 126.74l.046-5.482 15.478-8.94a3.009 3.009 0 0 1 4.234-.24 2.974 2.974 0 0 1 .647 3.637Z"
          fill="#A0616A"
        />
        <Path
          d="m54.29 103.736-1.813-.191a4.81 4.81 0 0 0-4.333 1.882 4.65 4.65 0 0 0-.818 1.711l-.001.005a4.76 4.76 0 0 0 1.81 4.964l6.266 4.597c4.397 5.913 12.66 9.836 22.353 13.023l15.066-9.312-5.329-6.424-10.334 5.512-15.36-11.834-.01-.007-5.846-3.749-1.65-.177Z"
          fill="#3F3D56"
        />
        <Path
          d="M57.623 93.782c4.752 0 8.604-3.834 8.604-8.563 0-4.73-3.853-8.563-8.604-8.563-4.752 0-8.604 3.834-8.604 8.563 0 4.73 3.852 8.563 8.604 8.563Z"
          fill="#A0616A"
        />
        <Path
          d="m57.822 93.783-.209.006c-.03.077-.061.153-.098.227l.307-.233ZM60.183 85.457c.013.084.034.168.061.248a1.162 1.162 0 0 0-.061-.248Z"
          fill="#2F2E41"
        />
        <Path
          d="M66.337 77.023c-.355 1.094-.67-.294-1.836-.044-1.401.3-3.032.197-4.18-.658a6.501 6.501 0 0 0-5.932-.9c-1.964.691-5.253 1.18-5.765 3.189-.178.698-.249 1.456-.68 2.035-.377.506-.972.795-1.47 1.184-1.679 1.316-.395 5.053.4 7.028.795 1.975 2.619 3.413 4.624 4.15 1.94.713 4.046.839 6.116.783.36-.93.204-2.003-.093-2.966-.322-1.043-.798-2.05-.932-3.132-.134-1.082.16-2.312 1.073-2.917.838-.556 2.202-.217 2.521.682-.186-1.124.958-2.211 2.137-2.403 1.267-.205 2.533.25 3.795.476 1.263.227.815-5.064.222-6.507Z"
          fill="#2F2E41"
        />
        <Path
          d="M114.455 99.384c.802-9.645-6.404-18.11-16.095-18.909-9.69-.798-18.197 6.373-19 16.018-.801 9.645 6.405 18.111 16.096 18.909 9.691.799 18.197-6.373 18.999-16.018Z"
          fill={color}
        />
        <Path
          d="m101.533 90.637-4.625 4.603-4.625-4.603a1.923 1.923 0 0 0-2.711 0 1.902 1.902 0 0 0 0 2.698l4.625 4.603-4.625 4.603a1.902 1.902 0 0 0 .002 2.699c.749.743 1.96.743 2.709 0l4.625-4.603 4.625 4.603c.75.744 1.963.743 2.711-.003a1.902 1.902 0 0 0 0-2.696l-4.625-4.603 4.625-4.603a1.901 1.901 0 0 0 0-2.698 1.923 1.923 0 0 0-2.711 0Z"
          fill="#fff"
        />
        <Path
          d="M89.97 83.21a2.966 2.966 0 0 1-2.404 3.873l-3.73 18.413-3.943-3.828 4.234-17.305a2.99 2.99 0 0 1 2.757-3.207 2.999 2.999 0 0 1 3.085 2.053Z"
          fill="#A0616A"
        />
        <Path
          d="m50.33 107.027-1.395 1.171a4.764 4.764 0 0 0-.96 6.187l.002.004a4.804 4.804 0 0 0 4.853 2.136l7.67-1.317c7.332.936 15.897-2.283 24.918-7.038l3.678-17.267-8.346-.62-3.158 11.238-19.215 2.839-.011.001-6.766 1.603-1.27 1.063Z"
          fill="#3F3D56"
        />
        <Path
          d="M94.007 225.894.41 226a.41.41 0 0 1 0-.817l93.598-.105a.408.408 0 1 1 0 .816Z"
          fill="#CACACA"
        />
        <Path
          d="M19.556 31.093c1.608 0 2.912-1.327 2.912-2.963 0-1.637-1.304-2.964-2.912-2.964-1.609 0-2.913 1.327-2.913 2.963 0 1.637 1.304 2.964 2.913 2.964ZM29.618 31.093c1.608 0 2.913-1.327 2.913-2.963 0-1.637-1.305-2.964-2.913-2.964-1.609 0-2.913 1.327-2.913 2.963 0 1.637 1.304 2.964 2.913 2.964ZM39.68 31.093c1.608 0 2.913-1.327 2.913-2.963 0-1.637-1.305-2.964-2.913-2.964-1.609 0-2.913 1.327-2.913 2.963 0 1.637 1.304 2.964 2.913 2.964ZM51.153 30.471a.344.344 0 0 1-.246-.103l-1.965-2a.341.341 0 0 1 0-.479l1.965-1.999a.346.346 0 0 1 .487-.005c.136.132.138.35.005.484l-1.73 1.76 1.73 1.76a.342.342 0 0 1-.246.582ZM54.456 30.472a.344.344 0 0 1-.246-.583l1.73-1.76-1.73-1.76a.342.342 0 0 1 .005-.484.345.345 0 0 1 .487.005l1.965 2a.342.342 0 0 1 0 .479l-1.965 2a.344.344 0 0 1-.246.103ZM157.271 25.51h-3.654a.753.753 0 0 0-.755.75v3.64c0 .416.338.752.755.752h3.654a.755.755 0 0 0 .758-.751v-3.64a.755.755 0 0 0-.758-.751ZM148.316 25.51h-3.654a.753.753 0 0 0-.755.75v3.64c0 .416.338.752.755.752h3.654a.755.755 0 0 0 .758-.751v-3.64a.755.755 0 0 0-.758-.751ZM165.709 25.68h-3.654a.752.752 0 0 0-.754.75v3.64c0 .416.337.752.754.752h3.654a.755.755 0 0 0 .758-.751v-3.64a.755.755 0 0 0-.758-.751ZM110.628 27.064h-29.21c-.51 0-.92.412-.92.916s.41.915.92.915h29.21a.92.92 0 0 0 .92-.915.92.92 0 0 0-.92-.916Z"
          fill="#3F3D56"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h202v226H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const CheckIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M10 1.666c-4.592 0-8.333 3.742-8.333 8.333 0 4.592 3.741 8.334 8.333 8.334 4.591 0 8.333-3.742 8.333-8.334 0-4.591-3.741-8.333-8.333-8.333Zm3.983 6.417-4.725 4.725a.625.625 0 0 1-.883 0l-2.359-2.359a.629.629 0 0 1 0-.883.629.629 0 0 1 .884 0l1.916 1.917L13.1 7.199a.629.629 0 0 1 .883 0 .629.629 0 0 1 0 .884Z"
        fill={color}
      />
    </Svg>
  )
}

export const DarkModeIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M1.354 8.28c.24 3.433 3.153 6.227 6.64 6.38a7.006 7.006 0 0 0 5.98-2.847c.546-.74.253-1.233-.66-1.066a6.33 6.33 0 0 1-1.387.093C8.667 10.707 6 7.98 5.987 4.76a5.93 5.93 0 0 1 .5-2.433c.36-.827-.073-1.22-.907-.867-2.64 1.113-4.446 3.773-4.226 6.82Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const LightModeIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={size} height={size} fill="none" >
    <Path
      d="M8 12.333a4.333 4.333 0 1 0 0-8.667 4.333 4.333 0 0 0 0 8.667Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m12.76 12.76-.086-.086m0-9.347.086-.086-.086.086ZM3.24 12.761l.087-.087-.087.087ZM8 1.387v-.053.053Zm0 13.28v-.053.053ZM1.387 8.001h-.054.054Zm13.28 0h-.053.053ZM3.327 3.327l-.087-.086.087.086Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}


export const SystemModeIcon = ({ color, size, style }: SvgIconProps) => {
  return (
    <Svg width={14} height={18} fill="none" >
    <Path
      d="M13 5v8c0 3.2-.75 4-3.75 4h-4.5c-3 0-3.75-.8-3.75-4V5c0-3.2.75-4 3.75-4h4.5c3 0 3.75.8 3.75 4ZM8.5 3.8h-3"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 14.68c.642 0 1.162-.556 1.162-1.24 0-.686-.52-1.24-1.162-1.24-.642 0-1.163.554-1.163 1.24 0 .684.52 1.24 1.163 1.24Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}