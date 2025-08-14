import { Input, Label } from './styles';
import React from 'react';

type Props = {
     id: string;
     type: string;
     placeholder: string;
     value: string;
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputAddContato = ({ id, type, placeholder, value, onChange }: Props) => {
     const formatarTelefone = (valor: string) => {
          valor = valor.replace(/\D/g, '');
          if (valor.length > 11) valor = valor.substring(0, 11);

          if (valor.length > 6) {
               return `(${valor.substring(0, 2)}) ${valor.substring(2, 7)}-${valor.substring(7)}`;
          } else if (valor.length > 2) {
               return `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
          } else if (valor.length > 0) {
               return `(${valor}`;
          }
          return '';
     };

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          let valor = e.target.value;
          if (type === 'tel') {
               valor = formatarTelefone(valor);
          }

          const event = { ...e, target: { ...e.target, value: valor } };
          onChange(event as React.ChangeEvent<HTMLInputElement>);
     };

     return (
          <>
               <Label htmlFor={id}>{id}</Label>
               <Input
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    value={value}
                    vazio={value === ''}
                    onChange={handleChange}
               />
          </>
     );
};

export default InputAddContato;
