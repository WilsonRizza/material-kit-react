import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import { DingdingOutlined } from '@ant-design/icons';
import CIcon  from '@coreui/icons-react';
import styles from './styles.css'
import Iconify from '../components/iconify';

// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import mock from './mock.json'
// ----------------------------------------------------------------------


export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Futsal Fantasy </title>
      </Helmet>

      <Container maxWidth="xl">
        <div className ="card" style={{display: 'flex', backgroundColor:'black'}}/>
        <Grid container spacing={1}>

        <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Valências físicas"
              chartLabels={['Ritmo', 'Finalização', 'Passe', 'Dribles', 'Defesa', 'Físico']}
              chartData={[
                { name: 'Potencial máximo', data: [100, 100, 100, 100, 100, 100] },
                { name: 'Condicionamento atual', data: [78, 75, 80, 80, 85, 81] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

        <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Maior volume de treino até agora"
              chartData={[
                { label: 'Força', value: 4 },
                { label: 'Fortalecimento', value: 2 },
                { label: 'Corrida', value: 2 },
                { label: 'Específicos de futsal', value: 3 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          
          
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Periodização anual"
              
              chartLabels={[
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
                '01/01/2024',
                '02/01/2024',
                '03/01/2024',
                '04/01/2024',
                '05/01/2024',
                '06/01/2024',
                '07/01/2024',
              ]}
              chartData={[
                {
                  name: 'Meses',
                  type: 'column',
                  fill: 'solid',
                  data: [40, 60, 80, 40, 60, 80, 50, 70, 90, 60, 70],
                },
                {
                  name: 'Intensidade',
                  type: 'area',
                  fill: 'gradient',
                  data: [50, 60, 70, 60, 70, 80, 70, 80, 90, 75, 80],
                },
                {
                  name: 'Volume',
                  type: 'line',
                  fill: 'solid',
                  data: [70, 80, 90, 70, 80, 90, 75, 85, 95, 75, 85],
                },
              ]}
            />
          </Grid>


        </Grid>
      </Container>
    </>
  );
}