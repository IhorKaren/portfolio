import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
import { Form } from './Filter.styled';

const variants = [
  { id: 1, name: 'HTML', icon: <TbBrandHtml5 size={24} /> },
  { id: 2, name: 'CSS', icon: <TbBrandCss3 size={24} /> },
  { id: 3, name: 'JavaScript', icon: <TbBrandJavascript size={24} /> },
  { id: 4, name: 'TypeScript', icon: <TbBrandTypescript size={24} /> },
  { id: 5, name: 'React', icon: <TbBrandReact size={24} /> },
  { id: 6, name: 'Next.js', icon: <TbBrandNextjs size={24} /> },
  { id: 7, name: 'Node.js', icon: <TbBrandNodejs size={24} /> },
];

const Filter = () => {
  return (
    <>
      <MenuTitle title="projects" />
      <Form>
        {variants.map(el => {
          return (
            <FormControlLabel
              key={el.id}
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontFamily: 'FiraCode',
                  transition: 'color 200ms linear',
                },
                '&:hover': {
                  color: '#fff',
                },
              }}
              control={
                <Checkbox
                  icon={el.icon}
                  checkedIcon={el.icon}
                  sx={{
                    color: '#607b96',
                    transition: 'color 200ms linear',
                    '&:hover': {
                      '& + .MuiFormControlLabel-label': {
                        color: '#fff',
                      },
                    },
                    '&.Mui-checked': {
                      '&, & + .MuiFormControlLabel-label': {
                        color: '#fff',
                      },
                    },
                  }}
                />
              }
              label={el.name}
            />
          );
        })}
      </Form>
    </>
  );
};

export default Filter;
