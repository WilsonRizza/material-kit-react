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
          
        
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Periodização anual"
              
              chartLabels={[
                '01/09/2023',
                '02/10/2023',
                '03/11/2023',
                '04/12/2023',
                '05/01/2024',
                '06/02/2024',
                '07/03/2024',
                '08/04/2024',
                '09/05/2024',
                '10/06/2024',
                '11/07/2024',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Maior volume de treino até agora"
              chartData={[
                { label: 'Potência', value: 4344 },
                { label: 'Agilidade', value: 5435 },
                { label: 'Velocidade máxima', value: 1443 },
                { label: 'Resistência', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Valências físicas"
              chartLabels={['Ritmo', 'Finalização', 'Passe', 'Dribles', 'Defesa', 'Físico']}
              chartData={[
                { name: 'Potencial máximo', data: [100, 100, 100, 100, 100, 100] },
                { name: 'Condicionamento atual', data: [80, 86, 88, 79, 52, 72] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>


        </Grid>
      </Container>
    </>
  );
}