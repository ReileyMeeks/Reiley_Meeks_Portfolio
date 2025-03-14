import { Modal, Box, IconButton, Stack, Button, useMediaQuery, useTheme } from '@mui/material';
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
    link.href = '/assets/Reiley_Meeks_SoftwareEngineer_Resume.pdf';
    link.download = 'Reiley_Meeks_SoftwareEngineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          width: '95vw',
          height: '95vh',
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          borderRadius: 2,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{ mb: 2 }}
        >
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
            {isMobile ? 'Download' : 'Download PDF'}
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
        </Stack>

        <Box
          sx={{
            flex: 1,
            overflow: 'hidden',
            borderRadius: 1,
            position: 'relative',
            bgcolor: 'white',
          }}
        >
          {isMobile ? (
            <iframe
              src={`/assets/Reiley_Meeks_SoftwareEngineer_Resume.pdf#view=FitH&scrollbar=1&toolbar=0&statusbar=0&messages=0&navpanes=0`}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '4px',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
              }}
              title="Resume PDF"
            />
          ) : (
            <object
              data="/assets/Reiley_Meeks_SoftwareEngineer_Resume.pdf"
              type="application/pdf"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              <iframe
                src="/assets/Reiley_Meeks_SoftwareEngineer_Resume.pdf"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '4px',
                }}
                title="Resume PDF"
              />
            </object>
          )}
        </Box>
      </Box>
    </Modal>
  );
} 