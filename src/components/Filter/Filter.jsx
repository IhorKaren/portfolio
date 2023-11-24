import MenuTitle from 'components/MenuTitle/MenuTitle';
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandNodejs,
} from 'react-icons/tb';
import { Form, Label, Input } from './Filter.styled';

const variants = [
  { id: 1, name: 'HTML', icon: TbBrandHtml5 },
  { id: 2, name: 'CSS', icon: TbBrandCss3 },
  { id: 3, name: 'JavaScript', icon: TbBrandJavascript },
  { id: 4, name: 'TypeScript', icon: TbBrandTypescript },
  { id: 5, name: 'React', icon: TbBrandReact },
  { id: 6, name: 'Next.js', icon: TbBrandNextjs },
  { id: 7, name: 'Node.js', icon: TbBrandNodejs },
];

const Filter = () => {
  return (
    <>
      <MenuTitle title="projects" />
      <Form>
        {variants.map(el => {
          return (
            <div key={el.id}>
              <Input type="checkbox" value={el.name} id={el.name} />
              <Label htmlFor={el.name} key={el.id}>
                <el.icon size={24} />
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
