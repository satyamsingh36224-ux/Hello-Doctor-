
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourapp.doctor.v2',
  appName: 'Hello Doctor',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
