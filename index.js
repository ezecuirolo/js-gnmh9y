// Import stylesheets
import './style.css';

var url =
  '/lonuevo_DisplayType_G_GENDER_339668#applied_filter_id%3DGENDER%26applied_filter_name%3DG%C3%A9nero%26applied_filter_order%3D2%26applied_value_id%3D339668%26applied_value_name%3DNi%C3%B1as%26applied_value_order%3D2%26applied_value_results%3D29%26is_custom%3Dfalse';
url.split('/')[1];
switch (url) {
  case '/lonuevo':{
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `<h1>Funciona</h1>`;
  }
  case url.includes('GENDER_339668'):
      {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `<h1>Funciona</h1>`;
      }
    break;

  default:
    break;
}