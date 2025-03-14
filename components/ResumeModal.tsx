import { Modal, Box, IconButton } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
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
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 25,
            top: 25,
            color: 'white',
            bgcolor: 'rgba(247, 42, 42, 0.5)',
            '&:hover': {
              bgcolor: 'rgba(236, 9, 9, 0.5)',
            },
          }}
        >
          <IoMdClose />
        </IconButton>
        <Box
          component="iframe"
          src="/assets/Reiley_Meeks_SoftwareEngineer_Resume.pdf"
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