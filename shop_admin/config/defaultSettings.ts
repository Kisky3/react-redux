import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  "navTheme": "light",
  "primaryColor": "#13C2C2",
  "layout": "side",
  "contentWidth": "Fluid",
  "fixedHeader": false,
  "fixSiderbar": true,
  "pwa": false,
  "logo": "https://user-images.githubusercontent.com/23165804/153423709-ced2ec09-a09a-43eb-8984-3957d6db0f33.png",
  "headerHeight": 48,
  "splitMenus": false
};

export default Settings;
