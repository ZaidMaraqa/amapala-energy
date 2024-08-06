import React from 'react';
import { Button, Text, BoxProps, IconButton, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface PaginatorProps extends BoxProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const surroundingPagesCount = 2;

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages = 0, onPageChange, ...rest }) => {
  let startPage = Math.max(2, currentPage - surroundingPagesCount);
  let endPage = Math.min(totalPages - 1, currentPage + surroundingPagesCount);

  const totalNumbers = surroundingPagesCount * 2 + 3;
  const totalBlocks = totalNumbers + 2;


  if (totalPages > totalBlocks) {
    if (currentPage < totalNumbers - 2) {
      endPage = totalNumbers - 2;
      startPage = 2;
    } else if (currentPage > totalPages - (totalNumbers - 3)) {
      startPage = totalPages - (totalNumbers - 3);
      endPage = totalPages - 1;
    }
  }

  if (totalPages <= 1) return null;

  return (
    <HStack justify='center' {...rest}>
      <IconButton
        aria-label='Previous Page'
        variant='outline'
        size='sm'
        border='none'
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        isDisabled={currentPage === 1}
        borderColor='transparent'
        icon={<ChevronLeftIcon boxSize='1.5rem' color={currentPage === 1 ? 'gray.300' : 'black'} />}
        _hover={{ bg: 'transparent' }}
      />
      <Button
        size='sm'
        mx='2'
        borderColor='transparent'
        variant={currentPage === 1 ? 'solid' : 'outline'}
        onClick={() => onPageChange(1)}
        backgroundColor={currentPage === 1 ? 'primeBlue' : 'white'}
        color={currentPage === 1 ? 'white' : 'black'}
        borderRadius={'50%'}
      >
        1
      </Button>
      {startPage > 2 && (
        <Text mx='2' color='gray'>
          ...
        </Text>
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(num => (
        <Button
          key={num}
          size='sm'
          mx='1'
          borderColor='transparent'
          variant={num === currentPage ? 'solid' : 'outline'}
          onClick={() => onPageChange(num)}
          borderRadius={'50%'}
          backgroundColor={num === currentPage ? 'primeBlue' : 'white'}
          color={num === currentPage ? 'white' : 'black'}
        >
          {num}
        </Button>
      ))}
      {endPage < totalPages - 1 && (
        <Text mx='2' color='gray'>
          ...
        </Text>
      )}
      {totalPages > 1 && (
        <Button
          size='sm'
          mx='2'
          borderColor='transparent'
          variant={currentPage === totalPages ? 'solid' : 'outline'}
          onClick={() => onPageChange(totalPages)}
          backgroundColor={currentPage === totalPages ? 'primeBlue' : 'white'}
          color={currentPage === totalPages ? 'white' : 'black'}
          borderRadius={'50%'}
        >
          {totalPages}
        </Button>
      )}
      <IconButton
        aria-label='Next Page'
        variant='outline'
        size='sm'
        border='none'
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        isDisabled={currentPage >= totalPages}
        icon={<ChevronRightIcon boxSize='1.5rem' color={currentPage >= totalPages ? 'gray.300' : 'black'} />}
        _hover={{ bg: 'transparent' }}
        _disabled={{ opacity: 0.4 }}
      />
    </HStack>
  );
};

export default Paginator;
