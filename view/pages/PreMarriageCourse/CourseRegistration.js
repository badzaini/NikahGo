import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material'

export default function CourseRegistration() {
  return (

    <Container sx={{ display: "", justifyContent: "center", width: "100%", height: "100%", mt: 20 }}>

      <Typography variant="h4">
        Terma Dan Peraturan
      </Typography>

      <Typography variant="h5">
        Terma Dan Peraturan Kursus Pra Perkahwinan Islam Jabatan Agama Islam Pahang
      </Typography>

      <Typography variant="body" component='p'>
        1. Hanya peserta yang berdaftar sahaja dibenarkan menyertai kursus pada hari yang berkenaan <br />
        2. Bayaran penyertaan hendaklah dilakukan di kaunter Pejabat Agama Islam Daerah sebelum tarikh pelaksanaan kursus.<br />
        3. Pengesahan kehadiran hendaklah dibuat pada hari kursus dan pada setiap slot yang dijalankan.<br />
        4. Penangguhan kursus dibenarkan untuk satu kali sahaja dan hendaklah dibuat sekurang-kurangnya seminggu awal daripada tarikh yang didaftarkan kepada satu sesi kursus yang dibuka pendaftarannya sahaja. Tiada sebarang caj dikenakan.<br />
        5. Penangguhan kursus hanya dibuat selepas memuat naik bukti pembayaran yuran kursus.<br />
        6. Penangguhan kurang dari tempoh seminggu, bayaran penangguhan sebanyak RM40.00 akan dikenakan.<br />
        7. Penangguhan kursus boleh dibuat dengan klik button TUKAR MASA untuk pilih masa lain kursus tersebut.
        8. Ketidakhadiran tanpa maklum akan mengakibatkan pendaftaran kursus terbatal dan yuran tidak akan dikembalikan. Pendaftaran baharu perlu dibuat bagi mengikuti semula kursus.<br />
        9. Pembatalan pendaftaran kursus, yuran tidak akan dikembalikan.<br />
        10. Peserta kursus hendaklah berpakaian kemas, sopan dan menutup aurat. Pakaian jarang dan ketat adalah dilarang sama sekali.<br />
        11. Peserta hendaklah menjaga adab dan tingkahlaku serta tidak menimbulkan suasana tidak tenteram sepanjang masa kursus ini berjalan.<br />
        12. Peserta yang hadir ke kursus juga hendaklah mematuhi langkah-langkah keselamatan yang telah ditetapkan oleh pihak penganjur dan Pejabat Agama Islam Daerah.<br />
        13. Sebarang masalah berkaitan kursus, sila rujuk/maklum kepada urusetia bertugas. Peserta hendaklah mematuhi segala peraturan dan arahan dari semasa ke semasa oleh urusetia.<br />
      </Typography>

      <Box>
        <Button variant="contained">Daftar Penyertaan</Button>
      </Box>
    </Container>

  );
}
