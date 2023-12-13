import {
  SiHtml5,
  SiSass,
  SiTailwindcss,
  SiMui,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
} from 'react-icons/si';

const tagToIconConverter = tag => {
  let icon = '';
  const iconSize = 24;

  switch (tag.toLowerCase()) {
    case 'html':
      icon = <SiHtml5 size={iconSize} color="#FEA55F" />;
      break;
    case 'sass':
      icon = <SiSass size={iconSize} color="#cf649a" />;
      break;
    case 'tailwind':
      icon = <SiTailwindcss size={iconSize} color="#38bdf8" />;
      break;
    case 'materialui':
      icon = <SiMui size={iconSize} color="#1389ff" />;
      break;
    case 'javascript':
      icon = <SiJavascript size={iconSize} color="#f7e018" />;
      break;
    case 'typescript':
      icon = <SiTypescript size={iconSize} color="#3178c6" />;
      break;
    case 'react':
      icon = <SiReact size={iconSize} color="#86E1F9" />;
      break;
    case 'next.js':
      icon = <SiNextdotjs size={iconSize} color="#ffffff" />;
      break;
    case 'node.js':
      icon = <SiNodedotjs size={iconSize} color="#79b462" />;
      break;
    case 'nest.js':
      icon = <SiNestjs size={iconSize} color="#e0234e" />;
      break;
    default:
      break;
  }

  return icon;
};

export default tagToIconConverter;
