import React from 'react';
import {
  Button,
  Typography,
  Container,
  Box,
  Grid,
  Link,
} from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#e0e0e0',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const UploadButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginLeft: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const Caption = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Footer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));

const LinkText = styled(Link)(({ theme }) => ({
  margin: '0 4px',
}));

export default function IncentiveDocuments() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box>
                <Typography variant="h4" gutterBottom sx={{ borderLeft: "13px solid black" }}>INCENTIVE DOCUMENTS</Typography>
        </Box>
        <FormContainer>
          <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
            Incentive Documents
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center" sx={{ marginBottom: 1 }}>
                Salinan Slip Gaji*
              </Typography>
              <Typography variant="subtitle2" align="center">
                <UploadButton variant="contained" component="label">
                  Upload Files
                  <input type="file" style={{ display: 'none' }} />
                </UploadButton>
              </Typography>
            </Grid>

            {/* Repeat the above pattern for other input fields */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center" sx={{ marginBottom: 1 }}>
                Salinan Kad Pengenalan*
              </Typography>
              <Typography variant="subtitle2" align="center">
                <UploadButton variant="contained" component="label">
                  Upload Files
                  <input type="file" style={{ display: 'none' }} />
                </UploadButton>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center" sx={{ marginBottom: 1 }}>
                Salinan Catatan Akad Nikah*
              </Typography>
              <Typography variant="subtitle2" align="center">
                <UploadButton variant="contained" component="label">
                  Upload Files
                  <input type="file" style={{ display: 'none' }} />
                </UploadButton>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center" sx={{ marginBottom: 1 }}>
                Salinan Penyata Bank Akaun*
              </Typography>
              <Typography variant="subtitle2" align="center">
                <UploadButton variant="contained" component="label">
                  Upload Files
                  <input type="file" style={{ display: 'none' }} />
                </UploadButton>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center" sx={{ marginBottom: 1 }}>
                Pengesahan Bermastautin di Pahang*
              </Typography>
              <Typography variant="subtitle2" align="center">
                <UploadButton variant="contained" component="label">
                  Upload Files
                  <input type="file" style={{ display: 'none' }} />
                </UploadButton>
              </Typography>
            </Grid>
          </Grid>
        </FormContainer>

        <SubmitButton type="submit" fullWidth variant="contained">
        KEMASKINI
        </SubmitButton>

        
        <Footer>
          <LinkText href="#" variant="body2">
            Terms of Service
          </LinkText>
          |
          <LinkText href="#" variant="body2">
            Privacy Policy
          </LinkText>
        </Footer>
      </Box>
    </Container>
  );
}
