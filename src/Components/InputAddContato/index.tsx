import { Input, Label } from './styles';

type Props = {
     id: string;
     type: string;
     placeholder: string;
     value?: string;
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputAddContato = ({ id, type, placeholder, value, onChange }: Props) => {
     return (
          <>
               <Label htmlFor={id}>{id}</Label>
               <Input
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    value={value}
                    onChange={onChange}
               />
          </>
     );
};

export default InputAddContato;
