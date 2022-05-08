import { Link } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';

let books = [
  {
    name: 'Lord of the flies',
    filename: 'lord.pdf',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1469412256l/29236541.jpg',
  },
  {
    name: 'Gutshot',
    filename: 'gutshot.pdf',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405015536l/22237153.jpg',
  },
  {
    name: 'Man',
    filename: 'man.pdf',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400838779l/20604389.jpg',
  },
  {
    name: 'Dear Life Stories',
    filename: 'Dear Life Stories.pdf',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333579320l/13530981.jpg',
  },
];

const useStyles = makeStyles({
  box: {
    backgroundPosition: 'center',
    backgroundImage: `url('/main.jpg')`,
  },
});

export default function EbookList() {
  const classes = useStyles();
  return (
    <main>
      {/* Hero unit */}
      <Box
        className={classes.box}
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome to the PDFopen
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            The number one place to open your PDF
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>

            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {books.map((book) => (
            <Grid item key={book} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Link to={`/ebook/${book.filename}`}>
                  <CardMedia
                    component="img"
                    sx={
                      {
                        // 16:9
                      }
                    }
                    image={book.image}
                    alt={book.name}
                  />
                </Link>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.name}
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <nav>
                    <Link to="/python">
                      <Button size="small">Open</Button>
                    </Link>
                  </nav>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
