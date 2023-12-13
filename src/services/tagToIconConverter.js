import {
  SiHtml5,
  SiSass,
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
  const padding = '2px';

  switch (tag.toLowerCase()) {
    case 'html':
      icon = (
        <SiHtml5
          size={iconSize}
          style={{ backgroundColor: '#FEA55F', padding }}
        />
      );
      break;
    case 'sass':
      icon = (
        <SiSass
          size={iconSize}
          style={{ backgroundColor: '#cf649a', padding }}
        />
      );
      break;
    case 'javascript':
      icon = (
        <SiJavascript
          size={iconSize}
          style={{ backgroundColor: '#f7e018', padding }}
        />
      );
      break;
    case 'typescript':
      icon = (
        <SiTypescript
          size={iconSize}
          style={{ backgroundColor: '#3178c6', padding }}
        />
      );
      break;
    case 'react':
      icon = (
        <SiReact
          size={iconSize}
          style={{ backgroundColor: '#86E1F9', padding }}
        />
      );
      break;
    case 'next.js':
      icon = (
        <SiNextdotjs
          size={iconSize}
          style={{ backgroundColor: '#ffffff', padding }}
        />
      );
      break;
    case 'node.js':
      icon = (
        <SiNodedotjs
          size={iconSize}
          style={{ backgroundColor: '#79b462', padding }}
        />
      );
      break;

    case 'nest.js':
      icon = (
        <SiNestjs
          size={iconSize}
          style={{ backgroundColor: '#e0234e', padding }}
        />
      );
      break;

    default:
      break;
  }

  return icon;
};

export default tagToIconConverter;
