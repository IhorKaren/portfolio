import {
  TbBrandHtml5,
  TbBrandSass,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandNodejs,
} from 'react-icons/tb';

const tagToIconConverter = tag => {
  let icon = '';
  const iconSize = 24;
  const borderRadius = '4px';

  switch (tag.toLowerCase()) {
    case 'html':
      icon = (
        <TbBrandHtml5 size={iconSize} style={{ backgroundColor: '#FEA55F' }} />
      );
      break;
    case 'sass':
      icon = (
        <TbBrandSass size={iconSize} style={{ backgroundColor: '#cf649a' }} />
      );
      break;
    case 'javascript':
      icon = (
        <TbBrandJavascript
          size={iconSize}
          style={{ backgroundColor: '#f7e018' }}
        />
      );
      break;
    case 'typescript':
      icon = (
        <TbBrandTypescript
          size={iconSize}
          style={{ backgroundColor: '#3178c6' }}
        />
      );
      break;
    case 'react':
      icon = (
        <TbBrandReact size={iconSize} style={{ backgroundColor: '#86E1F9' }} />
      );
      break;
    case 'next.js':
      icon = (
        <TbBrandNextjs size={iconSize} style={{ backgroundColor: '#ffffff' }} />
      );
      break;
    case 'node.js':
      icon = (
        <TbBrandNodejs size={iconSize} style={{ backgroundColor: '#79b462' }} />
      );
      break;

    default:
      break;
  }

  return icon;
};

export default tagToIconConverter;
