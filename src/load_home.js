import './style.css'
import Image from './sushi-bar.jpg'

const loadHome = () => {
  const header = document.createElement('h1');
  header.textContent = 'Welcome to Fort Wayne Sushi!';

  const image = document.createElement('img');
  image.src = Image;
  image.classList.add('interior-photo');

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Fort Wayne Sushi is the premiere sushi destination \
  in northeast Indiana! We use only the freshest fish, the highest quality \
  rice, and we employ some of the greatest sushi chefs in the country.';

  const hoursHeader = document.createElement('h3');
  hoursHeader.textContent = 'Our Hours:';

  const hoursList = document.createElement('ul');
  hoursList.classList.add('hours')
  hoursList.innerHTML = '<li>Monday: 9AM&ndash;9PM</li>\
                         <li>Tuesday: 9AM&ndash;9PM</li>\
                         <li>Wednesday: 9AM&ndash;9PM</li>\
                         <li>Thursday: 9AM&ndash;9PM</li>\
                         <li>Friday: 9AM&ndash;9PM</li>';

  document.getElementById('content').append(header,
                                            image,
                                            paragraph,
                                            hoursHeader,
                                            hoursList);
}

export default loadHome;
