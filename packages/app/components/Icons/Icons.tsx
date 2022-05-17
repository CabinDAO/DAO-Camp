export const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6.5H6.5V6V2H5.5V5.5H3V6.5H6ZM11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6Z"
      stroke="#324841"
    />
  </svg>
);

export const SpeechIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill: boolean;
}) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 8.5H0.5V0.5H11.5V10.9129L8.8254 8.62037L8.68496 8.5H8.5Z"
      fill={fill === true ? "#324841" : ""}
      stroke="#324841"
    />
  </svg>
);

export const CalendarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 8.5H8.5V9V11.5H0.5V4H11.5V8.5H9ZM9.5 11.5V9.5H11.5V11.5H9.5ZM11.5 3H0.5V0.5H11.5V3Z"
      stroke="#324841"
    />
  </svg>
);

// Blaze Logo Icon
export const BlazeLogoIcon = ({ className }: { className?: string }) => (
  <svg
  className={className}
  width="8rem"
  viewBox="0 0 1011 373" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M372.643 186.321L186.321 0L0 186.321L186.321 372.643L372.643 186.321ZM180.931 259.434L130.73 130.33L259.834 180.53L229.149 211.215L250.679 232.745L233.145 250.279L211.615 228.749L180.931 259.434Z" fill="#324841"/>
<path d="M532.385 186.841C541.26 188.644 548.332 192.873 553.601 199.529C559.009 206.047 561.713 213.743 561.713 222.617C561.713 234.959 557.553 244.735 549.233 251.946C541.052 259.018 529.126 262.554 513.457 262.554H450.433V115.705H512.209C527.046 115.705 538.417 118.964 546.321 125.481C554.364 131.998 558.385 141.15 558.385 152.937C558.385 162.089 555.958 169.577 551.105 175.401C546.39 181.225 540.15 185.039 532.385 186.841ZM479.761 177.273H506.177C513.526 177.273 519.073 175.679 522.817 172.489C526.7 169.161 528.641 164.447 528.641 158.345C528.641 152.244 526.769 147.529 523.025 144.201C519.281 140.873 513.526 139.209 505.761 139.209H479.761V177.273ZM507.633 238.633C515.398 238.633 521.361 236.969 525.521 233.641C529.681 230.175 531.761 225.183 531.761 218.665C531.761 212.148 529.612 207.156 525.313 203.689C521.153 200.084 515.19 198.281 507.425 198.281H479.761V238.633H507.633Z" fill="#324841"/>
<path d="M615.749 108.633V262.554H586.421V108.633H615.749Z" fill="#324841"/>
<path d="M691.577 145.865C701.284 145.865 709.604 148.153 716.537 152.729C723.47 157.305 728.393 163.476 731.305 171.241V147.321H760.425V262.554H731.305V238.425C728.393 246.191 723.47 252.431 716.537 257.146C709.604 261.722 701.284 264.01 691.577 264.01C681.87 264.01 673.134 261.652 665.369 256.938C657.604 252.223 651.502 245.428 647.065 236.553C642.766 227.54 640.617 217.001 640.617 204.937C640.617 192.873 642.766 182.404 647.065 173.529C651.502 164.516 657.604 157.652 665.369 152.937C673.134 148.222 681.87 145.865 691.577 145.865ZM700.729 171.449C691.577 171.449 684.228 174.431 678.681 180.393C673.134 186.356 670.361 194.537 670.361 204.937C670.361 215.337 673.134 223.519 678.681 229.481C684.228 235.305 691.577 238.217 700.729 238.217C709.604 238.217 716.884 235.236 722.569 229.273C728.393 223.172 731.305 215.06 731.305 204.937C731.305 194.676 728.393 186.564 722.569 180.601C716.884 174.5 709.604 171.449 700.729 171.449Z" fill="#324841"/>
<path d="M819.036 238.009H875.612V262.554H787.004V239.257L840.044 171.657H788.252V147.321H873.532V170.409L819.036 238.009Z" fill="#324841"/>
<path d="M1010.53 200.569C1010.53 203.481 1010.18 206.809 1009.49 210.553H925.04C925.456 220.815 928.229 228.372 933.36 233.225C938.491 238.079 944.869 240.505 952.496 240.505C959.291 240.505 964.907 238.841 969.344 235.513C973.92 232.185 976.832 227.679 978.08 221.993H1009.07C1007.55 230.036 1004.29 237.247 999.296 243.626C994.304 250.004 987.856 254.996 979.952 258.602C972.187 262.207 963.52 264.01 953.952 264.01C942.72 264.01 932.736 261.652 924 256.938C915.264 252.084 908.469 245.22 903.616 236.345C898.762 227.471 896.336 217.001 896.336 204.937C896.336 192.873 898.762 182.404 903.616 173.529C908.469 164.516 915.264 157.652 924 152.937C932.736 148.222 942.72 145.865 953.952 145.865C965.323 145.865 975.237 148.222 983.696 152.937C992.293 157.652 998.88 164.169 1003.46 172.489C1008.17 180.671 1010.53 190.031 1010.53 200.569ZM980.992 197.657C981.408 188.228 978.912 181.087 973.504 176.233C968.235 171.38 961.717 168.953 953.952 168.953C946.048 168.953 939.392 171.38 933.984 176.233C928.576 181.087 925.595 188.228 925.04 197.657H980.992Z" fill="#324841"/>
</svg>
);

export const ExternalLinkIcon = ({
  className,
  href,
}: {
  className?: string;
  href: string;
}) => (
    <a href={href} target="_blank" rel="noreferrer">
      <svg
        className={className}
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 0.5L4 7M10.5 0.5H7M10.5 0.5V4M5 0.5H0.5L0.5 10.5H10.5V6"
          stroke="#324841"
        />
      </svg>
    </a>
);

export const LargeDiamondIcon = ({ className }: { className?: string }) => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.901388 4L6 0.600925L11.0986 4L6 7.39908L0.901388 4Z" stroke="#324841"/>
</svg>
);

export const SmallDiamondIcon = ({ className }: { className?: string }) => (
  <svg width="8" height="8" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2 0.5L4 2L2 3.5L0 2L2 0.5Z" fill="#324841"/>
</svg>
);