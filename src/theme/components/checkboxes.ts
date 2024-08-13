import { defineStyleConfig } from '@chakra-ui/react';

export const CheckBoxStyle = defineStyleConfig({
  baseStyle: {
    control: {
      borderColor: '#969696',
      width: '.875rem',
      height: '.875rem',
      borderRadius: '.125rem',
      borderWidth:'1.2px',
      padding: '0.5rem',
      _checked: {
        borderColor: 'white',
        backgroundColor: 'primeBlue',
        color: 'white',
      },
    },
    icon: {
      width: '0.5rem',
      height: '0.5rem',
    },
    label: {
      color: '#969696',
    },
  },
});