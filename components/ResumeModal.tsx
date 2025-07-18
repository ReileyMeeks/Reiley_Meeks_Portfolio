import { useEffect } from 'react';
import { Modal, Box, IconButton, Button, useMediaQuery, useTheme } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Reiley_Meeks_Engineer_Resume';
    link.download = 'Reiley_Meeks_Engineer_Resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const openPdfInNewTab = () => {
    window.open('/assets/Reiley_Meeks_Engineer_Resume', '_blank');
  };
  
  // On mobile, open PDF in new tab instead of showing modal
  useEffect(() => {
    if (open && isMobile) {
      openPdfInNewTab();
      onClose();
    }
  }, [open, isMobile, onClose]);
  
  // If mobile, don't render the modal content
  if (isMobile) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="resume-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        sx={{
          position: 'relative',
          width: '90vw',
          height: '90vh',
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          borderRadius: 2,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: 2,
        }}
      >
        <Box sx={{ position: 'absolute', right: 8, top: 8, display: 'flex', gap: 1 }}>
          <Button
            startIcon={<FaDownload />}
            onClick={handleDownload}
            sx={{
              color: 'white',
              bgcolor: 'rgba(49, 130, 206, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(49, 130, 206, 0.7)',
              },
              borderRadius: '8px',
              textTransform: 'none',
            }}
          >
            Download
          </Button>
          <IconButton
            onClick={onClose}
            sx={{
              color: 'white',
              bgcolor: 'rgba(247, 42, 42, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(236, 9, 9, 0.5)',
              },
            }}
          >
            <IoMdClose />
          </IconButton>
        </Box>
        <Box
          component="iframe"
          src="/assets/Reiley_Meeks_Engineer_Resume"
          sx={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: 1,
          }}
        />
      </Box>
    </Modal>
  );
} 