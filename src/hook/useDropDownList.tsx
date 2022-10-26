import { useState, useCallback, useEffect, SyntheticEvent } from 'react';

const useDropDownList = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback((e: SyntheticEvent) => {
    e.stopPropagation();
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => window.removeEventListener('click', handleClose);
  }, [handleClose]);

  return { open, handleOpen, handleClose };
};
export default useDropDownList;
