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

import MenuTitle from 'components/MenuTitle/MenuTitle';
import { Form, Label, Input } from './Filter.styled';

const variants = [
  { id: 1, name: 'HTML', icon: SiHtml5 },
  { id: 2, name: 'SASS', icon: SiSass },
  { id: 3, name: 'Tailwind', icon: SiTailwindcss },
  { id: 4, name: 'MaterialUI', icon: SiMui },
  { id: 5, name: 'JavaScript', icon: SiJavascript },
  { id: 6, name: 'TypeScript', icon: SiTypescript },
  { id: 7, name: 'React', icon: SiReact },
  { id: 8, name: 'Next.js', icon: SiNextdotjs },
  { id: 9, name: 'Node.js', icon: SiNodedotjs },
  { id: 10, name: 'NestJS', icon: SiNestjs },
];

const Filter = ({ onChange }) => {
  return (
    <>
      <MenuTitle title="technologies" />
      <Form>
        {variants.map(el => {
          return (
            <div key={el.id}>
              <Input
                type="checkbox"
                value={el.name}
                id={el.name}
                onChange={onChange}
              />
              <Label htmlFor={el.name} key={el.id}>
                <el.icon size={20} />
                {el.name}
              </Label>
            </div>
          );
        })}
      </Form>
    </>
  );
};

export default Filter;
