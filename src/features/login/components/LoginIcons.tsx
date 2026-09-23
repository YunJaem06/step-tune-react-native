import Svg, { Path } from 'react-native-svg';

// Vector paths shared with the original Android drawable resources.
export function MusicNoteIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" accessible={false}>
      <Path fill="#FFFFFF" d="M12,3v10.55A4,4 0,1 0,14 17V7h5V3h-7z" />
    </Svg>
  );
}

export function GoogleIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" accessible={false}>
      <Path
        fill="#4285F4"
        fillRule="evenodd"
        d="M20.16,12.193c0,-0.602 -0.054,-1.182 -0.154,-1.738H12v3.287h4.575a3.91,3.91 0,0 1,-1.697 2.566v2.133h2.747c1.608,-1.48 2.535,-3.66 2.535,-6.248z"
      />
      <Path
        fill="#34A853"
        fillRule="evenodd"
        d="M12,20.5c2.295,0 4.22,-0.761 5.626,-2.06l-2.747,-2.132c-0.761,0.51 -1.735,0.811 -2.879,0.811 -2.214,0 -4.088,-1.495 -4.756,-3.504h-2.84v2.202A8.497,8.497 0,0 0,12 20.5z"
      />
      <Path
        fill="#FBBC05"
        fillRule="evenodd"
        d="M7.244,13.615A5.11,5.11 0,0 1,6.977 12c0,-0.56 0.097,-1.105 0.267,-1.615V8.183h-2.84A8.497,8.497 0,0 0,3.5 12c0,1.372 0.328,2.67 0.904,3.817l2.84,-2.202z"
      />
      <Path
        fill="#EA4335"
        fillRule="evenodd"
        d="M12,6.88c1.248,0 2.369,0.43 3.25,1.272l2.438,-2.438C16.215,4.342 14.29,3.5 12,3.5a8.497,8.497 0,0 0,-7.596 4.683l2.84,2.202C7.912,8.375 9.786,6.881 12,6.881z"
      />
    </Svg>
  );
}
