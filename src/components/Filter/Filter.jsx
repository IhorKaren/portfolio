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

import MenuTitle from 'components/MenuTitle/MenuTitle';
import { Form, Label, Input } from './Filter.styled';

const variants = [
  { id: 1, name: 'HTML', icon: SiHtml5 },
  { id: 2, name: 'SASS', icon: SiSass },
  { id: 3, name: 'JavaScript', icon: SiJavascript },
  { id: 4, name: 'TypeScript', icon: SiTypescript },
  { id: 5, name: 'React', icon: SiReact },
  { id: 6, name: 'Next.js', icon: SiNextdotjs },
  { id: 7, name: 'Node.js', icon: SiNodedotjs },
  { id: 8, name: 'NestJS', icon: SiNestjs },
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
